import React, { Component } from 'react'
import TagPrompts from '../TagPrompts/TagPrompts'
import { connect } from 'react-redux';
import { urlFromCloudinary, getTagsFromGoogle, updateGiftInDB, deleteGiftFromDB} from '../../redux/actions'
import './Update.css'
import Loading from '../loading/Loading';
import Fireworks from '../Fireworks/Fireworks';

const CLOUDINARY_PRESET = 'xnny1dgk'


class Update extends Component {

  updatePic = (files, event) => {
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
    }
  }


  updateGift = () => {
    let finalTags = this.props.googleTags.filter(tag => !this.state.deadTags.includes(tag))

    let updateGift = {
      id: this.props.gift._id,
      time: this.props.time,
      picture: this.props.cloudinaryURL,
      tags: finalTags
    }

    this.props.updateGiftInDB(updateGift)
    this.setState({finished: true})

  }

  killTag = (e) => {
    e.target.classList.add('dying')
    this.setState({ deadTags: [...this.state.deadTags, e.target.id]})
  }

  dissapear = (e) => {
    e.target.classList.add('dead')
  }

  deleteGift = () => {
    this.props.deleteGiftFromDB(this.props.gift._id)
    this.setState({finished: true})

  }

  constructor(props) {
    super(props) 
    this.state = {
      deadTags:[],
      finished: false
    }
  }


  render() {

    if (this.state.finished === true) {
      return <Fireworks />
    } else if (this.props.cloudinaryURL.length === 0) { 
    return (
      <div className="updater">

      <span className="updateGift"> click to update </span>
      <input type="file" id="fileuploader" name="file" accept="*" onChange={this.updatePic}/>
      <label htmlFor="fileuploader">
        <img src={this.props.gift ? this.props.gift.picture : null} 
        className="updateGlow"
        onTransitionEnd={this.glowImage} 
        ref="glowyImage"
        alt="gift To Update"/>
      </label>


        <div className="deleteGift" onClick={this.deleteGift}>
          <span> All Gone! </span>
        </div>

      </div>
    )
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
          <TagPrompts number={2} submitStuff={this.updateGift} buttonName={'Update'}/>
      </div>
    )
  } else {
    return <Loading />
  }
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
  updateGiftInDB: (data) => dispatch(updateGiftInDB(data)),
  deleteGiftFromDB: (data) => dispatch(deleteGiftFromDB(data)),

})


export default connect(mapStateToProps, mapDispatchToProps)(Update)