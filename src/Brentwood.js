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

            {/* <p onChange={handleChange}>
              150' Brentwood Drop -{' '}
              <select id='FS-AA1-001-0150' name="150' Brentwood Drop">
                {renderDropdownOptions(10)}
              </select>
            </p>
            <p onChange={handleChange}>
              200' Brentwood Drop -{' '}
              <select id='FS-AA1-001-0200' name="200' Brentwood Drop">
                {renderDropdownOptions(10)}
              </select>
            </p>
            <p onChange={handleChange}>
              300' Brentwood Drop -{' '}
              <select id='FS-AA1-001-0300' name="300' Brentwood Drop">
                {renderDropdownOptions(10)}
              </select>
            </p>
            <p onChange={handleChange}>
              400' Brentwood Drop -{' '}
              <select id='FS-AA1-001-0400' name="400' Brentwood Drop">
                {renderDropdownOptions(10)}
              </select>
            </p>
            <p onChange={handleChange}>
              500' Brentwood Drop -{' '}
              <select id='FS-AA1-001-0500' name="500' Brentwood Drop">
                {renderDropdownOptions(10)}
              </select>
            </p> */}

            {displayData}

            </div>

          </div>
        </div>
      )}
    </div>
  );
}

export default Brentwood;
