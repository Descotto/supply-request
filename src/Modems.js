import React, { useState } from 'react';

function Modems(props) {


  const { handleChange, renderDropdownOptions } = props;


  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };


  const displayData = props.modemsData.map((i, idx) => {
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

        {isCollapsed ? 'Modems' : 'Collapse'}
      </button>
      {!isCollapsed && (
        <div>
          <div>
            <div className='modems items-container'>
              <h2 className='items-title'>Modems</h2>
              <div className='items-list'>

                {displayData}

              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modems;
