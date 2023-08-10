import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";

const RegisterPage = () => {
  const { register, handleSubmit, reset } = useForm();
  const { createUser } = useAuth();

  const submit = (data) => {
    const url = "https://node-entregable-6-ecommerce.onrender.com/users";
    createUser(url, data);
    reset({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input {...register("firstName")} type="text" id="firstName" />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input {...register("lastName")} type="text" id="lastname" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input {...register("email")} type="text" id="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input {...register("password")} type="password" id="password" />
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input {...register("phone")} type="number" id="phone" />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default RegisterPage;
