import Modal from 'react-modal';
import { XBtn } from '../styles/ButtonStyle';
import { useForm } from 'react-hook-form';
import { useAddMessageMutation } from '../../features/api/apiSlice';
import { toast } from 'react-toastify';

Modal.setAppElement('#root');

const AddMessageModal = ({ modalIsOpen, setModalIsOpen, guardianPhone }) => {
  const [sendMessage] = useAddMessageMutation();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const message = {
      phone_number: guardianPhone,
      message: data.smsMessage,
    };
    sendMessage(message);
    setModalIsOpen(false);
    toast.success('Your Message has been sent');
  };

  return (
    <Modal
      ///Needs a button to close the Modal
      className="ModalStyle"
      isOpen={modalIsOpen}
      onRequestClose={() => setModalIsOpen(false)}
    >
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <textarea {...register('smsMessage', {})} />

          <input type="submit" />
        </form>
      </div>
      <XBtn onClick={() => setModalIsOpen(false)}>X</XBtn>
    </Modal>
  );
};

export default AddMessageModal;
