import React from "react";
import Modal from 'react-bootstrap/Modal'
//import PropTypes from 'prop-types';
//import IdeaSubmissionPreview from '../../../domain/idea-submission-container/component/previewcomponent/ideasubmissionpreview';

class NissanModalpopup extends React.Component {

  render() {
    console.log(this.props.success)
    return (
      <React.Fragment>
        <Modal show={true} scrollable
          dialogClassName={this.props.success?"modalSuccess":"nissan-modal-90w"}
          aria-labelledby=" "
          
        >
          {!this.props.success&&(
            <Modal.Header >
            <Modal.Title id={" "}>
              Idea Submission Preview
             </Modal.Title>
          </Modal.Header>
          )}
        
          {/* <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              Custom Modal Styling
        </Modal.Title>
          </Modal.Header> */}
          <Modal.Body>
            {this.props.children}
          </Modal.Body>
         
          <Modal.Footer>
          {!this.props.success&&(
            <React.Fragment>
            <div className={"col-md-2"}>
              <button className={"nissan-outline-btn"} onClick={() => this.props.goBack()}>
                Back
            </button>
            </div>
             <div className={"col-md-10 text-right"}>
             <button className={"nissan-outline-btn"} onClick={()=>this.props.discardPreview()}>
               Discard
             </button>
             <button className={"nissan-outline-btn"} onClick={()=>this.props.editPreview()}>
               Edit
             </button>
             <button className={"nissan-primary-btn"} onClick={()=>this.props.onSubmit()}>
               Submit
             </button>
             </div>
             </React.Fragment>
             )}
             {this.props.success&&(
              <div className={"col-md-12 text-center"}>
              <button className={"nissan-outline-btn"} onClick={() => this.props.onClose()}>
                close
            </button>
            </div>
             )}
        </Modal.Footer>
     
        </Modal>
        </React.Fragment >
        );
  }
}

export default NissanModalpopup;
