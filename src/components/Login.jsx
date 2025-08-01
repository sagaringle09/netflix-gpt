import { useRef, useState } from "react";
import { checkValidData } from "../utils/validateForm";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";

import { addUser } from "../redux/userSlice";
import { useDispatch } from "react-redux";
import { login } from "../redux/isSignOutSlice";
import { BG_IMAGE } from "../utils/constants";

const Login = () => {
  const dispatch = useDispatch();

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMassage, setErrorMassage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleFormClick = () => {
    const nameValue = isSignInForm ? null : name.current?.value;
    //Validation the form data
    const masssage = checkValidData(
      email.current.value,
      password.current.value,
      nameValue
    );
    setErrorMassage(masssage);
    if (masssage) return;

    //Authentication Logic //Sign In Sign Up logic
    if (!isSignInForm) {
      // Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
        name.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
            })
            .catch((error) => {
              // An error occurred
              // ...
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMassage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      //Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          dispatch(login());
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMassage(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute bg-black text-white p-12 my-36 mx-auto left-0 right-0 opacity-80 w-3/12 rounded-lg"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
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
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? " New to Netflix?Sign up now."
            : "You already registered please?Sign In."}
        </p>
      </form>
      <img src={BG_IMAGE} alt="background-img" />
    </div>
  );
};

export default Login;
