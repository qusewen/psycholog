import React from "react";
import "./Button.scss";
type Props = {
  nameBtn: string;
  onClick: React.MouseEventHandler;
};
export default function Button({ nameBtn, onClick }: Props) {
  return (
    <button className='button' onClick={onClick}>
      {nameBtn}
    </button>
  );
}
