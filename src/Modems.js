import React, { useState } from 'react';






function Modems(props) {
    const { handleChange } = props;

  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div>
      <button class="btn btn-secondary custom-width" onClick={toggleCollapse}>
        {isCollapsed ? 'Modems' : 'Collapse'}
      </button>
      {!isCollapsed && (
        <div>
          <div>
          <div className='modems'>
                <h2>Modems</h2>
                <p onChange={handleChange}> Eero 6 (cupcake) 20/case - <select id='N010011 (w/psu C110011)' name='Eero 6 (cupcake) 20/case'>
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
                <p onChange={handleChange}>Eero Pro 6E 12/case - <select id='S012011 (w/psu C210011)' name='Eero Pro 6E 12/case'>
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
                <p onChange={handleChange}>Eero 6 Pro 12/case - <select id='K010011 (w/psu C210011)' name='Eero 6 Pro 12/case'>
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
                <p onChange={handleChange}>515 Tested kit - <select id='515 KIT' name='515 Tested kit'>
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
                <p onChange={handleChange}>5268 Tested kit - <select id='5268 KIT' name='5268 Tested kit'>
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

export default Modems;
