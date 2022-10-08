import { useEffect } from 'react';
import Modal from 'react-modal';
import { useForm } from 'react-hook-form';
import { useUserLoginMutation } from '../../features/api/apiUserSlice';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
Modal.setAppElement('#root');

const SignInModal = ({ modalIsOpen, setModalIsOpen }) => {
  const navigate = useNavigate();
  const [loginUser, { data, isSuccess, isError, error }] =
    useUserLoginMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (userData) => {
    console.log(userData);
    if (userData.user_email && userData.password) {
      await loginUser(userData);
    } else {
      toast.error('Please complete both User Email and Password fields');
    }
  };
  useEffect(() => {
    if (isError) {
      toast.error(error.data.error);
    }
  });

  useEffect(() => {
    if (data) {
      const token = data.token;
      const user_id = data.user_id;
      const user_first_name = data.user_first_name;
      localStorage.setItem('token', token);
      localStorage.setItem('user_id', user_id);
      localStorage.setItem('user_first_name', user_first_name);

      navigate('/dashboard');
    }
  });

  return (
    <div>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <h1>Welcome, Please Sign In</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="email"
            placeholder="User Email"
            {...register('user_email', {})}
          />
          <input
            type="password"
            placeholder="User Password"
            {...register('password', {})}
          />

          <input type="submit" />
        </form>
        <button onClick={() => setModalIsOpen(false)}>X</button>
      </Modal>
    </div>
  );
};

export default SignInModal;
