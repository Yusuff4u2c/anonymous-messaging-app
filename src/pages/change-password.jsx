import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import logoIcon from "../assets/image/logo-icon.png";
import Button from "../components/button";
const ChangeEmail = () => {
  return (
    <div className="flex justify-center items-center text-white bg-gradient-to-r from-[rgb(167,49,167)] from-25% to-[#7a4cc4]">
      <div className="bg-[#250933] flex flex-col justify-center items-center gap-8 p-10 my-4 rounded-2xl">
        <div>
          <img src={logoIcon} alt="" />
        </div>
        <h1 className="text-4xl">Change Password</h1>
        <p className="text-sm ">You can change your password from here.</p>
        <form action="" className="border-b-2 border-[rgb(142,28,177)] pb-6">
          <div>
            <label htmlFor="psw">New Password</label> <br />
            <input
              type="password"
              id="psw"
              name="psw"
              placeholder="Enter new password here"
              className="outline-none bg-transparent w-[400px] pb-5 my-5 border-b-2"
            />{" "}
          </div>

          <Button
            title={
              <div className="flex  justify-center gap-3 items-center">
                Change Password <FaLongArrowAltRight />
              </div>
            }
          />
        </form>
        <Button
          title={
            <div className="flex  justify-center gap-3 items-center">
              <FaLongArrowAltLeft /> Go Back
            </div>
          }
        />
      </div>
    </div>
  );
};

export default ChangeEmail;
