import React from "react";
import PropTypes from "prop-types";
import Button from "components/CustomButtons/Button.jsx";
import {connect} from "react-redux"
import defaultImage from "assets/img/image_placeholder.jpg";
import defaultAvatar from "assets/img/placeholder.jpg";
import {uploadDocument} from "../../redux/actions/createActions"

class DocumentUploadA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type:"",
      name:"",
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
    const id = this.props.state.dashboard.dashboard._id
    console.log("ID", id)
    const data = {
        type: this.state.type,
        name: this.state.name,
        photo: this.state.file.split(',')[1]
    }
     console.log("DATA",data)
     this.props.uploadDocument(data, id)
  }
  handleClick() {
    this.refs.fileInput.click();
  }

  render() {
      console.log("DOCUMENT", this.props.state.dashboard.dashboard._id)
    var {
      addButtonProps,
      changeButtonProps,
      uploadButtonProps,
      cancel
    } = this.props;
    return (
      <div className="fileinput text-center">
        <input type="file" onChange={this.handleImageChange} ref="fileInput" />
        <div>
          {this.state.file === null ? (
            <Button {...addButtonProps} onClick={() => this.handleClick()}>
              {"Add Document"}
            </Button>
          ) : (
            <span>
              <Button {...changeButtonProps} onClick={() =>cancel()}>
                Cancel
              </Button>
              <Button
                {...uploadButtonProps}
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

DocumentUploadA.propTypes = {
  addButtonProps: PropTypes.object,
  changeButtonProps: PropTypes.object,
  removeButtonProps: PropTypes.object
};

const mapStateToProps = state => {
    return {
        state
    }
}
export default connect(mapStateToProps, {uploadDocument})(DocumentUploadA);
