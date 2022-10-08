import { React, useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useForm } from 'react-hook-form';
import { useAddGuardianMutation } from '../../features/api/apiSlice';
import '../styles/ModalStyle.css';
import { BrighterBtn, DarkerBtn, Btn, XBtn } from '../styles/ButtonStyle';
import { toast } from 'react-toastify';

Modal.setAppElement('#root');
const AddGuardianModal = ({ modalIsOpen, setModalIsOpen }) => {
  const [addGuardian, { error, isError, isSuccess }] = useAddGuardianMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const newGuardian = {
      is_primary: true,
      guardian_first_name: data.firstName,
      guardian_last_name: data.lastName,
      guardian_address_street: data.streetAddress,
      guardian_address_city: data.city,
      guardian_address_state: data.state,
      guardian_address_zip: data.zip,
      guardian_phone: data.phone,
      guardian_email: data.email,
      guardian_image: data.image,
    };
    await addGuardian(newGuardian);
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success('A new Guardian has been added');
      setModalIsOpen(false);
    } else if (isError) {
      console.log(error);
      toast.error(error.data.errors[0]);
    }
  }, [error, isError, isSuccess]);

  return (
    <Modal
      className="ModalStyle"
      isOpen={modalIsOpen}
      onRequestClose={() => setModalIsOpen(false)}
    >
      <header>
        <h1>Add Guardian</h1>
      </header>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="First Name"
          {...register('firstName', { required: true })}
        />
        <input
          type="text"
          placeholder="Last Name"
          {...register('lastName', { required: true })}
        />
        <input
          type="text"
          placeholder="Street Address"
          {...register('street')}
        />
        <input type="text" placeholder="City" {...register('city')} />
        <input type="text" placeholder="State" {...register('state')} />
        <input type="number" placeholder="Zip" {...register('zip')} />
        <input type="text" placeholder="Phone" {...register('phone')} />
        <input type="text" placeholder="Email" {...register('email')} />
        <input type="text" placeholder="Image" {...register('image')} />
        <BrighterBtn type="submit">Submit</BrighterBtn>
        {/* <input type="submit" /> */}
      </form>
      <XBtn onClick={() => setModalIsOpen(false)}>X</XBtn>
    </Modal>
  );
};

export default AddGuardianModal;
