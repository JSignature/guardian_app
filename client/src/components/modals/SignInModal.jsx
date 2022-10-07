import Modal from 'react-modal';
import { useForm } from 'react-hook-form';
import { useUserLoginMutation } from '../../features/api/apiUserSlice';
import { toast } from 'react-toastify';
Modal.setAppElement('#root');

const SignInModal = ({ modalIsOpen, setModalIsOpen }) => {
  const [loginUser, { data, isSuccess, isError, error }] =
    useUserLoginMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    if (data.user_email && data.password) {
      await loginUser(data);
      if (error) {
        toast.error(error);
      }
    } else {
      toast.error('Please complete both User Email and Password fields');
    }
  };

  console.log(errors);

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
