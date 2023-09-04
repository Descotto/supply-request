import React, { useState } from 'react';

function Secondary(props) {
  const { handleChange } = props;

  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div>
      <button className="btn btn-secondary custom-width btn-color1" onClick={toggleCollapse}>
        {isCollapsed ? 'Secondary Jumpers' : 'Collapse'}
      </button>
      {!isCollapsed && (
        <div>
          <div>
            <div className='Secondary items-container'>
              <h2 className='items-title'>Secondary Jumps</h2>
              <p onChange={handleChange}>1M White int. Jumper 40/bag - 
                <select id='108193' name='1M White int. Jumper 40/bag'>
                  {[...Array(11).keys()].map((value) => (
                    <option key={value} value={value}>{value}</option>
                  ))}
                </select>
              </p>
              <p onChange={handleChange}>3m secondary drop - 
                <select id='SC-APCSC-APC-3M' name='3m secondary drop'>
                  {[...Array(11).keys()].map((value) => (
                    <option key={value} value={value}>{value}</option>
                  ))}
                </select>
              </p>
              <p onChange={handleChange}>10m secondary drop - 
                <select id='SC-APCSC-APC10M' name='10m secondary drop'>
                  {[...Array(11).keys()].map((value) => (
                    <option key={value} value={value}>{value}</option>
                  ))}
                </select>
              </p>
              <p onChange={handleChange}>20m secondary drop - 
                <select id='SC-APCSC-APC20M' name='20m secondary drop'>
                  {[...Array(11).keys()].map((value) => (
                    <option key={value} value={value}>{value}</option>
                  ))}
                </select>
              </p>
              <p onChange={handleChange}>35m secondary drop - 
                <select id='SC-APCSC-APC35M' name='35m secondary drop'>
                  {[...Array(11).keys()].map((value) => (
                    <option key={value} value={value}>{value}</option>
                  ))}
                </select>
              </p>
              <p onChange={handleChange}>50m secondary drop - 
                <select id='SC-APCSC-APC50M' name='50m secondary drop'>
                  {[...Array(11).keys()].map((value) => (
                    <option key={value} value={value}>{value}</option>
                  ))}
                </select>
              </p>
              <p onChange={handleChange}>75m secondary drop - 
                <select id='SC-APCSC-APC75M' name='75m secondary drop'>
                  {[...Array(11).keys()].map((value) => (
                    <option key={value} value={value}>{value}</option>
                  ))}
                </select>
              </p>
              <p onChange={handleChange}>100m secondary drop - 
                <select id='SC-APCSC-APC100' name='100m secondary drop'>
                  {[...Array(11).keys()].map((value) => (
                    <option key={value} value={value}>{value}</option>
                  ))}
                </select>
              </p>
              <p onChange={handleChange}>3m secondary drop (White) - 
                <select id='SCAPCSCAPC-3M-W' name='3m secondary drop (White)'>
                  {[...Array(11).keys()].map((value) => (
                    <option key={value} value={value}>{value}</option>
                  ))}
                </select>
              </p>
              <p onChange={handleChange}>10m secondary drop (White) - 
                <select id='SCAPCSCAPC10M-W' name='10m secondary drop (White)'>
                  {[...Array(11).keys()].map((value) => (
                    <option key={value} value={value}>{value}</option>
                  ))}
                </select>
              </p>
              <p onChange={handleChange}>20m secondary drop (White) - 
                <select id='SCAPCSCAPC20M-W' name='20m secondary drop (White)'>
                  {[...Array(11).keys()].map((value) => (
                    <option key={value} value={value}>{value}</option>
                  ))}
                </select>
              </p>
              <p onChange={handleChange}>35m secondary drop (White) - 
                <select id='SCAPCSCAPC35M-W' name='35m secondary drop (White)'>
                  {[...Array(11).keys()].map((value) => (
                    <option key={value} value={value}>{value}</option>
                  ))}
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
