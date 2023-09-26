import logoIcon from "../assets/image/logo-icon.png";
import Button from "../components/button";
import { FaLongArrowAltRight } from "react-icons/fa";

const Login = () => {
  return (
    <div>
      <div className="flex justify-center items-center text-white bg-gradient-to-r from-[rgb(167,49,167)] from-25% to-[#7a4cc4]">
        <div className="bg-[#250933] flex flex-col justify-center items-center gap-8 p-10 my-4 rounded-2xl">
          <div>
            <img src={logoIcon} alt="" />
          </div>
          <h1 className="text-4xl">Login</h1>
          <p className="text-sm">
            Recieve anonymous compliments from your friends <br /> and send
            anonymous messages to your friends for free.
          </p>
          <form action="" className="">
            <div>
              <label htmlFor="user-name">Your Username</label> <br />
              <input
                type="text"
                id="user-name"
                name="user-name"
                placeholder="Enter your username"
                className="outline-none bg-transparent w-[400px] pb-5 my-5 border-b-2"
              />{" "}
            </div>

            <div>
              <label htmlFor="psw">Password</label> <br />
              <input
                type="password"
                id="psw"
                name="psw"
                placeholder="Enter your password"
                className="outline-none bg-transparent w-[400px] pb-5 my-5 border-b-2"
              />
            </div>
            <Button>
              <div className="flex justify-center gap-3 items-center">
                Log in <FaLongArrowAltRight />
              </div>
            </Button>
          </form>
          <a className="text-gray-500" href="#">
            Forgot Password
          </a>
          <a className="text-gray-500 my-0" href="#">
            Don't Have an Account? Register
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
