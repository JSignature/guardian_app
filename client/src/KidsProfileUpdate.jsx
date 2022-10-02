import { React, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useUpdateKidMutation } from './features/api/apiSlice';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Btn } from './components/styles/ButtonStyle';

const KidsProfileUpdate = ({ kid }) => {
  const params = useParams();
  const paramsId = parseInt(params.kid_id);
  const [updateKid] = useUpdateKidMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
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
  console.log(errors);

  // const [kidFirstName, setKidFirstName] = useState('')
  // const [kidLastName, setKidLastName] = useState('')
  // const [kidNickName, setKidNickName] = useState('')
  // const [age, setAge] = useState('')
  // const [gender, setGender] = useState('')
  // const [group, setGroup] = useState('')
  // const [allergies, setAllergies] = useState('')
  // const [notes, setNotes] = useState('')
  // const [kidImage, setKidImage] = useState('')

  return (
    <div>
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
          {...register('gender', { maxLength: 2 })}
        />
        <input type="text" placeholder="Group" {...register('group', {})} />
        <input
          type="tel"
          placeholder="Allergies"
          {...register('allergies', {})}
        />
        <input type="email" placeholder="Notes" {...register('notes', {})} />
        <input type="text" placeholder="Image" {...register('image', {})} />

        <input type="submit" />
      </form>
      {/* <form>
        <input
          onChange={(e) => {
            setKidFirstName(e.target.value);
          }}
          type="text"
          name="kidFirstName"
          placeholder={kidFirstName}
        />
        <input
          onChange={(e) => {
            setKidLastName(e.target.value);
          }}
          type="text"
          name="kidLastName"
          placeholder={kidLastName}
        />
        <input
          onChange={(e) => {
            setKidNickName(e.target.value);
          }}
          type="text"
          name="kidNickName"
          placeholder={kidNickName}
        />
        <input
          onChange={(e) => {
            setAge(e.target.value);
          }}
          type="text"
          name="age"
          placeholder={age}
        />
        <input
          onChange={(e) => {
            setGender(e.target.value);
          }}
          type="text"
          name="gender"
          placeholder={gender}
        />
        <input
          onChange={(e) => {
            setGroup(e.target.value);
          }}
          type="text"
          name="group"
          placeholder={group}
        />
        <input
          onChange={(e) => {
            setAllergies(e.target.value);
          }}
          type="text"
          name="allergies"
          placeholder={allergies}
        />
        <input
          onChange={(e) => {
            setNotes(e.target.value);
          }}
          type="text"
          name="note"
          placeholder={notes}
        />
        <input
          onChange={(e) => {
            setKidImage(e.target.value);
          }}
          type="text"
          name="image"
          placeholder={kidImage}
        />
        <Btn type="submit">Update</Btn>
      </form> */}
    </div>
  );
};

export default KidsProfileUpdate;
