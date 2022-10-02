import { React, useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import { useParams } from 'react-router-dom';
import KidsProfileUpdate from './KidsProfileUpdate';
import AddActivityModal from './components/modals/AddActivityModal';
import { useDeleteKidMutation, useGetKidQuery } from './features/api/apiSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Btn, DarkerBtn } from './components/styles/ButtonStyle';

const KidsProfile = () => {
  const [deleteKid] = useDeleteKidMutation();
  const params = useParams();
  const { data = [], isSuccess, error } = useGetKidQuery(params.kid_id);

  const navigate = useNavigate();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleDelete = async (id) => {
    await deleteKid(id);
    toast.success('Kid has been Deleted');
    navigate('/kids');
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
      <h1>Kids Profile</h1>
      <div>
        <h3>
          {data.kid_first_name} {data.kid_last_name}
        </h3>
        <img style={{ width: '12rem' }} src={data.kid_image} alt="" />
        {isSuccess ? <KidsProfileUpdate kid={data} /> : <div>loading</div>}
        <Btn onClick={() => handleDelete(params.kid_id)}>Delete</Btn>
      </div>

      <h2>Guardians</h2>
      <div className="underline"></div>

      <div>
        <h2>Activities</h2>
        <div className="underline"></div>
        <AddActivityModal
          modalIsOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
        />
        <DarkerBtn onClick={() => setModalIsOpen(true)}>Add Activity</DarkerBtn>
      </div>
    </>
  );
};

export default KidsProfile;

{
  /* 
      ---- needs to go on guardian page */
}
{
  /* <AddKidModal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
      // <button onClick={() => setModalIsOpen(true)}>Add Additional Kid</button> */
}
