import { React, useState } from 'react'
import { Btn } from './components/styles/ButtonStyle'

const KidsProfileUpdate = ({ kid }) => {
  const [kidFirstName, setKidFirstName] = useState('')
  const [kidLastName, setKidLastName] = useState('')
  const [kidNickName, setKidNickName] = useState('')
  const [age, setAge] = useState('')
  const [gender, setGender] = useState('')
  const [group, setGroup] = useState('')
  const [allergies, setAllergies] = useState('')
  const [notes, setNotes] = useState('')
  const [kidImage, setKidImage] = useState('')

  return (
    <div>
      <form>
        <input
          onChange={e => {
            setKidFirstName(e.target.value)
          }}
          type="text"
          name="kidFirstName"
          placeholder={kidFirstName}
        />
        <input
          onChange={e => {
            setKidLastName(e.target.value)
          }}
          type="text"
          name="kidLastName"
          placeholder={kidLastName}
        />
        <input
          onChange={e => {
            setKidNickName(e.target.value)
          }}
          type="text"
          name="kidNickName"
          placeholder={kidNickName}
        />
        <input
          onChange={e => {
            setAge(e.target.value)
          }}
          type="text"
          name="age"
          placeholder={age}
        />
        <input
          onChange={e => {
            setGender(e.target.value)
          }}
          type="text"
          name="gender"
          placeholder={gender}
        />
        <input
          onChange={e => {
            setGroup(e.target.value)
          }}
          type="text"
          name="group"
          placeholder={group}
        />
        <input
          onChange={e => {
            setAllergies(e.target.value)
          }}
          type="text"
          name="allergies"
          placeholder={allergies}
        />
        <input
          onChange={e => {
            setNotes(e.target.value)
          }}
          type="text"
          name="note"
          placeholder={notes}
        />
        <input
          onChange={e => {
            setKidImage(e.target.value)
          }}
          type="text"
          name="image"
          placeholder={kidImage}
        />
        <Btn type="submit">Update</Btn>
      </form>
    </div>
  )
}

export default KidsProfileUpdate
