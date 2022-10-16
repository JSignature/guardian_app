import React from 'react'
import Modal from 'react-modal'
import { XBtn } from '../styles/ButtonStyle'

Modal.setAppElement('#root')

const AddMessageModal = ({ modalIsOpen, setModalIsOpen }) => {
  return (
    <Modal
      className="ModalStyle"
      isOpen={modalIsOpen}
      onRequestClose={() => setModalIsOpen(false)}
    >
      <h1>Text</h1>
      <XBtn onClick={() => setModalIsOpen(false)}>X</XBtn>
    </Modal>
  )
}

export default AddMessageModal
