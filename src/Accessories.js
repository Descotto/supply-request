import React from 'react';
import Modal from 'react-modal';
Modal.setAppElement('#root');

function Accessories(props) {

  const { handleChange,
    renderDropdownOptions } = props;


  const displayData = props.wallplatesData.map((i, idx) => {
    return (
      <div key={idx} >
        <p onChange={handleChange}>{i.description} - <select id={i.itemCode} name={i.description}>
          {renderDropdownOptions(10)}
        </select></p>

      </div>
    )
  })



  return (

    <div>
      <button className="btn btn-secondary custom-width btn-color2">
        Wallplates & Accessories <span className="plus-sign">+</span>
      </button>
      <div className='accessories items-container'>
        <h2 className='items-title'>Wall Plates & Accessories</h2>
        <div className='items-list'>

          {displayData}

        </div>
      </div>
    </div>
  );
}

export default Accessories;




