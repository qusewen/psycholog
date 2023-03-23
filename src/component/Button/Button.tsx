import React from "react";
import "./Button.scss";
type Props = {
  nameBtn: string;
  onClick: React.MouseEventHandler;
  type:React.ButtonHTMLAttributes<HTMLButtonElement>["type"]
};
export default function Button({ nameBtn, onClick,type }: Props) {
  return (
    <button className='button' type={type} onClick={onClick}>
      {nameBtn}
    </button>
  );
}
