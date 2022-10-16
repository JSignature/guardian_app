import { React, useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import { useParams } from 'react-router-dom';
import KidsProfileUpdate from './KidsProfileUpdate';
import AddActivityModal from './components/modals/AddActivityModal';
import { useGetKidQuery } from './features/api/apiSlice';
import { DarkerBtn } from './components/styles/ButtonStyle';
import style from 'styled-components';
import ActivityCard from './components/ActivityCard';
import GuardianCard from './components/GuardianCard';
import Loading from './components/styles/LoadingStyle';

const KidsProfile = () => {
  const params = useParams();
  const {
    data = [],
    isSuccess,
    error,
    refetch,
  } = useGetKidQuery(params.kid_id);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    if (error) {
      refetch();
    }
  }, [error, refetch]);

  return (
    <StyledKidProfile>
      <NavBar />
      <h1>Kids Profile</h1>
      <div className="Firstdiv">
        {isSuccess ? <KidsProfileUpdate kid={data} /> : <div>loading</div>}
      </div>

      <h2>Guardians</h2>

      {isSuccess ? <GuardianCard guardian={data.guardian} /> : <Loading />}
      <div></div>

      <div>
        <h2>Activities</h2>

        <AddActivityModal
          modalIsOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
        />
        <div className="darkBtn">
          <DarkerBtn onClick={() => setModalIsOpen(true)}>
            Add Activity
          </DarkerBtn>
        </div>

        {isSuccess ? (
          data.activities.map((activity) => (
            <ActivityCard
              key={activity.id}
              activityId={activity.id}
              kidImage={data.kid_image}
              activity={activity.description}
              createdAt={activity.created_at}
              kidName={data.kid_first_name}
              kidId={data.id}
              userName={activity.user.user_first_name}
            />
          ))
        ) : (
          <div>loading</div>
        )}
      </div>
    </StyledKidProfile>
  );
};

const StyledKidProfile = style.div`

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

  width: 20rem;
  height:6rem;
  margin: 0 auto;
  color: #56a3a6;

}
.darkBtn{
  display:flex;
align-items: center;
justify-content: right;
margin-right: 90px;
margin-bottom: 10px;


}

`;

export default KidsProfile;
