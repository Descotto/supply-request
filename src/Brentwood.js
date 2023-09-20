import React from 'react';
import Modal from 'react-modal';
Modal.setAppElement('#root');

function Brentwood(props) {

  const { handleChange,
    renderDropdownOptions,
    openModal,
    closeModal,
    isModalOpen } = props;


  const displayData = props.brentwoodData.map((i, idx) => {
    return (
      <div key={idx} >
        <p onChange={handleChange}>{i.description} - <select id={i.itemCode} name={i.description}>
          {renderDropdownOptions(10)}
        </select></p>

      </div>
    )
  })


  return (
    <div>
      <button className="btn btn-secondary custom-width btn-color1" onClick={openModal}>Brentwood</button>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <div className='brentwood items-container'>
          <h2 className='items-title'>Brentwood</h2>
          <div className='items-list'>

            {displayData}

          </div>

        </div>

        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
}

export default Brentwood;


