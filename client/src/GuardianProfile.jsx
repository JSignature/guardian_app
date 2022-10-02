import { React, useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import AddGuardianModal from './components/modals/AddGuardianModal';
import AddKidModal from './components/modals/AddKidModal';
import GuardianProfileUpdate from './components/GuardianProfileUpdate';
import { useParams } from 'react-router-dom';
import {
  useDeleteGuardianMutation,
  useGetGuardianQuery,
} from './features/api/apiSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import KidCard from './components/KidCard';

const GuardianProfile = () => {
  const params = useParams();
  const [guardianModalIsOpen, setGuardianModalIsOpen] = useState(false);
  const [kidModalIsOpen, setKidModalIsOpen] = useState(false);

  const [deleteGuardian] = useDeleteGuardianMutation();
  const {
    data = [],
    isSuccess,
    refetch,
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
      refetch();
      alert('Something Went Wrong');
    }
  }, [error]);

  if (isSuccess) {
    console.log(data);
  }

  const kidData = data.kids;
  console.log(kidData);

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
          modalIsOpen={guardianModalIsOpen}
          setModalIsOpen={setGuardianModalIsOpen}
        />
        <button onClick={() => setGuardianModalIsOpen(true)}>
          Add Additional Guardian
        </button>
      </div>
      <div>
        <h2>Kids</h2>
        <AddKidModal
          modalIsOpen={kidModalIsOpen}
          setModalIsOpen={setKidModalIsOpen}
        />
        <button onClick={() => setKidModalIsOpen(true)}>Add Kid</button>

        {isSuccess ? (
          kidData.map((kid) => <KidCard kid={kid} />)
        ) : (
          <div>loading</div>
        )}
      </div>
    </>
  );
};

export default GuardianProfile;
