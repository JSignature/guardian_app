import { React, useEffect } from 'react';
import Modal from 'react-modal';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useAddKidMutation } from '../../features/api/apiSlice';
import { toast } from 'react-toastify';
import { BrighterBtn, DarkerBtn, Btn, XBtn } from '../styles/ButtonStyle';
import '../styles/ModalStyle.css';

Modal.setAppElement('#root');

const AddKidModal = ({ modalIsOpen, setModalIsOpen }) => {
  const params = useParams();
  const paramsId = parseInt(params.guardian_id);
  const [addKid, { error, isError, isSuccess }] = useAddKidMutation();

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
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success('A new Kid has been added');
      setModalIsOpen(false);
    } else if (isError) {
      console.log(error);
      toast.error(error.data.errors[0]);
    }
  }, [error, isError, isSuccess]);

  return (
    <div>
      <Modal
        className="ModalStyle"
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
      >
        <header>
          <h1>Add Kid</h1>
        </header>

        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="First name"
            {...register('firstName', {
              required: 'This is a required field',
              maxLength: 80,
            })}
          />
          <p>{errors.firstName?.message}</p>
          <input
            type="text"
            placeholder="Last name"
            {...register('lastName', {
              required: 'This is a required field',
              maxLength: 100,
            })}
          />
          <p>{errors.lastName?.message}</p>
          <input
            type="text"
            placeholder="Nickname"
            {...register('nickname', {})}
          />
          <p>{errors.nickname?.message}</p>
          <input
            type="number"
            placeholder="Age"
            {...register('age', { required: 'This is a required field' })}
          />
          <p>{errors.age?.message}</p>
          <input
            type="text"
            placeholder="Gender"
            {...register('gender', { required: 'This is a required field' })}
          />
          <p>{errors.gender?.message}</p>
          <input type="text" placeholder="Group" {...register('group', {})} />
          <input
            type="text"
            placeholder="Allergies"
            {...register('allergies', {})}
          />
          <p>{errors.allergies?.message}</p>
          <textarea {...register('notes', {})} />
          <p>{errors.notes?.message}</p>
          <input type="text" placeholder="Image" {...register('image', {})} />

          <BrighterBtn input type="submit">
            Submit
          </BrighterBtn>
        </form>

        <XBtn onClick={() => setModalIsOpen(false)}>X</XBtn>
      </Modal>
    </div>
  );
};

export default AddKidModal;
