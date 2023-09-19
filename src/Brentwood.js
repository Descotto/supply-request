import React, { useState } from 'react';

function Brentwood(props) {

  const { handleChange, renderDropdownOptions } = props;

  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };


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
      <button className="btn btn-secondary custom-width btn-color1" onClick={toggleCollapse}>

        {isCollapsed ? 'Brentwood' : 'Collapse'}
      </button>
      {!isCollapsed && (
        <div>

          <div className='brentwood items-container'>
            <h2 className='items-title'>Brentwood</h2>
            <div className='items-list'>

              {displayData}

            </div>

          </div>
        </div>
      )}
    </div>
  );
}

export default Brentwood;
