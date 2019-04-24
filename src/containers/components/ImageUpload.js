import React from "react";
import PropTypes from "prop-types";
import Button from "components/CustomButtons/Button.jsx";
import {connect} from "react-redux"
import defaultImage from "assets/img/image_placeholder.jpg";
import defaultAvatar from "assets/img/placeholder.jpg";

class ImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      imagePreviewUrl: this.props.avatar ? defaultAvatar : defaultImage
    };
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
   
  }
  handleImageChange(e) {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file: reader.result,
        imagePreviewUrl: reader.result
      });
    };
    reader.readAsDataURL(file);
  }
  handleSubmit(e) {

  }
  handleClick() {
    this.refs.fileInput.click();
  }

  render() {
      console.log("IMAGE", this.state.file)
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
        <div className={"thumbnail" +" img-circle"}>
          <img src={this.state.imagePreviewUrl} alt="..." />
        </div>
        <div>
          {this.state.file === null ? (
            <Button {...addButtonProps} onClick={() => this.handleClick()}>
              {"Add Photo"}
            </Button>
          ) : (
            <span>
              <Button {...changeButtonProps} onClick={() =>cancel()}>
                Cancel
              </Button>
              <Button
                {...uploadButtonProps}
                onClick={() => this.handleRemove()}
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
export default connect(mapStateToProps, {})(ImageUpload);
