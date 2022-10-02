import { React } from 'react';
import Modal from 'react-modal';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useAddKidMutation } from '../../features/api/apiSlice';
import { toast } from 'react-toastify';

Modal.setAppElement('#root');

const AddKidModal = ({ modalIsOpen, setModalIsOpen }) => {
  const params = useParams();
  const paramsId = parseInt(params.guardian_id);
  const [addKid] = useAddKidMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const newKid = {
      guardian_id: paramsId,
      kid_first_name: data.firstName,
      kid_last_name: data.lastName,
      kid_nickname: data.nickname,
      kid_age: data.age,
      kid_gender: data.gender,
      kid_group: data.group,
      kid_allergies: data.allergies,
      kid_notes: data.notes,
      kid_image: data.image,
    };
    await addKid(newKid);
    toast.success('Kid has been added!! Yaayy!');
    setModalIsOpen(false);
    console.log(data);
  };
  console.log(errors);

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

        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="First name"
            {...register('firstName', { required: true, maxLength: 80 })}
          />
          <input
            type="text"
            placeholder="Last name"
            {...register('lastName', { required: true, maxLength: 100 })}
          />
          <input
            type="text"
            placeholder="Nickname"
            {...register('nickname', {})}
          />
          <input type="number" placeholder="Age" {...register('age', {})} />
          <input type="text" placeholder="Gender" {...register('gender', {})} />
          <input type="text" placeholder="Group" {...register('group', {})} />
          <input
            type="text"
            placeholder="Allergies"
            {...register('allergies', {})}
          />
          <textarea {...register('notes', {})} />
          <input type="text" placeholder="Image" {...register('image', {})} />

          <input type="submit" />
        </form>

        <button onClick={() => setModalIsOpen(false)}>X</button>
      </Modal>
    </div>
  );
};

export default AddKidModal;
