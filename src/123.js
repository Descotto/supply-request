import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  function ByName(props) {
    const [redirect, setRedirect] = useState(false);
    const [showResult, setShowResult] = useState('');
  
    function handleSubmitName(e) {
      e.preventDefault();
      let targetName = e.target.order.value.toUpperCase();
  
      axios.get(`${REACT_APP_SERVER_URL}byname/${targetName}`)
        .then((response) => {
          if (response.data.order.length > 0) {
            props.setOrder(response.data);
            setRedirect(true);
          }else {
            setShowResult('No Match Found');
          }
            
  
        }).catch((error) => {
          console.log("ERROR", error);
        });
    }

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2>{title}</h2>
          <button className="modal-close-button" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="modal-content">{children}</div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
