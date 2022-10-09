import { useEffect } from 'react'
import Modal from 'react-modal'
import { useForm } from 'react-hook-form'
import { useUserLoginMutation } from '../../features/api/apiUserSlice'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import '../styles/ModalStyle.css'
import styled, { css } from 'styled-components/macro'
import { BrighterBtn, XBtn } from '../styles/ButtonStyle'

Modal.setAppElement('#root')

const SignInModal = ({ modalIsOpen, setModalIsOpen }) => {
  const navigate = useNavigate()

  const [loginUser, { data, isSuccess, isError, error }] =
    useUserLoginMutation()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async userData => {
    await loginUser(userData)
  }

  useEffect(() => {
    if (isSuccess) {
      const token = data.token
      const user_id = data.user_id
      const user_first_name = data.user_first_name
      localStorage.setItem('token', token)
      localStorage.setItem('user_id', user_id)
      localStorage.setItem('user_first_name', user_first_name)

      navigate('/dashboard')
      setModalIsOpen(false)
      toast.success(`Welcome ${user_first_name}, you have been logged in!`)
    } else if (isError) {
      console.log(error)
      toast.error(error.data.errors[0])
    }
  }, [isSuccess, isError, data, error, navigate, setModalIsOpen])

  return (
    <Modal
      className="ModalStyle"
      isOpen={modalIsOpen}
      onRequestClose={() => setModalIsOpen(false)}
    >
      <h1>Welcome, Please Sign In</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder="User Email"
          {...register('user_email', {
            required: 'This is a required field',
          })}
        />
        <p>{errors.user_email?.message}</p>
        <input
          type="password"
          placeholder="User Password"
          {...register('password', { required: 'This is a required field' })}
        />
        <p>{errors.password?.message}</p>
        <div className="submitBtn">
          <BrighterBtn input type="submit">
            Submit
          </BrighterBtn>
        </div>
      </form>
      <XBtn onClick={() => setModalIsOpen(false)}>X</XBtn>
    </Modal>
  )
}

export default SignInModal
