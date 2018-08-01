import React, { Component } from 'react'
import FileDrop from 'react-file-drop'

export default class PhotoMaker extends Component {
  render() {

    
    return (

      <div className="uploadToPic" >

        <FileDrop onDrop={this.props.uploadPic}>
            <p className="upLoadText"> Drag and drop here </p> 
            <input type="file" id="fileuploader" name="file" accept="*" onChange={this.props.uploadPic}/>
          <label htmlFor="fileuploader"><i className="fas fa-upload"></i></label>
        </FileDrop>

        <div className="photoDiv">
          <p className="upLoadText"> Use your webCam </p>
          <div className="photoMaker" onClick={this.props.startRecording}>
            <i className="fas fa-camera"></i>
          </div> 
        </div>

      </div>
    )
  }
}
