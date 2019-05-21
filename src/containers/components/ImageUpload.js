import React from "react";
import PropTypes from "prop-types";
import Button from "components/CustomButtons/Button.jsx";
import {connect} from "react-redux"
import defaultImage from "assets/img/image_placeholder.jpg";
import defaultAvatar from "assets/img/placeholder.jpg";
import {uploadPicture} from "../../redux/actions/createActions"

class ImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type:"",
      name:"",
      file: null,
      imagePreviewUrl: this.props.avatar ? defaultAvatar : defaultImage,
      isUpdating: false
    };
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
   
  }
  handleImageChange(e) {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    console.log(file.name)
    reader.onloadend = () => {
      this.setState({
        name: file.name,
        type:file.type,
        file: reader.result,
        imagePreviewUrl: reader.result
      });
    };
    reader.readAsDataURL(file);
  }

  handleSubmit(e) {
    this.setState({
      isUpdating: true
    })
    const id = this.props.state.dashboard.dashboard._id
    const data = {
        type: this.state.type,
        name: this.state.name,
        photo: this.state.file.split(',')[1]
    }
    //  console.log("DATA",data)
     this.props.uploadPicture(data, id)
  }

  handleClick() {
    this.refs.fileInput.click();
  }

  render() {
      // console.log("IMAGE", this.props.state.dashboard.dashboard._id)
    var {
      avatar,
      addButtonProps,
      changeButtonProps,
      uploadButtonProps,
      cancel
    } = this.props;
    return (
      <div className="fileinput text-center">
        <input type="file" onChange={this.handleImageChange} ref="fileInput" />
        <div className={"thumbnail" +" img-circle"} style={{height:"100px", width:"100px"}}>
          <img src={this.state.imagePreviewUrl} alt="..." />
        </div>
        <div>
          {this.state.file === null ? (
            <Button 
               color="success"
               onClick={() => this.handleClick()}>
              {"Add Photo"}
            </Button>
             ) : (
               this.state.isUpdating ? 
               <span>
               <Button 
                color="warning"
                disabled
               >
                 Updating...
               </Button>
              </span>
               :
              <span>
                <Button 
                  color="danger"
                  onClick={() =>cancel()}>
                  Cancel
                </Button>
                <Button
                  color="success"
                  onClick={() => this.handleSubmit()}
                >
                  Upload
                </Button>
              </span>
          )}
        </div>
      </div>
    );
  }
}

ImageUpload.propTypes = {
  avatar: PropTypes.bool,
  addButtonProps: PropTypes.object,
  changeButtonProps: PropTypes.object,
  removeButtonProps: PropTypes.object
};

const mapStateToProps = state => {
    return {
        state
    }
}
export default connect(mapStateToProps, {uploadPicture})(ImageUpload);
