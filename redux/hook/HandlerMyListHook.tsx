import { useAppDispatch, useAppSelector } from "../store";
import { RootState } from "../store";
import { addMyListItem, removeMyListItem } from "../slice/MyListSlice";
import { MovieItemProperties } from "../slice/MyListSlice";

export const MyListHook = () => {
  const dispatch = useAppDispatch();
  const { numberCart, MyListItem } = useAppSelector(
    (state: RootState) => state.MyList
  );

  const handlerAddMyListItem = (movieItem: MovieItemProperties) => {
    dispatch(addMyListItem(movieItem));
  };
  const handlerRemoveMyListItem = (id: number) => {
    // MyListItem.filter((item) => item.id != id);
    dispatch(removeMyListItem(id));
  };
  const handlerGetMyListItem = () => {
    return MyListItem;
  };
  const handlerFilterMyListItem = () => {};
  const checkDuplicate = (id: number) => {
    let check = true;

    MyListItem.map((item, key) => {
      if (item.id === id) {
        check = false;
      }
    });

    return check;
  };
  return {
    handlerAddMyListItem,
    handlerRemoveMyListItem,
    handlerGetMyListItem,
    handlerFilterMyListItem,
    checkDuplicate,
  };
};
