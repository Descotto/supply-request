import React from 'react';
import Modal from 'react-modal';
Modal.setAppElement('#root');



function Secondary(props) {
  const { handleChange,
    renderDropdownOptions,
    openModal,
    setModalDisplay } = props;

  const displayData = props.secondaryData.map((i, idx) => {
    return (
      <div key={idx} >
        <p onChange={handleChange}>{i.description} - <select id={i.itemCode} name={i.description}>
          {renderDropdownOptions(10)}
        </select></p>

      </div>
    )
  })

  function setDisplay() {
    setModalDisplay(<div className='Secondary items-container'>
    <h2 className='items-title'>Secondary Jumps</h2>
    <div className='items-list'>

      {displayData}

    </div>
  </div>)
    openModal()
  }

  return (
    <div>

      <button className="btn btn-secondary custom-width btn-color1" onClick={setDisplay}>Secondary Jumpers</button>

    </div>
  );
}

export default Secondary;
