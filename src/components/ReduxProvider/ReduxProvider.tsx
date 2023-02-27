"use client";
import { FC, ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "@/stores/reduxStore";

interface Props {
  children: ReactNode;
}
const ReduxProvider: FC<Props> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
