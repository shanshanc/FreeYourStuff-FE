import React, { Component } from 'react'
// import Webcam from 'react-webcam'
import PhotoMaker from '../PhotoMaker/PhotoMaker';
import TagPrompts from '../TagPrompts/TagPrompts';
import { connect } from 'react-redux';
import { urlFromCloudinary, getTagsFromGoogle, getGeocode, sendNewGiftToDB} from '../../redux/actions'
import './AddStuff.css'
import Fireworks from '../Fireworks/Fireworks';
import Loading from '../loading/Loading';

const CLOUDINARY_PRESET = 'xnny1dgk'

class AddStuff extends Component {

  uploadPic = (files, event) => {
    let picture
    if (files[0]) picture = files[0]
    else picture = files.target.files[0]    
    let formData = new FormData()
    formData.append('file', picture)
    formData.append('upload_preset', CLOUDINARY_PRESET)
    formData.append('api_key', '981645852329497')
    this.props.urlFromCloudinary(formData)
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.props.cloudinaryURL.length > 1 && this.props.needTags) { 
      this.props.getTagsFromGoogle(this.props.cloudinaryURL)
      this.props.getGeocode(this.props.location)
    }
  }

  submitGift = () => {
    let finalTags = this.props.googleTags.filter(tag => !this.state.deadTags.includes(tag))
    let newGift = {
      time: Date.now(),
      picture: this.props.cloudinaryURL,
      location: this.props.location,
      address: this.props.address,
      tags: finalTags
    }
    this.props.sendNewGiftToDB(newGift)
    this.setState({finished: true})
  }


  // setRef = (webcam) => {
  //   this.webcam = webcam
  // }

  // startRecording = () => {
  //   this.setState({recording: true})
  // }

  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
    //Image Src = base64 string to send to google
    this.setState({
      recording: false,
      video: "",
      newPhoto: imageSrc,
      taken: true
    })
  };


  constructor(props) {
    super(props)
    this.state={
      deadTags: [],
      recording: false,
      finished: false,
      loading: false,
    }
  }


  killTag = (e) => {
    e.target.classList.add('dying')
    this.setState({ deadTags: [...this.state.deadTags, e.target.id]})
  }

  dissapear = (e) => e.target.classList.add('dead')
  

  render() {
    if (this.state.finished === true) { return <Fireworks />
  } else if (this.state.recording) {
      // const videoConstraints = {
      //   video:true,
      //   audio:false
      // };
      // return (
      //   <div className="cameraLand">
      //     <Webcam 
      //     audio={false}
      //     ref={this.setRef}
      //     screenshotFormat='image/jpeg'
      //     videoConstraints={videoConstraints} />
      //     <button className='snap' onClick={this.capture} />
      //   </div>
      //)
    } else if (this.props.googleTags.length > 0) {
      return (
        <div className="picturePresent">
          <img src={this.props.cloudinaryURL} alt="yourPhoto"/>
          <div className="tags">
            {this.props.googleTags.map((tag, i) => {
              return <p key={i}
                        id={tag} 
                        onClick={this.killTag}
                        onTransitionEnd={this.dissapear}> {tag} </p>
            })}
          </div>
          <TagPrompts number={2} submitStuff={this.submitGift} buttonName={'Send'}/>
        </div>
      )
    } else if (this.props.newGift.picture) {

      return(<h1> SUCcESS </h1>)
    
    } else if (this.props.cloudinaryURL.length === 0) {
      return (
        <div className="uploader">
          <PhotoMaker uploadPic={this.uploadPic} startRecording={this.startRecording} />
          <TagPrompts number={3} buttonName={'Send'}/>
        </div>
      )
    } else return <Loading />
  }
}



const mapStateToProps = (state) => ({

  location: state.location,
  waitingForApi: state.waitingForApi,
  cloudinaryURL: state.cloudinaryURL,
  googleTags: state.googleTags,
  finalTags: [],
  needTags: state.needTags,
  address: state.address,
  newGift: state.newGift,
 
})

const mapDispatchToProps = (dispatch) => ({

  urlFromCloudinary: (data) => dispatch(urlFromCloudinary(data)),
  getTagsFromGoogle: (data) => dispatch(getTagsFromGoogle(data)),
  getGeocode: (data) => dispatch(getGeocode(data)),
  sendNewGiftToDB: (data) => dispatch(sendNewGiftToDB(data))

})


export default connect(mapStateToProps, mapDispatchToProps)(AddStuff)