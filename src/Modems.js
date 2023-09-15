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
              {/* <p onChange={handleChange}>Eero 6 (cupcake) 20/case -
                <select id='N010011 (w/psu C110011)' name='Eero 6 (cupcake) 20/case'>
                  {renderDropdownOptions(10)}
                </select>
              </p>
              <p onChange={handleChange}>Eero Pro 6E 12/case -
                <select id='S012011 (w/psu C210011)' name='Eero Pro 6E 12/case'>
                  {renderDropdownOptions(10)}
                </select>
              </p>
              <p onChange={handleChange}>Eero 6 Pro 12/case -
                <select id='K010011 (w/psu C210011)' name='Eero 6 Pro 12/case'>
                  {renderDropdownOptions(10)}
                </select>
              </p>
              <p onChange={handleChange}>515 Tested kit -
                <select id='515 KIT' name='515 Tested kit'>
                  {renderDropdownOptions(10)}
                </select>
              </p>
              <p onChange={handleChange}>5268 Tested kit -
                <select id='5268 KIT' name='5268 Tested kit'>
                  {renderDropdownOptions(10)}
                </select>
              </p> */}

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
