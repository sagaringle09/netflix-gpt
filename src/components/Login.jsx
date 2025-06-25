import { useState } from "react";

const Login = () => {
  const [showSignIn, setShowSignIn] = useState(true);

  const toggleSignInForm = () => {
    setShowSignIn(!showSignIn);
  };
  return (
    <div>
      <form className="absolute bg-black text-white p-12 my-36 mx-auto left-0 right-0 opacity-80 w-3/12 rounded-lg">
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
          className="p-2 my-2 bg-gray-950 w-full border rounded-lg"
          type="text"
          placeholder="Email or mobile number"
        />
        <input
          className="p-2 my-2 bg-gray-950 border w-full rounded-lg"
          type="text"
          placeholder="Password"
        />
        <button className="p-2 my-4 bg-red-700 w-full rounded-lg">
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
