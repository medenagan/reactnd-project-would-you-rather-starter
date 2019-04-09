import React from "react";

import { avatars } from "../utils/images";

export default function Avatar(props) {
  return <img className="avatar" src={avatars[props.avatar]} alt="avatar"/>
}
