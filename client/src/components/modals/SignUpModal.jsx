import React from 'react';
import Modal from 'react-modal';
import { useForm } from 'react-hook-form';
import { useAddUserMutation } from '../../features/api/apiUserSlice';

import { toast } from 'react-toastify';

Modal.setAppElement('#root');

const SignUpModal = ({ modalIsOpen, setModalIsOpen }) => {
  const [addUser, { data, isSuccess, isError, error }] = useAddUserMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    await addUser(data);

    toast.success('A new user has been created, please login!!');
    console.log(data);
    setModalIsOpen(false);
  };
  console.log(errors);

  return (
    <div>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <h1>Sign Up for Guardian App!</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="First name"
            {...register('user_first_name', {
              required: 'This is a required field',
              maxLength: 80,
            })}
          />
          <p>{errors.user_first_name?.message}</p>
          <input
            type="text"
            placeholder="Last name"
            {...register('user_last_name', {
              required: 'This is a required field',
              maxLength: 100,
            })}
          />
          <p>{errors.user_last_name?.message}</p>
          <input
            type="email"
            placeholder="Email"
            {...register('user_email', {
              required: 'This is a required field',
            })}
          />
          <p>{errors.user_email?.message}</p>
          <input
            type="password"
            placeholder="Password"
            {...register('password', {
              required: 'This is a required field',
              minLength: {
                value: 2,
                message: 'Your password must be at least 6 characters',
              },
              maxLength: 12,
            })}
          />
          <p>{errors.password?.message}</p>

          <input type="submit" />
        </form>
        <button onClick={() => setModalIsOpen(false)}>X</button>
      </Modal>
    </div>
  );
};

export default SignUpModal;
