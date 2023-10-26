import React from 'react';
import Modal from 'react-modal';
Modal.setAppElement('#root');

function Brentwood(props) {
  
  const { handleChange,
    renderDropdownOptions } = props;


  const displayData = props.brentwoodData.map((i, idx) => {
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
        Brentwood <span className="plus-sign">↓</span>
      </button> */}
      <div className='brentwood items-container'>
        <h2 className='items-title'>Brentwood</h2>
        <div className='items-list'>

          {displayData}

        </div>

      </div>
    </div>
  );
}

export default Brentwood;


