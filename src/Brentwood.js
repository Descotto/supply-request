import React, { useState } from 'react';






function Brentwood(props) {
  const { handleChange } = props;

  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div>
      <button className="btn btn-secondary custom-width" onClick={toggleCollapse}>
        {isCollapsed ? 'Brentwood' : 'Collapse'}
      </button>
      {!isCollapsed && (
        <div>
          <div>
            <div className='brentwood'>
              <h2>Brentwood</h2>
              <p onChange={handleChange}>150' Brentwood Drop - <select id='FS-AA1-001 0150' name="150' Brentwood Drop">
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select></p>
              <p onChange={handleChange}>200' Brentwood Drop - <select id='FS-AA1-001 0200' name="200' Brentwood Drop">
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select></p>
              <p onChange={handleChange}>300' Brentwood Drop - <select id='FS-AA1-001 0300' name="300' Brentwood Drop">
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select></p>
              <p onChange={handleChange}>400' Brentwood Drop - <select id='FS-AA1-001 0400' name="400' Brentwood Drop">
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select></p>
              <p onChange={handleChange}>500' Brentwood Drop - <select id='FS-AA1-001 0500' name="500' Brentwood Drop">
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select></p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Brentwood;
