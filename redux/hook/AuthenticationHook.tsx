import { useAppDispatch, useAppSelector } from "../store";
import { RootState } from "../store";
import { getIsSignIn, setIsSignIn } from "../slice/AuthenticationSlice";

export const AuthenticationHook = () => {
  const dispatch = useAppDispatch();
  const { IsSignIn } = useAppSelector(
    (state: RootState) => state.Authentication
  );

  const handlerGetIsSignIn = () => {
    return IsSignIn;
  };

  const handlerSetIsSignIn = (state: boolean) => {
    return dispatch(setIsSignIn(state));
  };

  return { handlerGetIsSignIn, handlerSetIsSignIn };
};
