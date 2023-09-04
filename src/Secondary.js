import React, { useState } from 'react';

function Secondary(props) {
  const { handleChange, renderDropdownOptions } = props;

  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div>
      <button className="btn btn-secondary custom-width" onClick={toggleCollapse}>
        {isCollapsed ? 'Secondary Jumpers' : 'Collapse'}
      </button>
      {!isCollapsed && (
        <div>

          <div>
            <div className='Secondary'>
              <h2>Secondary Jumps</h2>
              <p onChange={handleChange}>1M White int. Jumper 40/bag - 
                <select id='108193' name='1M White int. Jumper 40/bag'>
                {renderDropdownOptions(10)}
                </select>
              </p>
              <p onChange={handleChange}>3m secondary drop - 
                <select id='SC-APCSC-APC-3M' name='3m secondary drop'>
                {renderDropdownOptions(10)}
                </select>
              </p>
              <p onChange={handleChange}>10m secondary drop - 
                <select id='SC-APCSC-APC10M' name='10m secondary drop'>
                {renderDropdownOptions(10)}
                </select>
              </p>
              <p onChange={handleChange}>20m secondary drop - 
                <select id='SC-APCSC-APC20M' name='20m secondary drop'>
                {renderDropdownOptions(10)}
                </select>
              </p>
              <p onChange={handleChange}>35m secondary drop - 
                <select id='SC-APCSC-APC35M' name='35m secondary drop'>
                {renderDropdownOptions(10)}
                </select>
              </p>
              <p onChange={handleChange}>50m secondary drop - 
                <select id='SC-APCSC-APC50M' name='50m secondary drop'>
                {renderDropdownOptions(10)}
                </select>
              </p>
              <p onChange={handleChange}>75m secondary drop - 
                <select id='SC-APCSC-APC75M' name='75m secondary drop'>
                {renderDropdownOptions(10)}
                </select>
              </p>
              <p onChange={handleChange}>100m secondary drop - 
                <select id='SC-APCSC-APC100' name='100m secondary drop'>
                {renderDropdownOptions(10)}
                </select>
              </p>
              <p onChange={handleChange}>3m secondary drop (White) - 
                <select id='SCAPCSCAPC-3M-W' name='3m secondary drop (White)'>
                {renderDropdownOptions(10)}
                </select>
              </p>
              <p onChange={handleChange}>10m secondary drop (White) - 
                <select id='SCAPCSCAPC10M-W' name='10m secondary drop (White)'>
                {renderDropdownOptions(10)}
                </select>
              </p>
              <p onChange={handleChange}>20m secondary drop (White) - 
                <select id='SCAPCSCAPC20M-W' name='20m secondary drop (White)'>
                {renderDropdownOptions(10)}
                </select>
              </p>
              <p onChange={handleChange}>35m secondary drop (White) - 
                <select id='SCAPCSCAPC35M-W' name='35m secondary drop (White)'>
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

export default Secondary;
