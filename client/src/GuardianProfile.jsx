import { React, useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import AddKidModal from './components/modals/AddKidModal';
import GuardianProfileUpdate from './components/GuardianProfileUpdate';
import { useParams } from 'react-router-dom';
import { useGetGuardianQuery } from './features/api/apiSlice';

import style from 'styled-components/macro';
import { DarkerBtn } from './components/styles/ButtonStyle';
import KidCard from './components/KidCard';

const GuardianProfile = () => {
  const params = useParams();
  const [kidModalIsOpen, setKidModalIsOpen] = useState(false);

  const {
    data = [],
    isSuccess,
    refetch,
    error,
  } = useGetGuardianQuery(params.guardian_id);

  useEffect(() => {
    if (error) {
      refetch();
      alert('Something Went Wrong');
    }
  }, [error, refetch]);

  return (
    <>
      <StyledGuardianProfile>
        <NavBar />
        <h1>Guardian Profile</h1>
        <div className="Firstdiv">
          {isSuccess ? (
            <GuardianProfileUpdate guardian={data} />
          ) : (
            <div>loading</div>
          )}

          {/* <Btn onClick={() => handleDelete(params.guardian_id)}>Delete</Btn> */}
        </div>
        {/* <div>
          <h2>Additonal Guardians</h2>
          <AddGuardianModal
            modalIsOpen={guardianModalIsOpen}
            setModalIsOpen={setGuardianModalIsOpen}
          />
          <DarkerBtn
            css={`
              margin-left: 1220px;
            `}
            className="DarkerBtn"
            onClick={() => setGuardianModalIsOpen(true)}
          >
            + Add Additional Guardian
          </DarkerBtn>
        </div> */}
        <div>
          <h2>Kids</h2>
          <AddKidModal
            modalIsOpen={kidModalIsOpen}
            setModalIsOpen={setKidModalIsOpen}
          />
          <DarkerBtn
            css={`
              margin-left: 1220px;
            `}
            className="DarkerBtn"
            onClick={() => setKidModalIsOpen(true)}
          >
            + Add Kid
          </DarkerBtn>
          {isSuccess ? (
            data.kids.map((kid) => <KidCard key={kid.id} kid={kid} />)
          ) : (
            <div>loading</div>
          )}
        </div>
      </StyledGuardianProfile>
    </>
  );
};

const StyledGuardianProfile = style.div`

.Firstdiv{
  width:87%;
  height: 400px;
display:flex;
align-items: center;
justify-content: space-around;
background-color: #fff;
box-shadow: 5px 5px 20px #44cfcb;
margin-bottom: 40px;
margin-left: 100px;

}

  h2
{
  color: #56a3a6;
  width: 20rem;
  height:3rem;
  margin: 0 auto;

}


`;

export default GuardianProfile;
