import { useForm } from 'react-hook-form';
import {
  useUpdateKidMutation,
  useDeleteKidMutation,
} from './features/api/apiSlice';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { StyledForm } from './components/styles/FormStyle';
import { useNavigate } from 'react-router-dom';
import { Btn } from './components/styles/ButtonStyle';

const KidsProfileUpdate = ({ kid }) => {
  const params = useParams();
  const paramsId = parseInt(params.kid_id);
  const [updateKid] = useUpdateKidMutation();
  const navigate = useNavigate();
  const [deleteKid] = useDeleteKidMutation();

  const handleDelete = async (id) => {
    await deleteKid(id);
    toast.success('Kid has been Deleted');
    navigate(`/guardians/${kid.guardian_id}`);
  };

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: `${kid.kid_first_name}`,
      lastName: `${kid.kid_last_name}`,
      nickname: `${kid.kid_nickname}`,
      age: `${kid.kid_age}`,
      gender: `${kid.kid_gender}`,
      group: `${kid.kid_group}`,
      allergies: `${kid.kid_allergies}`,
      notes: `${kid.kid_notes}`,
      image: `${kid.kid_image}`,
    },
  });

  const onSubmit = async (data) => {
    const updatedKid = {
      id: paramsId,
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

    await updateKid(updatedKid);
    toast.success('Kid has been Updated');
  };

  return (
    <StyledForm>
      <div>
        <div className="firstDiv">
          <img className="KidImg" src={kid.kid_image} alt="" />
          <h3>
            {kid.kid_first_name} {kid.kid_last_name}
          </h3>
        </div>
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
          <input type="text" placeholder="Age" {...register('age', {})} />
          <input
            type="text"
            placeholder="Gender"
            {...register('gender', { maxLength: 6 })}
          />
          <input type="text" placeholder="Group" {...register('group', {})} />
          <input
            type="tel"
            placeholder="Allergies"
            {...register('allergies', {})}
          />
          <input type="text" placeholder="Notes" {...register('notes', {})} />
          <input type="text" placeholder="Image" {...register('image', {})} />

          <Btn>Update</Btn>
        </form>
        <Btn className="deleteBtn" onClick={() => handleDelete(params.kid_id)}>
          Delete
        </Btn>
      </div>
    </StyledForm>
  );
};

export default KidsProfileUpdate;
