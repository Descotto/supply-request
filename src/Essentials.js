import React, { useState } from 'react';




function Essentials(props) {
  const { handleChange, renderDropdownOptions } = props;

  const [isCollapsed, setIsCollapsed] = useState(true);



  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };





  return (
    <div>
      <button className="btn btn-secondary custom-width btn-color1" onClick={toggleCollapse}>

        {isCollapsed ? 'Essentials' : 'Collapse'}
      </button>
      {!isCollapsed && (
        <div>
          <div>
            <div className='Essentials items-container'>
              <h2 className='items-title'>Fiber Essentials</h2>

              <div className='items-list'> 
              <p onChange={handleChange}>1g ONT 20/case - <select id='1287787F1' name='1g ONT 20/case'>
                {renderDropdownOptions(10)}
              </select></p>
              <p onChange={handleChange}>10g ONT 10/case - <select id='1287843F1N' name='10g ONT 10/case'>
                {renderDropdownOptions(10)}
              </select></p>
              <p onChange={handleChange}>Fiber Termination (Transition Box) 40/case - <select id='TY-15132B' name='Fiber Termination (Transition Box) 40/case'>
                {renderDropdownOptions(10)}
              </select></p>
              <p onChange={handleChange}>Fiber Dist. Box (8 Port MDU Splitter) - <select id='FDB-08B' name='Fiber Dist. Box (8 Port MDU Splitter)'>
                {renderDropdownOptions(10)}
              </select></p>
              <p onChange={handleChange}>Fiber Quick Connect (Fiber Ends) 100/box - <select id='SC-APC-H02' name='Fiber Quick Connect (Fiber Ends) 100/box'>
                {renderDropdownOptions(10)}
              </select></p>
              <p onChange={handleChange}>ONT Screw (PHSMSS61) 100/box - <select id='25321464' name='ONT Screw (PHSMSS61) 100/box'>
                {renderDropdownOptions(10)}
              </select></p>
              <p onChange={handleChange}>Wood Screw (Termination Box Screw) 100/box - <select id='93174711' name='Wood Screw (Termination Box Screw) 100/box'>
                {renderDropdownOptions(10)}
              </select></p>
              <p onChange={handleChange}>Wall Anchors (Mollys) 100/box - <select id='MAR1001411' name='Wall Anchors (Mollys) 100/box'>
                {renderDropdownOptions(10)}
              </select></p>
              <p onChange={handleChange}>Black Electric Tape - <select id='S-5143-FINS' name='Black Electric Tape'>
                {renderDropdownOptions(10)}
              </select></p>

              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Essentials;
