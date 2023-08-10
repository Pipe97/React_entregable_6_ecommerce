import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";

const LoginPage = () => {
  const { register, reset, handleSubmit } = useForm();

  const { loginUser } = useAuth();

  const submit = (data) => {
    const url = "https://node-entregable-6-ecommerce.onrender.com/users/login";
    console.log(loginUser(url, data));
  };
  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <label htmlFor="email">Email</label>
          <input {...register("email")} type="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input {...register("password")} type="password" id="password" />
        </div>
        <button>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
