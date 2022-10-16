import { React, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import {
  useUpdateGuardianMutation,
  useDeleteGuardianMutation,
} from '../features/api/apiSlice';
import { useParams } from 'react-router-dom';
import { StyledForm } from './styles/FormStyle';
import { Btn } from './styles/ButtonStyle';
import { useNavigate } from 'react-router-dom';
import AddMessageModal from './modals/AddMessageModal';

const GuardianProfileUpdate = ({ guardian }) => {
  const navigate = useNavigate();
  const params = useParams();
  const paramsId = parseInt(params.guardian_id);
  const [updateGuardian] = useUpdateGuardianMutation();
  const [deleteGuardian] = useDeleteGuardianMutation();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: `${guardian.guardian_first_name}`,
      lastName: `${guardian.guardian_last_name}`,
      streetAddress: `${guardian.guardian_address_street}`,
      city: `${guardian.guardian_address_city}`,
      state: `${guardian.guardian_address_state}`,
      zip: `${guardian.guardian_address_zip}`,
      phone: `${guardian.guardian_phone}`,
      email: `${guardian.guardian_email}`,
      image: `${guardian.guardian_image}`,
    },
  });

  const handleDelete = async (id) => {
    await deleteGuardian(id);
    toast.success('Contact has been Deleted');
    navigate('/guardians');
  };

  const onSubmit = async (data) => {
    const updatedGuardian = {
      id: paramsId,
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

    await updateGuardian(updatedGuardian);
    toast.success('Contact has been Updated');
  };

  return (
    <StyledForm>
      <div>
        <div className="firstDiv">
          <img className="GuardianImg" src={guardian.guardian_image} alt="" />
          <article>
            <h3>
              {guardian.guardian_first_name} {guardian.guardian_last_name}
            </h3>
            <Btn onClick={() => setModalIsOpen(true)}>Text</Btn>
            <AddMessageModal
              modalIsOpen={modalIsOpen}
              setModalIsOpen={setModalIsOpen}
              guardianPhone={guardian.guardian_phone}
            />
            <Btn
              className="deleteBtn"
              onClick={() => handleDelete(params.guardian_id)}
            >
              Delete
            </Btn>
          </article>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="formDiv">
            <label>
              First Name:
              <input
                type="text"
                placeholder="First name"
                {...register('firstName', { required: true, maxLength: 80 })}
              />
            </label>

            <label>
              Last Name:
              <input
                type="text"
                placeholder="Last name"
                {...register('lastName', { required: true, maxLength: 100 })}
              />
            </label>
            <label>
              Street name:
              <input
                type="text"
                placeholder="Street Address"
                {...register('streetAddress', {})}
              />
            </label>
          </div>
          <div className="formDiv">
            <label>
              City:
              <input type="text" placeholder="City" {...register('city', {})} />
            </label>
            <label>
              State:
              <input
                type="text"
                placeholder="State"
                {...register('state', { maxLength: 2 })}
              />
            </label>
            <label>
              Zip:
              <input
                type="text"
                id="zip"
                placeholder="Zip"
                {...register('zip', {})}
              />
            </label>
          </div>
          <div className="formDiv">
            <label>
              Phone:
              <input
                type="tel"
                placeholder="Phone"
                {...register('phone', {})}
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                placeholder="Email"
                {...register('email', {})}
              />
            </label>
            <label>
              Image:
              <input
                type="text"
                placeholder="Image"
                {...register('image', {})}
              />
            </label>
          </div>

          <Btn className="updateBtn">Update</Btn>
        </form>
      </div>
    </StyledForm>
  );
};

export default GuardianProfileUpdate;
