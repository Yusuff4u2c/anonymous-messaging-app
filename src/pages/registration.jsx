import logoIcon from "../assets/image/logo-icon.png";

const Registration = () => {
  return (
    <div className="flex justify-center items-center text-white bg-gradient-to-r from-[rgb(167,49,167)] from-25% to-[#7a4cc4]">
      <div className="bg-[#250933] flex flex-col justify-center items-center gap-8 p-10 my-4 rounded-2xl">
        <div>
          <img src={logoIcon} alt="" />
        </div>
        <h1 className="text-4xl">Register</h1>
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
            <label htmlFor="email">Your Email</label> <br />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
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
          <button
            type="button"
            className="mt-5 w-[400px] rounded-full p-3 mx-auto bg-gradient-to-r from-[rgb(168,40,168)] from-10% to-[#7a4cc4]"
          >
            Register Account
          </button>
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
