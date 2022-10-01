import { React, useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import AddGuardianModal from './components/modals/AddGuardianModal';
import GuardianProfileUpdate from './components/GuardianProfileUpdate';
import { useParams } from 'react-router-dom';
import {
  useDeleteGuardianMutation,
  useGetGuardianQuery,
} from './features/api/apiSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const GuardianProfile = () => {
  const params = useParams();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [deleteGuardian] = useDeleteGuardianMutation();
  const {
    data = [],
    isSuccess,
    error,
  } = useGetGuardianQuery(params.guardian_id);
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    await deleteGuardian(id);
    toast.success('Contact has been Deleted');
    navigate('/guardians');
  };

  useEffect(() => {
    if (error) {
      alert('Something Went Wrong');
    }
  }, [error]);
  console.log(data);

  return (
    <>
      <NavBar />
      <h1>Guardian Profile</h1>
      <div>
        <img style={{ width: '12rem' }} src={data.guardian_image} alt="" />

        {isSuccess ? (
          <GuardianProfileUpdate guardian={data} />
        ) : (
          <div>loading</div>
        )}

        <button onClick={() => handleDelete(params.guardian_id)}>Delete</button>
      </div>
      <div>
        <h2>Additonal Guardians</h2>
        <AddGuardianModal
          modalIsOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
        />
        <button onClick={() => setModalIsOpen(true)}>
          Add Additional Guardian
        </button>
      </div>
      <div>
        <h2>Kids</h2>
        <button>Add Kid</button>
      </div>
    </>
  );
};

export default GuardianProfile;
