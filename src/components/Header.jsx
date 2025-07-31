import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../redux/userSlice";
import { logout } from "../redux/isSignOutSlice";
import { LOGO, USER_ICON } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isAuthenticated = useSelector(
    (state) => state.isSignOut.isAuthenticated
  );

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
        dispatch(logout());
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  //Authentication Logic
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        // Navigate to page
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    //Unsubscribe when component will unmount
    return () => unsubscribe();
  }, [dispatch, navigate]);

  return (
    <div className="absolute flex justify-between w-screen px-8 py-2 bg-gradient-to-b from-black z-10">
      <img className="w-30 h-12 mx-8 mt-2" src={LOGO} alt="logo" />
      {isAuthenticated && (
        <div className="flex mt-2 p-2">
          <img className="w-9 h-9 rounded" src={USER_ICON} alt="usericon" />
          <button
            onClick={handleSignOut}
            className="font-bold text-white p cursor-pointer p-2"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};
export default Header;
