import { useState } from "react";
import * as Yup from "yup";
import logoIcon from "../assets/image/logo-icon.png";
import { Link } from "react-router-dom";
import Home from "./home";
import Button from "../components/button";

const Registration = () => {
  const [regData, setRegData] = useState({
    username: "",
    email: "",
    password: "",
    regIsCompleted: false,
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
      setRegData({ ...regData, regIsCompleted: true });
      console.log(regData);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      {regData.regIsCompleted ? (
        <Home />
      ) : (
        <div className="flex justify-center items-center text-white bg-gradient-to-r from-[rgb(167,49,167)] from-25% to-[#7a4cc4]">
          <div className="bg-[#250933] flex flex-col justify-center items-center gap-8 p-10 my-4 rounded-2xl">
            <div>
              <img src={logoIcon} alt="" />
            </div>
            <h1 className="text-4xl">Register</h1>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="user-name">Your Username</label> <br />
                <input
                  type="text"
                  id="user-name"
                  name="username"
                  value={regData.username}
                  onChange={handleChange}
                  placeholder="Enter your username"
                  className="outline-none bg-transparent w-[400px] pb-5 my-5 border-b-2"
                />{" "}
              </div>
              <p>{regData.username}</p>
              <div>
                <label htmlFor="email">Your Email</label> <br />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={regData.email}
                  onChange={handleChange}
                  className="outline-none bg-transparent w-[400px] pb-5 my-5 border-b-2"
                />{" "}
              </div>
              <div>
                <label htmlFor="psw">Password</label> <br />
                <input
                  type="password"
                  id="psw"
                  name="password"
                  value={regData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="outline-none bg-transparent w-[400px] pb-5 my-5 border-b-2"
                />
              </div>

              <Button>Register Account</Button>
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
      )}
    </div>
  );
};

export default Registration;
