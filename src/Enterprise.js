import React, { useState } from 'react';

function Enterprise(props) {
  const { handleChange, renderDropdownOptions } = props;

  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div>
      <button className="btn btn-secondary custom-width" onClick={toggleCollapse}>
        {isCollapsed ? 'Enterprise' : 'Collapse'}
      </button>
      {!isCollapsed && (
        <div>

          <div>
            <div className='enterprise'>
              <h2>Enterprise</h2>
              <p onChange={handleChange}>Hydra Cable, RJ45/CAT 5E 24/4P 6" - 
                <select id='C275926N-15F' name='Hydra Cable, RJ45/CAT 5E 24/4P 6"'>
                {renderDropdownOptions(10)}
                </select>
              </p>
              <p onChange={handleChange}>1' CAT5E Patch Cable Blue - 
                <select id='C5E-001-BLUE' name="1' CAT5E Patch Cable Blue">
                {renderDropdownOptions(10)}
                </select>
              </p>
              <p onChange={handleChange}>3' CAT5E Patch Cable Blue - 
                <select id='C5E-003-BLUE' name="3' CAT5E Patch Cable Blue">
                {renderDropdownOptions(10)}
                </select>
              </p>
              <p onChange={handleChange}>5' CATE Patch Cable Blue - 
                <select id='C5E-005-BLUE' name="5' CATE Patch Cable Blue">
                {renderDropdownOptions(10)}
                </select>
              </p>
              <p onChange={handleChange}>7' CAT5E Patch Cable Blue - 
                <select id='C5E-007-BLUE' name="7' CAT5E Patch Cable Blue">
                {renderDropdownOptions(10)}
                </select>
              </p>
              <p onChange={handleChange}>10' CAT5E Patch Cable Blue - 
                <select id='C5E-010-BLUE' name="10' CAT5E Patch Cable Blue">
                {renderDropdownOptions(10)}
                </select>
              </p>
              <p onChange={handleChange}>15' CAT5E Patch Cable Blue - 
                <select id='C5E-015-BLUE' name="15' CAT5E Patch Cable Blue">
                {renderDropdownOptions(10)}
                </select>
              </p>
              <p onChange={handleChange}>66 Block - 
                <select id='M1-50' name="66 Block">
                {renderDropdownOptions(10)}
                </select>
              </p>
              <p onChange={handleChange}>AMP End 66 Block - 
                <select id='M2-5W' name="AMP End 66 Block">
                {renderDropdownOptions(10)}
                </select>
              </p>
              <p onChange={handleChange}>66 Block Cover - 
                <select id='MC4LH-9' name='66 Block Cover'>
                {renderDropdownOptions(10)}
                </select>
              </p>
              <p onChange={handleChange}>66 Block Feet - 
                <select id='S896' name='66 Block Feet'>
                {renderDropdownOptions(10)}
                </select>
              </p>
              <p onChange={handleChange}>CAT5 25-Pair Amp Telco Cable-5ft - 
                <select id='MP-5T180MUNNA5' name='CAT5 25-Pair Amp Telco Cable-5ft'>
                {renderDropdownOptions(10)}
                </select>
              </p>
              <p onChange={handleChange}>CAT5 25-Pair Amp Telco Cable-15ft - 
                <select id='MP-5T180MUNNA15' name='CAT5 25-Pair Amp Telco Cable-15ft'>
                {renderDropdownOptions(10)}
                </select>
              </p>
              <p onChange={handleChange}>CAT5 25-Pair Amp Telco Cable-25ft - 
                <select id='MP-5T180MUNNA25' name='CAT5 25-Pair Amp Telco Cable-25ft'>
                {renderDropdownOptions(10)}
                </select>
              </p>
              <p onChange={handleChange}>Mushroom Post With Screw - 
                <select id='PP7-3038-MUSH' name='Mushroom Post With Screw'>
                {renderDropdownOptions(10)}
                </select>
              </p>
            </div>
          </div>

        </div>
      )}
    </div>
  );
}

export default Enterprise;
