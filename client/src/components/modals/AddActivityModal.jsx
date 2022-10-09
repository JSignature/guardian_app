import Modal from 'react-modal';
import { useAddActivityMutation } from '../../features/api/apiSlice';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import '../styles/ModalStyle.css';
import { XBtn, BrighterBtn } from '../styles/ButtonStyle';
Modal.setAppElement('#root');

const AddActivityModal = ({ modalIsOpen, setModalIsOpen }) => {
  const params = useParams();
  const paramsId = parseInt(params.kid_id);

  const [addActivity] = useAddActivityMutation();

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const newActivity = {
      user_id: 1, //This needs to be dynamic
      kid_id: paramsId,
      description: data.description,
    };
    await addActivity(newActivity);

    toast.success('A new activity has been added');
    setModalIsOpen(false);
  };

  return (
    <Modal
      className="ModalStyle"
      isOpen={modalIsOpen}
      onRequestClose={() => setModalIsOpen(false)}
    >
      <header className="activityHeader">
        <h1>Add Activity</h1>
      </header>
      <form onSubmit={handleSubmit(onSubmit)}>
        <textarea
          placeholder="Enter Activity Description"
          {...register('description', { required: true })}
        />
        <div className="submitBtn">
          <BrighterBtn type="submit">Submit</BrighterBtn>
        </div>
      </form>

      <XBtn onClick={() => setModalIsOpen(false)}>X</XBtn>
    </Modal>
  );
};

export default AddActivityModal;
