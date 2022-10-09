import { React, useState, useEffect } from 'react'
import NavBar from './components/NavBar'
import { useParams } from 'react-router-dom'
import KidsProfileUpdate from './KidsProfileUpdate'
import AddActivityModal from './components/modals/AddActivityModal'
import {
  useGetKidQuery,
  useDeleteActivityMutation,
} from './features/api/apiSlice'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { DarkerBtn } from './components/styles/ButtonStyle'
import style from 'styled-components'

const KidsProfile = () => {
  const params = useParams()
  const { data = [], isSuccess, error, refetch } = useGetKidQuery(params.kid_id)

  const navigate = useNavigate()
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const [deleteActivity] = useDeleteActivityMutation()

  const handleActivityDelete = id => {
    deleteActivity(id)
    toast.success('Activity Deleted')
  }

  useEffect(() => {
    if (error) {
      refetch()
      // alert('Something Went Wrong');
      console.log('Error from the fetch:' + error)
    }
  }, [error])
  console.log(data)
  return (
    <StyledKidProfile>
      <NavBar />
      <h1>Kids Profile</h1>
      <div className="Firstdiv">
        {isSuccess ? <KidsProfileUpdate kid={data} /> : <div>loading</div>}
      </div>

      <h2>Guardians</h2>
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
        {/* Prob need to make an activity card to clean this up */}
        {isSuccess ? (
          data.activities.map(activity => (
            <div>
              <p key={activity.id}>
                {activity.description}{' '}
                {new Date(activity.created_at).toLocaleDateString()} at:
                {new Date(activity.created_at).toLocaleTimeString()}
                {activity.id}
                <button onClick={() => handleActivityDelete(activity.id)}>
                  Delete Activity
                </button>
              </p>
            </div>
          ))
        ) : (
          <div>loading</div>
        )}
      </div>
    </StyledKidProfile>
  )
}

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

`

export default KidsProfile

{
  /* 
      ---- needs to go on guardian page */
}
{
  /* <AddKidModal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
      // <button onClick={() => setModalIsOpen(true)}>Add Additional Kid</button> */
}
