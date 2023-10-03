import Button from "../components/button";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Input from "../components/input";
import { useState } from "react";
import { useForm } from "react-hook-form";

const Message = () => {
  const maxCharacter = 545;
  const [message, setMessage] = useState("");

  function handleChange(e) {
    const value = e.target.value;

    if (value.length <= maxCharacter) {
      setMessage(value);
    }
  }

  return (
    <div className="flex justify-center items-center text-white bg-gradient-to-r from-[rgb(167,49,167)] from-25% to-[#7a4cc4]">
      <div className="bg-[#250933] flex flex-col justify-center items-center gap-4 p-10 my-4 rounded-2xl">
        <h1 className="text-4xl">Say Something</h1>

        <form>
          <p className="text-sm">
            Say Something About Me <span className="text-[red]">*</span>
          </p>
          <input
            type="text"
            id="message"
            placeholder="Leave a message for yusuff4u2c here.."
            className="outline-none bg-transparent w-[400px] border-none"
            onChange={handleChange}
          />
          <p className="pb-1 my-14 border-b-2">
            <span className="font-bold">{maxCharacter - message.length}</span>{" "}
            characters remaining
          </p>
          <Button type="submit">
            <div className="flex justify-center gap-3 items-center">Log in</div>
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Message;

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
