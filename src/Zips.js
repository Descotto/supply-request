import React from 'react';
import Modal from 'react-modal';
Modal.setAppElement('#root');

function Zips(props) {

  const { handleChange,
    renderDropdownOptions } = props;


  const displayData = props.ziptiesData.map((i, idx) => {
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
         <button className="selected-btn">
        Zip Ties & Accessories <span className="plus-sign">↓</span>
      </button>
      <div className='zips items-container'>
        <h2 className='items-title'>Zip Ties & Flex Clips</h2>
        <div className='items-list'>

          {displayData}

        </div>
      </div>
    </div>
  );
}

export default Zips;
