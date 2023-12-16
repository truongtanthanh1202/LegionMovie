import { useAppDispatch, useAppSelector } from "../store";
import { RootState } from "../store";
import {
  getProfile,
  setProfilePicturePath,
  setFullName,
  setNickName,
  setEmail,
  setGender,
} from "../slice/UserProfileSlice";

export const UserProfileHook = () => {
  const dispatch = useAppDispatch();
  const { profilePicturePath, fullName, nickName, email, gender } =
    useAppSelector((state: RootState) => state.UserProfile);

  const getAllProfile = () => {
    return {
      profilePicturePath: profilePicturePath,
      fullName: fullName,
      nickName: nickName,
      email: email,
      gender: gender,
    };
  };

  const handlerSetProfilePicturePath = (state: any) => {
    dispatch(setProfilePicturePath(state));
  };

  const handlerSetFullName = (state: string) => {
    dispatch(setFullName(state));
  };

  const handlerSetNickName = (state: string) => {
    dispatch(setNickName(state));
  };

  const handlerSetEmail = (state: string) => {
    dispatch(setEmail(state));
  };

  const handlerSetGender = (state: string) => {
    dispatch(setGender(state));
  };

  return {
    getAllProfile,
    handlerSetProfilePicturePath,
    handlerSetFullName,
    handlerSetNickName,
    handlerSetEmail,
    handlerSetGender,
  };
};
