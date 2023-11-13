import { useAppDispatch, useAppSelector } from "../store";
import { RootState } from "../store";
import { addMyListItem, removeMyListItem } from "../slice/MyListSlice";
import { MovieItemProperties } from "../slice/MyListSlice";

export const MyListHook = () => {
  const dispatch = useAppDispatch();
  const { numberCart, MyListItem } = useAppSelector(
    (state: RootState) => state.MyList
  );

  const handlerAddMyListItem = (movieItem) => {
    dispatch(addMyListItem(movieItem));
  };
  const handlerRemoveMyListItem = () => {};
  const handlerGetMyListItem = () => {
    return MyListItem;
  };
  const handlerFilterMyListItem = () => {};
  return {
    handlerAddMyListItem,
    handlerRemoveMyListItem,
    handlerGetMyListItem,
    handlerFilterMyListItem,
  };
};
