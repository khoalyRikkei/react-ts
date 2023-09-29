import { Component } from "react";

class Modal extends Component<{ onClose: Function; data: number }> {
  render() {

    const style = {
        backgroundColor: 'red'
    }
    return (
      <div className="container-modal" >
        <div className="modal" style={style}>
          <h3>{this.props.data}</h3>
          <h1>Đây là modal</h1>
          <button onClick={() => this.props.onClose(false)}>Close</button>
        </div>
        
      </div>
      
    );
  }
}

export default Modal;
