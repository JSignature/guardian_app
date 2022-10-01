import { React, useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import AddGuardianModal from './components/modals/AddGuardianModal';
import GuardianProfileUpdate from './components/GuardianProfileUpdate';
import { useParams } from 'react-router-dom';
import { useDeleteGuardianMutation } from './features/api/apiSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const GuardianProfile = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [guardian, setGuardian] = useState([]);
  const [deleteGuardian] = useDeleteGuardianMutation();
  const navigate = useNavigate();

  const params = useParams();

  const handleDelete = async (id) => {
    await deleteGuardian(id);
    toast.success('Contact has been Deleted');
    navigate('/guardians');
  };

  return (
    <>
      <NavBar />
      <h1>Guardian Profile</h1>
      <div>
        <img style={{ width: '12rem' }} src={guardian.guardian_image} alt="" />
        <GuardianProfileUpdate guardian={guardian} />
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
