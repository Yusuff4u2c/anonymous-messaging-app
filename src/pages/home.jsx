import { Link } from "react-router-dom";
import Button from "../components/button";

import {
  FaLongArrowAltRight,
  FaShareAlt,
  FaFacebookSquare,
  FaWhatsapp,
  FaInstagram,
  FaCogs,
} from "react-icons/fa";
import useAuth from "../hooks/useAuth";

const Home = () => {
  const { user } = useAuth();
  const appUrl = import.meta.env.VITE_APP_URL;

  return (
    <div>
      <div className="flex justify-center items-center text-white bg-gradient-to-r from-[rgb(167,49,167)] from-25% to-[#7a4cc4]">
        <div className="bg-[#250933] flex flex-col justify-center items-center gap-8 p-10 my-4 rounded-2xl">
          <h1 className="text-4xl text-center">
            {user?.email ?? "Nil"}'s <br />
            Profile
          </h1>
          <a href="">
            {appUrl}/{user?.displayName}{" "}
          </a>
          <p>
            <span className="font-bold">Share your profile link</span> ❤️ to get
            responses from your <br /> friend. Go to
            <span className="font-bold">"View Messages"</span> to check out the{" "}
            <br />
            responses.
          </p>
          <div className="border-b-2 flex flex-col pb-6 text-center">
            <Link to="/messages">
              <Button>
                <div className="flex justify-center gap-3 items-center">
                  View Messages <FaLongArrowAltRight />
                </div>
              </Button>
            </Link>
            <Link>
              <a className="bg-[rgb(218,48,90)] flex justify-center items-center gap-4 my-3 p-3 rounded-lg hover:bg-gradient-to-r from-[rgb(212,39,160)] from-10% to-[#7a4cc4]">
                <FaShareAlt className="hover:-translate-x-3" /> Share My Profile
              </a>
            </Link>
            <Link>
              <a
                href="#"
                className="bg-[#25d366] flex justify-center items-center gap-4 my-3 p-3 rounded-lg hover:bg-gradient-to-r from-[rgb(212,39,160)] from-10% to-[#7a4cc4]"
              >
                <FaWhatsapp className="hover:-translate-x-3" /> Share on
                Whatsapp
              </a>
            </Link>
            <Link>
              <a
                href="#"
                className=" bg-[#3b5998] flex justify-center items-center gap-4 my-3 p-3 rounded-lg hover:bg-gradient-to-r from-[rgb(212,39,160)] from-10% to-[#7a4cc4]"
              >
                <FaFacebookSquare className="hover:-translate-x-3" /> Share on
                Facebook
              </a>
            </Link>
            <Link>
              <a
                href="#"
                className=" bg-[#e4405f] flex justify-center items-center gap-4 my-3 p-3 rounded-lg hover:bg-gradient-to-r from-[rgb(212,39,160)] from-10% to-[#7a4cc4]"
              >
                <FaInstagram className="hover:-translate-x-3" /> Share on
                Instagram
              </a>
            </Link>
          </div>
          <Link to="/settings">
            <Button>
              <div className="flex  justify-center gap-3 items-center">
                Settings <FaCogs />
              </div>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
