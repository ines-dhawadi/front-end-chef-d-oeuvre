import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { followUser, unfollowUser } from "../redux/action/actionUser";
import { isEmpty } from "../Utils";

const FollowHandler = ({ idToFollow, type }) => {
  const userData = useSelector((state) => state.userStore);
  const [isFollowed, setIsFollowed] = useState(false);
  const dispatch = useDispatch();

  const handleFollow = () => {
    dispatch(followUser(userData._id, idToFollow));
    setIsFollowed(true);
  };

  const handleUnfollow = () => {
    dispatch(unfollowUser(userData._id, idToFollow));
    setIsFollowed(false);
  };

  useEffect(() => {
    if (!isEmpty(userData.following)) {
      if (userData.following.includes(idToFollow)) {
        setIsFollowed(true);
      } else setIsFollowed(false);
    }
  }, [userData, idToFollow]);

  return (
    <>
      {isFollowed && !isEmpty(userData) && (
        <span onClick={handleUnfollow}>
          {type === "suggestion" && <button className="unfollow-btn bnt-fl">Abonné</button>}
          {type === "card" && <img src="images/imgChat/checked.svg" alt="checked"/>}
        </span>
      )}
      {isFollowed === false && !isEmpty(userData) && (
        <span onClick={handleFollow}>
          {type === "suggestion" && <button className="follow-btn bnt-fl">Suivre</button>}
          {type === "card" && <img src="images/imgChat/check.svg" alt="check"/>}
        </span>
      )}
    </>
  );
};

export default FollowHandler;
