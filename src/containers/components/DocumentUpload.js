import React from "react";
import PropTypes from "prop-types";
import Button from "components/CustomButtons/Button.jsx";
import {connect} from "react-redux"
import defaultImage from "assets/img/image_placeholder.jpg";
import defaultAvatar from "assets/img/placeholder.jpg";
import {uploadDocument} from "../../redux/actions/createActions"

class DocumentUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isUpdating: false,
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
    this.setState({
      isUpdating:true
    })
    const id = this.props.state.dashboard.dashboard._id
    console.log("ID", id)
    const data = {
        type: this.state.type,
        name: this.state.name,
        photo: this.state.file.split(',')[1]
    }
     this.props.uploadDocument(data, id)
  }
  handleClick() {
    this.refs.fileInput.click();
  }

  render() {
    var {
      cancel
    } = this.props;
    return (
      <div className="fileinput text-center">
        <input type="file" onChange={this.handleImageChange} ref="fileInput" />
        <div>
          {this.state.file === null ? (
            <Button 
              color="success"
              onClick={() => this.handleClick()}>
              {"Add Document"}
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

DocumentUpload.propTypes = {
  addButtonProps: PropTypes.object,
  changeButtonProps: PropTypes.object,
  removeButtonProps: PropTypes.object
};

const mapStateToProps = state => {
    return {
        state
    }
}
export default connect(mapStateToProps, {uploadDocument})(DocumentUpload);
