import { useEffect, useState } from "react";
import { firebase, firestore } from "../../../functions/firebase";

interface LearnifyUser {
  uid: string;
  displayName: string;
  permissions: {
    isTeacher: boolean;
    isStudent: boolean;
    isAdmin: boolean;
  };
}

type User = LearnifyUser | null | firebase.firestore.DocumentData;

type useLearnifyHook = (
  authUser: firebase.User,
  loading: boolean
) => LearnifyUser | null | firebase.firestore.DocumentData;

const useLearnifyUser: useLearnifyHook = (authUser, loading) => {
  const [learnifyUser, setLearnifyUser] = useState<User>(null);

  useEffect(() => {
    // When there is a user
    if (!loading && authUser) {
      const { uid } = authUser;
      firestore
        .collection("users")
        .doc(uid)
        .onSnapshot(
          (doc) => {
            setLearnifyUser(doc.data());
          },
          // Detaches the listener
          () => {}
        );
    } else {
      // Where there isn't a user
      setLearnifyUser(null);
    }
  }, [authUser]);

  return learnifyUser;
};

export default useLearnifyUser;
