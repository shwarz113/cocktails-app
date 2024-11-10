import React, { FC, ReactNode } from "react";
import './index.scss';

interface Props {
  children: ReactNode;
}
export const Template: FC<Props> = ({ children }) => {
  return <div className={"template"}>{children}</div>;
};
