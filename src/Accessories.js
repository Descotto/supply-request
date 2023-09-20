import React from 'react';
import Modal from 'react-modal';
Modal.setAppElement('#root');

function Accessories(props) {
  const { handleChange,
    renderDropdownOptions,
    openModal,
    setModalDisplay } = props;



  const displayData = props.wallplatesData.map((i, idx) => {
    return (
      <div key={idx} >
        <p onChange={handleChange}>{i.description} - <select id={i.itemCode} name={i.description}>
          {renderDropdownOptions(10)}
        </select></p>

      </div>
    )
  })
  function setDisplay() {
    setModalDisplay(<div className='accessories items-container'>
    <h2 className='items-title'>Wall Plates & Accessories</h2>
    <div className='items-list'>

      {displayData}

    </div>
  </div>)
    openModal()
  }


  return (
    
    <div>
      <button className="btn btn-secondary custom-width btn-color1" onClick={setDisplay}>Wall Plates & Accessories</button>
    
    </div>
  );
}

export default Accessories;




