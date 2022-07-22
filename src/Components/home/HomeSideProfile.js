// import React, {
//   useState,
//   useEffect,
//   Fragment,
//   useContext,
//   useReducer,
// } from "react";
// import { getMyProfile } from "../../action/action-profile";
// import { getAllUser } from "../../action/action-user";
// import { AuthContext } from "../../auth/AuthContext";
// import {
//   initialStateUser,
//   reducerFunctionUser,
// } from "../../reducer/reducer-user";
// import FriendListItem from "./FriendList/FriendListItem";
// import Card from "../../UI/Card";
// import CircleImage from "../../UI/CircleImage";
// import male from "../../assets/male.jpg";
// import Spinner from "../../UI/Spinner";

// import styles from "./HomePage.module.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import FriendList from "./FriendList/FriendList";
// import MiniProfile from "./MiniProfile";

// function HomeSideProfile() {
//   // const [userState, dispatch] = useReducer(
//   //   reducerFunctionUser,
//   //   initialStateUser
//   // );
//   // const [profileData, setProfileData] = useState(null);
//   // const [listUser, setListUser] = useState(null);
//   // const [pageNumber, setPageNumber] = useState(1);
//   // const [isLastPage, setIsLastPage] = useState(false);
//   // const [isFetching, setIsFetching] = useState(true);

//   // const userContext = useContext(AuthContext);

//   // const fetchingProfile = async () => {
//   //   const resData = await getMyProfile();
//   //   setProfileData(resData);
//   // };

//   // useEffect(() => {
//   //   fetchingProfile();
//   // }, []);

//   // useEffect(() => {
//   //   const fetchingListUser = async () => {
//   //     const response = await getAllUser(pageNumber, true);
//   //     setListUser(response);
//   //     setIsFetching(false);
//   //   };
//   //   fetchingListUser();
//   // }, [pageNumber]);

//   // const previousButtonHandler = () => {
//   //   setPageNumber(pageNumber - 1);
//   //   setIsLastPage(false);
//   // };
//   // const nextButtonHandler = () => {
//   //   const lastPage = Math.ceil(listUser.total / listUser.limit);

//   //   if (pageNumber + 1 === lastPage) {
//   //     setIsLastPage(true);
//   //   }
//   //   setPageNumber(pageNumber + 1);
//   //   // console.log(pageNumber);
//   //   // console.log(isLastPage);
//   // };

//   return (
//     <div className={`${styles.sideProfileContainer} flexColumn`}>
//       <MiniProfile />
//       <FriendList />
//     </div>
//   );
// }

// export default HomeSideProfile;
