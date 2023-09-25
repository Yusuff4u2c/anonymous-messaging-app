import { Link, useNavigate } from "react-router-dom";
import logoIcon from "../assets/image/logo-icon.png";
import Button from "../components/button";
import {
  FaToolbox,
  FaEnvelope,
  FaKey,
  FaUser,
  FaPowerOff,
  FaInfoCircle,
  FaQuestionCircle,
  FaLongArrowAltLeft,
} from "react-icons/fa";

const Settings = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center text-white bg-gradient-to-r from-[rgb(167,49,167)] from-25% to-[#7a4cc4]">
      <div className="bg-[#250933] flex flex-col justify-center items-center gap-8 p-10 my-4 rounded-2xl">
        <div>
          <img src={logoIcon} alt="" />
        </div>
        <h1 className="text-4xl">Settings</h1>
        <div className="border-b-2 border-[rgb(142,28,177)] flex flex-col pb-6 text-center">
          <Button
            title={
              <div className="flex  justify-center gap-3 items-center">
                View Archived Answers <FaToolbox />
              </div>
            }
          />
          <Link to="/change-email">
            <Button
              title={
                <div className="flex  justify-center gap-3 items-center">
                  Change Email <FaEnvelope />
                </div>
              }
            />
          </Link>
          <Link to="/change-password">
            <Button
              title={
                <div className="flex  justify-center gap-3 items-center">
                  Change Password <FaKey />
                </div>
              }
            />
          </Link>

          <Link to="/change-username">
            <Button
              title={
                <div className="flex  justify-center gap-3 items-center">
                  Change Username <FaUser />
                </div>
              }
            />
          </Link>
          <Link to="/disclaimer">
            <Button
              title={
                <div className="flex  justify-center gap-3 items-center">
                  Disclaimer <FaInfoCircle />
                </div>
              }
            />
          </Link>
          <Button
            title={
              <div className="flex  justify-center gap-3 items-center">
                Contact Us <FaQuestionCircle />
              </div>
            }
          />
          <Link to="/login">
            <Button
              title={
                <div className="flex  justify-center gap-3 items-center">
                  Log Out <FaPowerOff />
                </div>
              }
            />
          </Link>
        </div>
        <Link onClick={() => navigate(-1)}>
          <Button
            className="my-3"
            title={
              <div className="flex w-full justify-center gap-3 items-center">
                <FaLongArrowAltLeft /> Go Back
              </div>
            }
          />
        </Link>
      </div>
    </div>
  );
};

export default Settings;
