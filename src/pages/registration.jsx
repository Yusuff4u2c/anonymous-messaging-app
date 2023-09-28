import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import logoIcon from "../assets/image/logo-icon.png";
import Button from "../components/button";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Input from "../components/input";
import { useForm } from "react-hook-form";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { firebaseApp } from "../libs/firebase";

const regSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(5, "password must be at least 5 characters")
    .required("password is required"),
});

const fireBaseAuth = getAuth(firebaseApp);

const Registration = () => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
    resolver: yupResolver(regSchema),
  });

  async function onSubmit(data) {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        fireBaseAuth,
        data.email,
        data.password
      );
      // console.log(userCredential.user);
      toast.success("User Registration Complete. Proceed to Login");
      navigate("/login");
    } catch (error) {
      const errorCode = error.code;
      toast.error(errorCode);
    }
  }

  return (
    <div className="flex justify-center items-center text-white bg-gradient-to-r from-[rgb(167,49,167)] from-25% to-[#7a4cc4]">
      <div className="bg-[#250933] flex flex-col justify-center items-center gap-8 p-10 my-4 rounded-2xl">
        <div>
          <img src={logoIcon} alt="" />
        </div>

        <h1 className="text-4xl">Register</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-5">
            <label htmlFor="user-name" className="block mb-2  ">
              Your Username
            </label>
            <Input
              type="text"
              id="user-name"
              placeholder="Enter your username"
              {...register("username")}
              error={errors.username?.message}
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2" htmlFor="email">
              Your Email
            </label>
            <Input
              type="email"
              id="email"
              placeholder="Enter your email"
              {...register("email")}
              error={errors.email?.message}
            />{" "}
          </div>
          <div className="mb-5">
            <label className="block mb-2" htmlFor="password">
              Password
            </label>
            <Input
              type="password"
              id="password"
              placeholder="Enter your password"
              {...register("password")}
              error={errors.password?.message}
            />
          </div>

          <Button type="submit">Register Account</Button>
        </form>
        <a className="text-gray-500" href="#">
          Already Have an Account? Log in
        </a>
        <p className="text-sm">
          By using this service, you agree to our Privacy Policy, Terms of
          Service and any <br />
          related policies. <Link to="/disclaimer">(Check Disclaimer)</Link>
        </p>
      </div>
    </div>
  );
};

export default Registration;
