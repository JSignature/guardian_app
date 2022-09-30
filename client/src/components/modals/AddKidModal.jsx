import { React, useState } from 'react'
import Modal from 'react-modal'
import { useFetcher } from 'react-router-dom'
Modal.setAppElement('#root')

const AddKidModal = ({ modalIsOpen, setModalIsOpen }) => {
  const [kidFirstName, setKidFirstName] = useState('')
  const [kidLastName, setKidLastName] = useState('')
  const [kidNickName, setKidNickName] = useState('')
  const [age, setAge] = useState('')
  const [gender, setGender] = useState('')
  const [group, setGroup] = useState('')
  const [allergies, setAllergies] = useState('')
  const [notes, setNotes] = useState('')
  const [kidImage, setKidImage] = useState('')

  function handleNewKid(e) {
    console.log('clicked')
    e.preventDefault()
    const newKid = {
      kid_first_name: kidFirstName,
      kid_last_name: kidLastName,
      kid_NickName: kidNickName,
      kid_age: age,
      kid_gender: gender,
      kid_group: group,
      kid_allergies: allergies,
      kid_group: group,
      kid_notes: notes,
      kid_image: kidImage,
    }

    fetch('/guardians', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newKid),
    })
      .then(resp => resp.json())
      .then(obj => alert('Client was Added'))
  }

  return (
    <div>
      <Modal
        style={{
          overlay: { backgroundColor: 'grey' },
          content: { color: 'orange' },
        }}
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
      >
        <h1>Add Kid</h1>
        <form onSubmit={handleNewKid}>
          <input
            onChange={e => {
              setKidFirstName(e.target.value)
            }}
            type="text"
            name="kidFirstName"
            placeholder="First Name"
          />
          <input
            onChange={e => {
              setKidLastName(e.target.value)
            }}
            type="text"
            name="kidLastName"
            placeholder="Last Name"
          />
          <input
            onChange={e => {
              setKidNickName(e.target.value)
            }}
            type="text"
            name="kidNickName"
            placeholder="NickName"
          />
          <input
            onChange={e => {
              setAge(e.target.value)
            }}
            type="text"
            name="age"
            placeholder="Age"
          />
          <input
            onChange={e => {
              setGender(e.target.value)
            }}
            type="text"
            name="gender"
            placeholder="Gender"
          />
          <input
            onChange={e => {
              setGroup(e.target.value)
            }}
            type="text"
            name="group"
            placeholder="Group"
          />
          <input
            onChange={e => {
              setAllergies(e.target.value)
            }}
            type="text"
            name="allergies"
            placeholder="Allergies"
          />
          <input
            onChange={e => {
              setNotes(e.target.value)
            }}
            type="text"
            name="notes"
            placeholder="Notes"
          />
          <input
            onChange={e => {
              setKidImage(e.target.value)
            }}
            type="text"
            name="kidImage"
            placeholder="Image"
          />
          <button type="submit">Submit</button>
        </form>

        <button onClick={() => setModalIsOpen(false)}>X</button>
      </Modal>
    </div>
  )
}

export default AddKidModal
