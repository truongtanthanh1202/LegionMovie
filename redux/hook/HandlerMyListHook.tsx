import { useAppDispatch, useAppSelector } from "../store";
import { RootState } from "../store";
import { addMyListItem, removeMyListItem } from "../slice/MyListSlice";
import { MovieItemProperties } from "../slice/MyListSlice";
import * as Notifications from "expo-notifications";
import React from "react";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

async function schedulePushNotification() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "You've success add film in your list! 📬",
      body: "Film name",
      data: { data: "goes here" },
    },
    trigger: { seconds: 1 },
  });
}

export const MyListHook = () => {
  const notificationListener = React.useRef();
  const responseListener = React.useRef();

  React.useEffect(() => {
    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  const dispatch = useAppDispatch();
  const { numberCart, MyListItem } = useAppSelector(
    (state: RootState) => state.MyList
  );

  const handlerAddMyListItem = async (movieItem: MovieItemProperties) => {
    dispatch(addMyListItem(movieItem));
    await schedulePushNotification();
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
