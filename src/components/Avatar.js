import React from "react";

import avatar0 from "../img/avatar-0.png";
import avatar1 from "../img/avatar-1.png";
import avatar2 from "../img/avatar-2.png";
import avatar3 from "../img/avatar-3.png";
import avatar4 from "../img/avatar-4.png";
import avatar5 from "../img/avatar-5.png";

const avatars = {
  avatar0,
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  avatar5
};

export default function Avatar(props) {
  return <img className="avatar" src={avatars[props.avatar]} alt="avatar"/>
}
