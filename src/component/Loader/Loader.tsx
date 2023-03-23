import React from "react";
import { Roller } from "react-awesome-spinners";
import "./Loader.scss";
type Props = {
    clas: string
}
export default function Loader({clas}:Props) {
  return (
    <div className={clas}>
      <Roller color={"gray"} />
    </div>
  );
}
