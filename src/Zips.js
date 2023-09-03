import React, { useState } from 'react';






function Zips(props) {
  const { handleChange } = props;

  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div>
      <button class="btn btn-secondary custom-width btn-color1" onClick={toggleCollapse}>
        {isCollapsed ? 'Zip Ties & Flex Clips' : 'Collapse'}
      </button>
      {!isCollapsed && (
        <div>
          <div>
            <div className='zips'>
              <h2>Zip Ties & Flex Clips</h2>
              <p onChange={handleChange}>8" Zip Ties Black 100/bag or 1,000/bag - <select id='CP-8-40-B' name='8" Zip Ties Black 100/bag or 1,000/bag'>
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
              <p onChange={handleChange}>8" Zip Ties Natural 100/bag or 1,000/bag - <select id='CP-8-40-N' name='8" Zip Ties Natural 100/bag or 1,000/bag'>
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
              <p onChange={handleChange}>8" Screwdown Zip Ties Black 100/bag - <select id='CP-7-50MH-B' name='8" Screwdown Zip Ties Black 100/bag'>
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
              <p onChange={handleChange}>8" Screwdown Zip Ties Natural 100/bag - <select id='CP-7-50MH-N' name='8" Screwdown Zip Ties Natural 100/bag'>
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
              <p onChange={handleChange}>11" Zip Tie Black 100/bag or 1,000/bag - <select id='CP-11-50-B' name='11" Zip Tie Black 100/bag or 1,000/bag'>
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
              <p onChange={handleChange}>14" Screwdown Zip Ties Black 100/bag - <select id='CP-14-50MH-B' name='14" Screwdown Zip Ties Black 100/bag'>
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
              <p onChange={handleChange}>Small Flex Clips Black 100/bag - <select id='G4BK-03' name='Small Flex Clips Black 100/bag'>
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
              <p onChange={handleChange}>Large Flex Clips Black 100/bag - <select id='G4BK-05' name='Large Flex Clips Black 100/bag'>
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
              <p onChange={handleChange}>Small Flex Clips White 100/bag - <select id='G4WH-03' name='Small Flex Clips White 100/bag'>
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
              <p onChange={handleChange}>Large Flex Clips White 100/bag - <select id='G4WH-05' name='Large Flex Clips White 100/bag'>
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

export default Zips;
