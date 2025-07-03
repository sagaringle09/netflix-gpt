import { useEffect } from "react";
import Header from "./Header";
import Login from "./Login";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Body = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
      }
    });
  }, []);
  return (
    <div>
      <Header />
      <Login />
    </div>
  );
};

export default Body;
