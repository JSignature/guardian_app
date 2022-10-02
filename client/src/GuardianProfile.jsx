import { React, useState, useEffect } from 'react'
import NavBar from './components/NavBar'
import AddGuardianModal from './components/modals/AddGuardianModal'
import AddKidModal from './components/modals/AddKidModal'
import GuardianProfileUpdate from './components/GuardianProfileUpdate'
import { useParams } from 'react-router-dom'
import {
  useDeleteGuardianMutation,
  useGetGuardianQuery,
} from './features/api/apiSlice'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import style from 'styled-components'
import { DarkerBtn, Btn } from './components/styles/ButtonStyle'
import KidCard from './components/KidCard'

const GuardianProfile = () => {
  const params = useParams()
  const [guardianModalIsOpen, setGuardianModalIsOpen] = useState(false)
  const [kidModalIsOpen, setKidModalIsOpen] = useState(false)

  const [deleteGuardian] = useDeleteGuardianMutation()
  const {
    data = [],
    isSuccess,
    refetch,
    error,
  } = useGetGuardianQuery(params.guardian_id)
  const navigate = useNavigate()

  const handleDelete = async id => {
    await deleteGuardian(id)
    toast.success('Contact has been Deleted')
    navigate('/guardians')
  }

  useEffect(() => {
    if (error) {
      refetch()
      alert('Something Went Wrong')
    }
  }, [error])

  if (isSuccess) {
    console.log(data)
  }

  const kidData = data.kids
  console.log(kidData)

  return (
    <>
      <GuardianProfileWrapper>
        <NavBar />
        <h1>Guardian Profile</h1>
        <div className="Firstdiv">
          <img className="GuardianImg" src={data.guardian_image} alt="" />

          {isSuccess ? (
            <GuardianProfileUpdate guardian={data} />
          ) : (
            <div>loading</div>
          )}

          <Btn onClick={() => handleDelete(params.guardian_id)}>Delete</Btn>
        </div>
        <div>
          <h2>Additonal Guardians</h2>
          <AddGuardianModal
            modalIsOpen={guardianModalIsOpen}
            setModalIsOpen={setGuardianModalIsOpen}
          />
          <DarkerBtn
            className="DarkerBtn"
            onClick={() => setGuardianModalIsOpen(true)}
          >
            + Add Additional Guardian
          </DarkerBtn>
        </div>
        <div>
          <h2>Kids</h2>
          <AddKidModal
            modalIsOpen={kidModalIsOpen}
            setModalIsOpen={setKidModalIsOpen}
          />
          <DarkerBtn
            className="DarkerBtn"
            onClick={() => setKidModalIsOpen(true)}
          >
            + Add Additional Kid
          </DarkerBtn>
          {isSuccess ? (
            kidData.map(kid => <KidCard kid={kid} />)
          ) : (
            <div>loading</div>
          )}
        </div>
      </GuardianProfileWrapper>
    </>
  )
}

const GuardianProfileWrapper = style.div`
.GuardianImg{
  width: 10rem;
  height: 10rem;
  object-fit: cover;
  border-radius: 50%;
  // padding: 10px;
  box-shadow: 0px 0px 20px grey;


}
.Firstdiv{
  width:svh;
display:flex;
align-items: center;
justify-content: space-between;

}

  h2
{

  width: 20rem;
  height:6rem;
  margin: 0 auto;

}
.DarkerBtn{
  display:flex;
align-items: center;

}



`

export default GuardianProfile
