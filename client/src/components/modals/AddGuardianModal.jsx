import { React, useState } from 'react'
import Modal from 'react-modal'
import { useAddGuardianMutation } from '../../features/api/apiSlice'
import '../styles/ModalStyle.css'
import { BrighterBtn, DarkerBtn, Btn, XBtn } from '../styles/ButtonStyle'

Modal.setAppElement('#root')
const AddGuardianModal = ({ modalIsOpen, setModalIsOpen }) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [streetAddress, setStreetAddress] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [zip, setZip] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [image, setImage] = useState('')
  const [addGuardian] = useAddGuardianMutation()

  const handleNewGuardian = async e => {
    console.log('clicked')
    e.preventDefault()
    const newGuardianData = {
      is_primary: true,
      guardian_first_name: firstName,
      guardian_last_name: lastName,
      guardian_address_street: streetAddress,
      guardian_address_city: city,
      guardian_address_state: state,
      guardian_address_zip: zip,
      guardian_phone: phone,
      guardian_email: email,
      guardian_image: image,
    }
    await addGuardian(newGuardianData)
    setModalIsOpen(false)
    alert('User Has been added succesfully')
  }

  return (
    <Modal
      className="ModalStyle"
      isOpen={modalIsOpen}
      onRequestClose={() => setModalIsOpen(false)}
    >
      <header>
        <h1>Add Guardian</h1>
      </header>
      <form onSubmit={handleNewGuardian}>
        <input
          onChange={e => {
            setFirstName(e.target.value)
          }}
          type="text"
          name="firstName"
          placeholder="First Name"
        />
        <input
          onChange={e => {
            setLastName(e.target.value)
          }}
          type="text"
          name="lastName"
          placeholder="Last Name"
        />
        <input
          onChange={e => {
            setStreetAddress(e.target.value)
          }}
          type="text"
          name="streetAddress"
          placeholder="Street Address"
        />
        <input
          onChange={e => {
            setCity(e.target.value)
          }}
          type="text"
          name="city"
          placeholder="City"
        />
        <input
          onChange={e => {
            setState(e.target.value)
          }}
          type="text"
          name="state"
          placeholder="State"
        />
        <input
          onChange={e => {
            setZip(e.target.value)
          }}
          type="text"
          name="zip"
          placeholder="Zip"
        />
        <input
          onChange={e => {
            setPhone(e.target.value)
          }}
          type="text"
          name="phone"
          placeholder="Phone"
        />
        <input
          onChange={e => {
            setEmail(e.target.value)
          }}
          type="email"
          name="email"
          placeholder="Email"
        />
        <input
          onChange={e => {
            setImage(e.target.value)
          }}
          type="text"
          name="image"
          placeholder="Image"
        />
        <BrighterBtn type="submit">Submit</BrighterBtn>
      </form>
      <XBtn onClick={() => setModalIsOpen(false)}>X</XBtn>
    </Modal>
  )
}

export default AddGuardianModal
