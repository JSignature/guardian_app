import Modal from 'react-modal'
import { XBtn } from '../styles/ButtonStyle'
import { useForm } from 'react-hook-form'
import { useAddMessageMutation } from '../../features/api/apiSlice'
import { toast } from 'react-toastify'
import '../styles/TextModalStyle.css'

Modal.setAppElement('#root')

const AddMessageModal = ({ modalIsOpen, setModalIsOpen, guardianPhone }) => {
  const [sendMessage] = useAddMessageMutation()
  const { register, handleSubmit } = useForm()

  const onSubmit = data => {
    console.log(data.smsMessage)
    const message = {
      phone_number: guardianPhone,
      message: data.smsMessage,
    }
    sendMessage(message)
    setModalIsOpen(false)
    toast.success('Your Message has been sent')
  }

  return (
    <Modal
      className="ModalStyleText"
      isOpen={modalIsOpen}
      onRequestClose={() => setModalIsOpen(false)}
    >
      <div>
        <h1>Text Guardian</h1>
        <p>
          This feature will not work in beta testing. Twilio trial account only
          send to verified numbers.
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <textarea {...register('smsMessage', {})} />

          <input type="submit" />
          <button onClick={() => setModalIsOpen(false)}>X</button>
        </form>
      </div>
    </Modal>
  )
}

export default AddMessageModal
