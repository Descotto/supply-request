import React from 'react';
import Modal from 'react-modal';
Modal.setAppElement('#root');

function Copper(props) {

  const { handleChange,
    renderDropdownOptions } = props;


  const displayData = props.copperData.map((i, idx) => {
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
        {/* <button className="selected-btn">
        Copper <span className="plus-sign">↓</span>
      </button> */}
      <div className='copper items-container'>
        <h2 className='items-title'>Copper</h2>
        <div className='items-list'>

          {displayData}

        </div>
      </div>
    </div>
  );
}

export default Copper;