import Button from "../components/button";
import { Link, useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import Input from "../components/input";
import { useState } from "react";
import { useForm } from "react-hook-form";

const MAX_CHARACTER_COUNT = 545;

function NonUser({ username }) {
  return (
    <>
      <h1 className="text-4xl">Oops..!</h1>
      <p className="max-w-[40ch] text-center">
        There is no one with the username <b>{username}</b>. Try looking for any
        possible typos.
      </p>

      <p className="max-w-[40ch] text-center">
        Or, you can get started by registering with the username {username}{" "}
        right now. Tap on "Register Now" button!
      </p>

      <Link to={"/register"}>
        <Button type="submit">Register Now</Button>
      </Link>
      <p className="max-w-prose text-center text-[10px]">
        By using this service, you agree to our Privacy Policy, Terms of Service
        and any related policies.
      </p>

      <Link to={"/"}>
        <Button type="submit">Go to Homepage</Button>
      </Link>
    </>
  );
}

const MessageForm = () => {
  const { username } = useParams();

  // check if the user is registered on our platform

  const [message, setMessage] = useState("");

  function handleChange(e) {
    const value = e.target.value;

    if (value.length <= MAX_CHARACTER_COUNT) {
      setMessage(value);
    }
  }

  return (
    <div className="flex justify-center items-center text-white bg-gradient-to-r from-[rgb(167,49,167)] from-25% to-[#7a4cc4]">
      <div className="bg-[#250933] flex flex-col justify-center items-center gap-4 p-10 my-4 rounded-2xl">
        {true && <NonUser username={username} />}

        {false && (
          <>
            <h1 className="text-4xl">Say Something</h1>

            <form>
              <p className="text-sm">
                Say Something About Me <span className="text-[red]">*</span>
              </p>
              <textarea
                type="text"
                id="message"
                placeholder="Leave a message for yusuff4u2c here.."
                className="outline-none bg-transparent w-[400px] border-none"
                onChange={handleChange}
                rows={5}
              />
              <p className="pb-1 border-b-2">
                <span className="font-bold">
                  {MAX_CHARACTER_COUNT - message.length}
                </span>{" "}
                characters remaining
              </p>
              <Button type="submit">
                <div className="flex justify-center gap-3 items-center">
                  Send Message
                </div>
              </Button>
            </form>

            <p className="max-w-[45ch]">
              Say what do you think about {username} or Leave a feedback for
              {username} anonymously using the form above.. 🥰 Thank You!! 😍😊
            </p>

            <p className="max-w-[45ch]">
              Guide to write perfect Anonymous Messages by Kubool: With the help
              of our anonymous message sender named Kubool now, you can easily
              message your heart's desire to your friends, family members, and
              anyone you know who are on Kubool. We care about our users and
              thus we are suggesting what you may choose to tell them
              anonymously. Everyone in this world loves to get affection from
              their loved ones be it their parents, partners, or close friends.
              Tell them how much they matter to you and how much you care for
              them! These compliments will increase their positive feelings and
              they will feel your friendly love from the core of their heart. If
              you feel like there is something you do not like out of them, you
              may choose to constructively criticize them about it. That is
              completely fine and in fact when constructive criticism is
              delivered right, one can develop themselves accordingly to become
              a better person as a whole. Make sure to be on point with the
              criticism and make sure that it does not become an insult at the
              end. You may also choose to suggest things that will help them
              become a better person as a whole! Future predictions are tough,
              as shown by the available future predictions apps just like the
              love predictions! No one knows what is going to happen next. But,
              it is always good to be aware of your cons, focuses on your pros,
              and transforming your cons to your pros. That is exactly what good
              constructive criticism helps you achieve! We hope you liked this
              little guide on how you can write better anonymous messages which
              are going to be very productive. Don't forget to play by the
              rules, keep it clean out there. 😉
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default MessageForm;

// import { FaLongArrowAltLeft } from "react-icons/fa";
// import logoIcon from "../assets/image/logo-icon.png";
// import Button from "../components/button";
// import { Link, useNavigate } from "react-router-dom";
// import { useState } from "react";

// const MessageForm = () => {
//     const [message,setMessage]=useState('')
//   return (
//     <div className="flex justify-center items-center text-white bg-gradient-to-r from-[rgb(167,49,167)] from-25% to-[#7a4cc4]">
//       <div className="bg-[#250933]  flex flex-col justify-center items-center gap-8 p-10 my-4 rounded-2xl">

//         <h1 className="text-4xl text-center mb-6">Say Something..</h1>
//         <div className=" border-b-2 pb-2 flex flex-col gap-14 border-gray-400">
//             <form action="" className=" self-start">
//                 <label htmlFor="message" className="block text-sm font-thin text-gray-400 mb-2">Say Something About Me</label>
//                 <input className="outline-none bg-transparent w-full" placeholder="Leave a message for yusuff4u2c here.." type="text " value={message} onChange={(e)=>setMessage(e.target.value)}/>
//             </form>
//             <p className="ps-1 text-gray-400">
//         </div>

//         <Link >
//           <Button className=" w-full my-3">
//             <div className="flex justify-center gap-3 items-center">
//                Send Message
//             </div>
//           </Button>
//         </Link>
//
//       </div>
//     </div>
//   );
// };

// export default MessageForm;
