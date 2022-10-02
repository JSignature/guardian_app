import Modal from 'react-modal';
import { useAddActivityMutation } from '../../features/api/apiSlice';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
Modal.setAppElement('#root');

const AddActivityModal = ({ modalIsOpen, setModalIsOpen }) => {
  const params = useParams();
  const paramsId = parseInt(params.kid_id);

  const [addActivity] = useAddActivityMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <textarea
            placeholder="Enter Activity Description"
            {...register('description', { required: true })}
          />

          <input type="submit" />
        </form>

        <button onClick={() => setModalIsOpen(false)}>X</button>
      </Modal>
    </div>
  );
};

export default AddActivityModal;
