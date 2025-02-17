"use client"
import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import store from "./Store";

interface Props {
  children: ReactNode;
}

const Providers = (props: Props) => {
  return <Provider store={store}>{props.children}</Provider>;
};

export default Providers;
