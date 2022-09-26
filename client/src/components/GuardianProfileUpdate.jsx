import { React, useState } from 'react'

const GuardianProfileUpdate = ({ guardian }) => {
  const [firstName, setFirstName] = useState(guardian.guardian_first_name)
  const [lastName, setLastName] = useState('dina')
  const [streetAddress, setStreetAddress] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [zip, setZip] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [image, setImage] = useState('')
  console.log(guardian.guardian_first_name)
  return (
    <div>
      <form>
        <input
          onChange={e => {
            setFirstName(e.target.value)
          }}
          type="text"
          name="firstName"
          placeholder={firstName}
        />
        <input
          onChange={e => {
            setLastName(e.target.value)
          }}
          type="text"
          name="lastName"
          placeholder={lastName}
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
        <button type="submit">Update</button>
      </form>
    </div>
  )
}

export default GuardianProfileUpdate
