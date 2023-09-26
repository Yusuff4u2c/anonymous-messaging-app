import { useState } from "react";
import * as Yup from "yup";
import logoIcon from "../assets/image/logo-icon.png";
import Button from "../components/button";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Input from "../components/input";

const Registration = () => {
  const navigate = useNavigate();
  const [regData, setRegData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errorData, setErrorData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const regSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(5, "password must be at least 5 characters")
      .required("password is required"),
  });
  function handleChange(e) {
    const { name, value } = e.target;
    setRegData({ ...regData, [name]: value });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await regSchema.validate(regData, { abortEarly: false });
      toast.success("User Registration Complete. Proceed to Login");
      navigate("/login");
    } catch (error) {
      if (error.inner) {
        error.inner.forEach((validationError) => {
          const { path, message } = validationError;
          setErrorData((prevErrorData) => ({
            ...prevErrorData,
            [path]: message,
          }));
        });
      }
    }
  }

  return (
    <div className="flex justify-center items-center text-white bg-gradient-to-r from-[rgb(167,49,167)] from-25% to-[#7a4cc4]">
      <div className="bg-[#250933] flex flex-col justify-center items-center gap-8 p-10 my-4 rounded-2xl">
        <div>
          <img src={logoIcon} alt="" />
        </div>
        <h1 className="text-4xl">Register</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="user-name" className="block mb-2  ">
              Your Username
            </label>
            <Input
              type="text"
              id="user-name"
              name="username"
              value={regData.username}
              onChange={handleChange}
              placeholder="Enter your username"
              error={errorData.username}
            />{" "}
          </div>
          <div className="mb-5">
            <label className="block mb-2" htmlFor="email">
              Your Email
            </label>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={regData.email}
              onChange={handleChange}
              error={errorData.email}
            />{" "}
          </div>
          <div className="mb-5">
            <label className="block mb-2" htmlFor="psw">
              Password
            </label>
            <Input
              type="password"
              id="psw"
              name="password"
              value={regData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              error={errorData.password}
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
          related policies. (Check Disclaimer)
        </p>
      </div>
    </div>
  );
};

export default Registration;
