import React, { useState } from 'react';

function Zips(props) {

  const { handleChange, renderDropdownOptions } = props;


  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

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

      <button className="btn btn-secondary custom-width btn-color1" onClick={toggleCollapse}>
        {isCollapsed ? 'Zip Ties & Flex Clips' : 'Collapse'}
      </button>
      {!isCollapsed && (
        <div>
          <div>
            <div className='zips items-container'>
              <h2 className='items-title'>Zip Ties & Flex Clips</h2>

              <div className='items-list'>

              {/* <p onChange={handleChange}>8" Zip Ties Black 100/bag or 1,000/bag - <select id='CP-8-40-B' name='8" Zip Ties Black 100/bag or 1,000/bag'>
                {renderDropdownOptions(10)}
              </select></p>
              <p onChange={handleChange}>8" Zip Ties Natural 100/bag or 1,000/bag - <select id='CP-8-40-N' name='8" Zip Ties Natural 100/bag or 1,000/bag'>
                {renderDropdownOptions(10)}
              </select></p>
              <p onChange={handleChange}>8" Screwdown Zip Ties Black 100/bag - <select id='CP-7-50MH-B' name='8" Screwdown Zip Ties Black 100/bag'>
                {renderDropdownOptions(10)}
              </select></p>
              <p onChange={handleChange}>8" Screwdown Zip Ties Natural 100/bag - <select id='CP-7-50MH-N' name='8" Screwdown Zip Ties Natural 100/bag'>
                {renderDropdownOptions(10)}
              </select></p>
              <p onChange={handleChange}>11" Zip Tie Black 100/bag or 1,000/bag - <select id='CP-11-50-B' name='11" Zip Tie Black 100/bag or 1,000/bag'>
                {renderDropdownOptions(10)}
              </select></p>
              <p onChange={handleChange}>14" Screwdown Zip Ties Black 100/bag - <select id='CP-14-50MH-B' name='14" Screwdown Zip Ties Black 100/bag'>
                {renderDropdownOptions(10)}
              </select></p>
              <p onChange={handleChange}>Small Flex Clips Black 100/bag - <select id='G4BK-03' name='Small Flex Clips Black 100/bag'>
                {renderDropdownOptions(10)}
              </select></p>
              <p onChange={handleChange}>Large Flex Clips Black 100/bag - <select id='G4BK-05' name='Large Flex Clips Black 100/bag'>
                {renderDropdownOptions(10)}
              </select></p>
              <p onChange={handleChange}>Small Flex Clips White 100/bag - <select id='G4WH-03' name='Small Flex Clips White 100/bag'>
                {renderDropdownOptions(10)}
              </select></p>
              <p onChange={handleChange}>Large Flex Clips White 100/bag - <select id='G4WH-05' name='Large Flex Clips White 100/bag'>
                {renderDropdownOptions(10)}
              </select></p> */}

              {displayData}

              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Zips;
