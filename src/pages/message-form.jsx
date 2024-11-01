import Button from "../components/button";
import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { DatabaseService } from "../libs/services/DatabaseService";

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
  const [loading, setLoading] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [fetchedUser, setFetchedUser] = useState(undefined);
  const navigate = useNavigate();
  const { signUserOutOfApp, user } = useAuth();

  const [message, setMessage] = useState("");

  function handleChange(e) {
    const value = e.target.value;

    if (value.length <= MAX_CHARACTER_COUNT) {
      setMessage(value);
    }
  }

  async function handleMessageSubmission(e) {
    e.preventDefault();
    if (!message) return toast.error("Please say something!");
    if (message.length < 5)
      return toast.error("Your message should be 5 characters or more!");
    if (!fetchedUser) return toast.error("Invalid action");

    try {
      setProcessing(true);
      await DatabaseService.saveMessage(message, fetchedUser.uid);
      setMessage("");
      toast.success("Your response has been saved anonymously");
      signUserOutOfApp();
      navigate("/register?referrer=message-form");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setProcessing(false);
    }
  }

  async function checkUser() {
    const fetcheuser = await DatabaseService.fetchUser(username);
    setFetchedUser(fetcheuser);
  }

  useEffect(() => {
    if (user) {
      signUserOutOfApp();
    }
    setLoading(true);
    checkUser().finally(() => setLoading(false));
    console.log(fetchedUser);
  }, []);

  if (loading || fetchedUser === undefined) return <div>Loading...</div>;

  return (
    <div className="flex justify-center items-center text-white bg-gradient-to-r from-[rgb(167,49,167)] from-25% to-[#7a4cc4]">
      <div className="bg-[#250933] flex flex-col justify-center items-center gap-4 p-10 my-4 rounded-2xl">
        {fetchedUser === null && <NonUser username={username} />}

        {fetchedUser && (
          <>
            <h1 className="text-4xl">Say Something</h1>

            <form onSubmit={handleMessageSubmission}>
              <p className="text-sm">
                Say Something About Me <span className="text-[red]">*</span>
              </p>
              <textarea
                type="text"
                id="message"
                placeholder={`Leave a message for ${username} here..`}
                className="outline-none bg-transparent w-[400px] border-none"
                onChange={handleChange}
                value={message}
                rows={5}
              />
              <p className="pb-1 border-b-2">
                <span className="font-bold">
                  {MAX_CHARACTER_COUNT - message.length}
                </span>{" "}
                characters remaining
              </p>
              <Button type="submit" disabled={processing}>
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
              Guide to write perfect Anonymous Messages by HushHive: With the
              help of our anonymous message sender named HushHive now, you can
              easily message your heart's desire to your friends, family
              members, and anyone you know who are on HushHive. We care about
              our users and thus we are suggesting what you may choose to tell
              them anonymously.
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default MessageForm;
