import React from 'react'
import Modal from 'react-modal'
Modal.setAppElement('#root')

const AddSignUpModal = ({ modalIsOpen, setModalIsOpen }) => {
  return (
    <div>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <h1>Sign Up for Guardian App!</h1>
        <form>
          <input type="text" name="UserName" placeholder="Create User Name" />
          <input
            type="text"
            name="UserPassword"
            placeholder="Create User Password"
          />
          <input
            type="text"
            name="UserPassword"
            placeholder="Re-Enter User Password"
          />

          <button type="submit">Submit</button>
        </form>
        <button onClick={() => setModalIsOpen(false)}>X</button>
      </Modal>
    </div>
  )
}

export default AddSignUpModal
