import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import Accessories from './Accessories';
import Brentwood from './Brentwood';
import Copper from './Copper';
import Enterprise from './Enterprise';
import Essentials from './Essentials';
import Modems from './Modems';
import Secondary from './Secondary';
import Tools from './Tools';
import Zips from './Zips';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

function Request(props) {
  const [order, setOrder] = useState([]);
  const [name, setName] = useState('');
  const [lead, setLead] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isButtonGlowing, setIsButtonGlowing] = useState(false);
  const [lastClicked, setLastClicked] = useState({
    Essentials: null,
    Secondary: null,
    Brentwood: null,
    Modems: null,
    Zips: null,
    Accessories: null,
    Copper: null,
    Enterprise: null,
    Tools: null,
  });
  const [selectedComponent, setSelectedComponent] = useState(null);

  const {
    essentialData,
    secondaryData,
    brentwoodData,
    modemsData,
    ziptiesData,
    wallplatesData,
    copperData,
    enterpriseData,
    toolsData,
  } = props.siteData;

  useEffect(() => {
    setIsButtonDisabled(!(name && lead));
  }, [name, lead]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isButtonDisabled) {
        setIsButtonGlowing((prevIsGlowing) => !prevIsGlowing);
      }
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [isButtonDisabled]);

  const closeModal = () => {
    setSelectedComponent(null);
  };

  const handleShowComponent = (componentName,buttonName) => {
    setLastClicked(buttonName);
    setSelectedComponent(componentName);
};
  
  

  const renderDropdownOptions = (count) => {
    const options = [];
    for (let i = 0; i <= count; i++) {
      options.push(<option value={i} key={i}>{i}</option>);
    }
    return options;
  };

  function handleChange(e) {
    e.preventDefault();
    let item = { itemCode: '', description: '', requested: 0 };
    item.itemCode = e.target.id;
    item.description = e.target.name;
    item.requested = e.target.value;
    props.setOrderTable([
      ...props.orderTable,
      { itemCode: item.itemCode, description: item.description, requested: item.requested },
    ]);
    setOrder([...order, `\n${item.description}, count: ${item.requested}`]);
  }

  function handleClick(e) {
    if (props.orderTable.length > 0) {
      let container = document.createElement('div');
      let table = document.createElement('TABLE');
      let info = document.getElementById('info');
      let name = info.name.value.toUpperCase();
      let lead = info.lead.value.toUpperCase();
      let ot = props.orderTable;
      const order = { name: name, lead: lead, items: ot };

      axios
        .post(`${REACT_APP_SERVER_URL}request`, order)
        .then((response) => {
          props.setDisplay(response.data.order);
          let data = response.data.order;
          navigator.clipboard.writeText(data);
        })
        .catch((err) => {
          console.log('error', err);
        });

      generateTable(table, props.orderTable);
      generateTableHead(table, props.orderTable);

      container.appendChild(table);
      props.setDisplay(container);
    } else {
      alert('Please make your selection first');
    }
  }

  function generateTableHead(table) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    let th = document.createElement('th');
    let th2 = document.createElement('th');
    let text = document.createTextNode('item');
    let text2 = document.createTextNode('count');
    th.appendChild(text);
    th2.appendChild(text2);
    row.appendChild(th);
    row.appendChild(th2);
  }

  function generateTable(table, data) {
    data.forEach((e) => {
      let row = table.insertRow();
      let cell = row.insertCell();
      let cell2 = row.insertCell();
      let item = document.createTextNode(e.item);
      let count = document.createTextNode(e.count);
      cell.appendChild(item);
      cell2.appendChild(count);
    });
  }

  function check() {
    console.log('Checking...', order);
  }

  return (
    <div className="request-page">
      <h1 className="request-title">New Request Form</h1>

      <div className="App">
        <div>
          <form id="info">
            <div>
              <label>Name</label>
              <br />
              <input placeholder="Required" type="text" name="name" onChange={(e) => setName(e.target.value)} className="request-input" />
            </div>
            <div>
              <label>Lead</label>
              <br />
              <input placeholder="Required" type="text" name="lead" onChange={(e) => setLead(e.target.value)} className="request-input" />
            </div>
          </form>
          <button onClick={check}>check</button>
          <div>
            <div className="modal-ctn">
              <button className={`request-btn ${lastClicked['Essentials'] === 'Essentials' ? 'active' : ''}`} onClick={() => handleShowComponent('Essentials', 'Essentials')}>
                Essentials <span className="plus-sign">+</span>
              </button>
              <button className={`request-btn ${lastClicked['Secondary'] === 'Secondary' ? 'active' : ''}`} onClick={() => handleShowComponent('Secondary', 'Secondary')}>
                Secondary Jumpers <span className="plus-sign">+</span>
              </button>
              <button className={`request-btn ${lastClicked['Brentwood'] === 'Brentwood' ? 'active' : ''}`} onClick={() => handleShowComponent('Brentwood', 'Brentwood')}>
                Brentwood <span className="plus-sign">+</span>
              </button>
              <button className={`request-btn ${lastClicked['Modems'] === 'Modems' ? 'active' : ''}`} onClick={() => handleShowComponent('Modems', 'Modems')}>
                Modems <span className="plus-sign">+</span>
              </button>
              <button className={`request-btn ${lastClicked['Zips'] === 'Zips' ? 'active' : ''}`} onClick={() => handleShowComponent('Zips', 'Zips')}>
                Zip Ties & Accessories <span className="plus-sign">+</span>
              </button>
              <button className={`request-btn ${lastClicked['Accessories'] === 'Accessories' ? 'active' : ''}`} onClick={() => handleShowComponent('Accessories', 'Accessories')}>
                Wallplates & Accessories <span className="plus-sign">+</span>
              </button>
              <button className={`request-btn ${lastClicked['Copper'] === 'Copper' ? 'active' : ''}`} onClick={() => handleShowComponent('Copper', 'Copper')}>
                Copper <span className="plus-sign">+</span>
              </button>
              <button className={`request-btn ${lastClicked['Enterprise'] === 'Enterprise' ? 'active' : ''}`} onClick={() => handleShowComponent('Enterprise', 'Enterprise')}>
                Enterprise <span className="plus-sign">+</span>
              </button>
              <button className={`request-btn ${lastClicked['Tools'] === 'Tools' ? 'active' : ''}`} onClick={() => handleShowComponent('Tools', 'Tools')}>
                Tools <span className="plus-sign">+</span>
              </button>

              <Modal className="modal-int" isOpen={selectedComponent !== null} onRequestClose={closeModal} contentLabel="Selected Component Modal">
                <div className="interior-sidebar">
                  <button className={`interior-btn ${lastClicked['Essentials'] === 'Essentials' ? 'active' : ''}`} onClick={() => handleShowComponent('Essentials', 'Essentials')}>
                    Essentials
                  </button>
                  <button className={`interior-btn ${lastClicked['Secondary'] === 'Secondary' ? 'active' : ''}`} onClick={() => handleShowComponent('Secondary', 'Secondary')}>
                    Secondary Jumpers
                  </button>
                  <button className={`interior-btn ${lastClicked['Brentwood'] === 'Brentwood' ? 'active' : ''}`} onClick={() => handleShowComponent('Brentwood', 'Brentwood')}>
                    Brentwood
                  </button>
                  <button className={`interior-btn ${lastClicked['Modems'] === 'Modems' ? 'active' : ''}`} onClick={() => handleShowComponent('Modems', 'Modems')}>
                    Modems
                  </button>
                  <button className={`interior-btn ${lastClicked['Zips'] === 'Zips' ? 'active' : ''}`} onClick={() => handleShowComponent('Zips', 'Zips')}>
                    Zip Ties & Accessories
                  </button>
                  <button className={`interior-btn ${lastClicked['Accessories'] === 'Accessories' ? 'active' : ''}`} onClick={() => handleShowComponent('Accessories', 'Accessories')}>
                    Wallplates & Accessories
                  </button>
                  <button className={`interior-btn ${lastClicked['Copper'] === 'Copper' ? 'active' : ''}`} onClick={() => handleShowComponent('Copper', 'Copper')}>
                    Copper
                  </button>
                  <button className={`interior-btn ${lastClicked['Enterprise'] === 'Enterprise' ? 'active' : ''}`} onClick={() => handleShowComponent('Enterprise', 'Enterprise')}>
                    Enterprise
                  </button>
                  <button className={`interior-btn ${lastClicked['Tools'] === 'Tools' ? 'active' : ''}`} onClick={() => handleShowComponent('Tools', 'Tools')}>
                    Tools
                  </button>
                </div>
                {selectedComponent === 'Essentials' && <Essentials essentialData={essentialData} handleChange={handleChange} renderDropdownOptions={renderDropdownOptions} />}
                {selectedComponent === 'Secondary' && <Secondary secondaryData={secondaryData} handleChange={handleChange} renderDropdownOptions={renderDropdownOptions} />}
                {selectedComponent === 'Brentwood' && <Brentwood brentwoodData={brentwoodData} handleChange={handleChange} renderDropdownOptions={renderDropdownOptions} />}
                {selectedComponent === 'Modems' && <Modems modemsData={modemsData} handleChange={handleChange} renderDropdownOptions={renderDropdownOptions} />}
                {selectedComponent === 'Zips' && <Zips ziptiesData={ziptiesData} handleChange={handleChange} renderDropdownOptions={renderDropdownOptions} />}
                {selectedComponent === 'Accessories' && <Accessories wallplatesData={wallplatesData} handleChange={handleChange} renderDropdownOptions={renderDropdownOptions} />}
                {selectedComponent === 'Copper' && <Copper copperData={copperData} handleChange={handleChange} renderDropdownOptions={renderDropdownOptions} />}
                {selectedComponent === 'Enterprise' && <Enterprise enterpriseData={enterpriseData} handleChange={handleChange} renderDropdownOptions={renderDropdownOptions} />}
                {selectedComponent === 'Tools' && <Tools toolsData={toolsData} handleChange={handleChange} renderDropdownOptions={renderDropdownOptions} />}

                <button className="btn btn-success complete-order" onClick={closeModal}>Close</button>
              </Modal>
            </div>
          </div>
          <br />
          <div className="request-btn-container">
            <props.Link to="/display">
              <button
                type="submit"
                className={`btn btn-primary complete-order ${isButtonGlowing ? 'glowing' : ''}`}
                onClick={handleClick}
                disabled={isButtonDisabled}
              >
                Complete Order
              </button>
            </props.Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Request;
