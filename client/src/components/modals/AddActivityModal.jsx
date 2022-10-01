import { React, useState } from 'react'
import Modal from 'react-modal'
Modal.setAppElement('#root')

const AddActivityModal = ({ modalIsOpen, setModalIsOpen }) => {
  const [activity, setActivity] = useState('')

  function handleNewActivity(e) {
    console.log('clicked')
    e.preventDefault()
    const newActivity = {
      activity: activity,
    }

    fetch('/activities', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newActivity),
    })
      .then(resp => resp.json())
      .then(obj => alert('Activity was Added'))
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
        <h1>Add Activity</h1>
        <form onSubmit={handleNewActivity}>
          <input
            onChange={e => {
              setActivity(e.target.value)
            }}
            type="text"
            name="activity"
            placeholder="Activity"
          />

          <button type="submit">Submit</button>
        </form>

        <button onClick={() => setModalIsOpen(false)}>X</button>
      </Modal>
    </div>
  )
}

export default AddActivityModal
