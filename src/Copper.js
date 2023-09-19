import React, { useState } from 'react';

function Copper(props) {


  const { handleChange, renderDropdownOptions } = props;


  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };



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
      <button className="btn btn-secondary custom-width btn-color2" onClick={toggleCollapse}>
        {isCollapsed ? 'Copper' : 'Collapse'}
      </button>
      {!isCollapsed && (
        <div>
          <div className='copper items-container'>
            <h2 className='items-title'>Copper</h2>

            <div className='items-list'>

              {displayData}

            </div>

          </div>
        </div>
      )}
    </div>
  );
}

export default Copper;
