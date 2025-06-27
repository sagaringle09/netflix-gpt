import { useRef, useState } from "react";
import { checkValidData } from "../utils/validateForm";
const Login = () => {
  const [showSignIn, setShowSignIn] = useState(true);
  const [errorMassage, setErrorMassage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setShowSignIn(!showSignIn);
  };

  const handleFormClick = () => {
    //Validation the form data
    const masssage = checkValidData(
      email.current.value,
      password.current.value
    );

    setErrorMassage(masssage);
  };
  return (
    <div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute bg-black text-white p-12 my-36 mx-auto left-0 right-0 opacity-80 w-3/12 rounded-lg"
      >
        <h1 className="font-bold text-3xl py-4">
          {!showSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {showSignIn && (
          <input
            className="p-2 my-2 bg-gray-950 w-full border rounded-lg"
            type="text"
            placeholder="Enter full name"
          />
        )}
        <input
          ref={email}
          className="p-2 my-2 bg-gray-950 w-full border rounded-lg"
          type="text"
          placeholder="Email or mobile number"
        />
        <input
          ref={password}
          className="p-2 my-2 bg-gray-950 border w-full rounded-lg"
          type="password"
          placeholder="Password"
        />
        <p className="text-red-700 font-bold text-lg py-2">{errorMassage}</p>
        <button
          className="p-2 my-4 bg-red-700 w-full rounded-lg cursor-pointer"
          onClick={handleFormClick}
        >
          {!showSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="cursor-pointer" onClick={toggleSignInForm}>
          {!showSignIn
            ? " New to Netflix?Sign up now."
            : "You already registered please?Sign In."}
        </p>
      </form>
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/8200f588-2e93-4c95-8eab-ebba17821657/web/IN-en-20250616-TRIFECTA-perspective_9cbc87b2-d9bb-4fa8-9f8f-a4fe8fc72545_large.jpg"
        alt="background-img"
      />
    </div>
  );
};

export default Login;
