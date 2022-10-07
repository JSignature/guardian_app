import React from 'react';
import Modal from 'react-modal';
import { useForm } from 'react-hook-form';

Modal.setAppElement('#root');

const SignUpModal = ({ modalIsOpen, setModalIsOpen }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <div>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <h1>Sign Up for Guardian App!</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="First name"
            {...register('First name', { required: true, maxLength: 80 })}
          />
          <input
            type="text"
            placeholder="Last name"
            {...register('Last name', { required: true, maxLength: 100 })}
          />
          <input type="email" placeholder="Email" {...register('Email', {})} />
          <input
            type="password"
            placeholder="Password"
            {...register('Password', { min: 2, maxLength: 12 })}
          />

          <input type="submit" />
        </form>
        <button onClick={() => setModalIsOpen(false)}>X</button>
      </Modal>
    </div>
  );
};

export default SignUpModal;
