import React from 'react'
import Modal from 'react-modal'
Modal.setAppElement('#root')

const AddSignInModal = ({ modalIsOpen, setModalIsOpen }) => {
  return (
    <div>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <h1>Welcome, Please Sign In</h1>
        <form>
          <input type="text" name="UserName" placeholder="Username" />
          <input type="text" name="UserPassword" placeholder="User Password" />

          <button type="submit">Submit</button>
        </form>
        <button onClick={() => setModalIsOpen(false)}>X</button>
      </Modal>
    </div>
  )
}

export default AddSignInModal
