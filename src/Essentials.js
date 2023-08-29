import React, { useState } from 'react';






function Essentials(props) {
  const { handleChange } = props;

  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div>
      <button class="btn btn-secondary custom-width" onClick={toggleCollapse}>
        {isCollapsed ? 'Essentials' : 'Collapse'}
      </button>
      {!isCollapsed && (
        <div>
          <div>
            <div className='Essentials'>
              <h2>Fiber Essentials</h2>
              <p onChange={handleChange}>1g ONT 20/case - <select id='1287787F1' name='1g ONT 20/case'>
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
              <p onChange={handleChange}>10g ONT 10/case - <select id='1287843F1N' name='10g ONT 10/case'>
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
              <p onChange={handleChange}>Fiber Termination (Transition Box) 40/case - <select id='TY-15132B' name='Fiber Termination (Transition Box) 40/case`
        '>
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
              <p onChange={handleChange}>Fiber Dist. Box (8 Port MDU Splitter) - <select id='FDB-08B' name='Fiber Dist. Box (8 Port MDU Splitter)'>
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
              <p onChange={handleChange}>Fiber Quick Connect (Fiber Ends) 100/box - <select id='SC-APC-H02' name='Fiber Quick Connect (Fiber Ends) 100/box'>
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
              <p onChange={handleChange}>ONT Screw (PHSMSS61) 100/box - <select id='25321464' name='ONT Screw (PHSMSS61) 100/box'>
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
              <p onChange={handleChange}>Wood Screw (Termination Box Screw) 100/box - <select id='93174711' name='Wood Screw (Termination Box Screw) 100/box'>
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
              <p onChange={handleChange}>Wall Anchors (Mollys) 100/box - <select id='MAR1001411' name='Wall Anchors (Mollys) 100/box'>
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
              <p onChange={handleChange}>Black Electric Tape - <select id='S-5143-FINS' name='Black Electric Tape'>
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

export default Essentials;






