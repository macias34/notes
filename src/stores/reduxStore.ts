import { configureStore } from "@reduxjs/toolkit";
import notificationReducer from "@/features/Notification/notificationSlice";

export const store = configureStore({
  reducer: {
    notification: notificationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
