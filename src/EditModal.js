var Modal = require('react-modal');

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};


var EditModal = React.createClass({

  getInitialState: function() {
    return { modalIsOpen: false };
  },

  openModal: function(e) {
    // $(".ReactModalPortal").show("slow");
    this.setState({modalIsOpen: true});
    e.preventDefault();
    this.props.openModal();
  },

  afterOpenModal: function() {
    // references are now sync'd and can be accessed.
    this.refs.subtitle.style.color = '#f00';
  },

  closeModal: function() {
    console.log("closing the modal");
    this.setState({modalIsOpen: false});
    // $(".ReactModalPortal").hide("slow");
    // this.props.closeModal();
  },

  render: function() {
    console.log("Rendering modal");
    return (
      <div>
        <button onClick={this.openModal}>Open Modal</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles} >

          <h2 ref="subtitle">Edit todo</h2>
          <button onClick={this.closeModal}>close</button>
          <form className="modalForm">
            <input className="modal_input" value='' />
          </form>
        </Modal>
      </div>
    );
  }
});

module.exports = EditModal;
