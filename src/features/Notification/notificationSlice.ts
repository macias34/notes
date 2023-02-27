import { createSlice } from "@reduxjs/toolkit";

export type NotificationType = "error" | "success";

export interface InitialNotificationState {
  show: boolean;
  message: string;
  type: NotificationType;
}

type Action = {
  payload: Omit<InitialNotificationState, "show">;
  type: string;
};

const initialState: InitialNotificationState = {
  show: false,
  message: "",
  type: "error",
};

export const notificationSlice = createSlice({
  name: "teams",
  initialState,
  reducers: {
    showNotification: (state, action: Action) => {
      const { type, message } = action.payload;

      state.show = true;
      state.message = message;
      state.type = type;
    },
    hideNotification: (state) => {
      state.show = false;
    },
  },
});

export const { showNotification, hideNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
