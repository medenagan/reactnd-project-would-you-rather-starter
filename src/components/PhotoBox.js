import React from "react";

import Avatar from "./Avatar";

export default function PhotoBox(props) {
  return (
    <div className="photobox box flex vertical">
      {props.title && <div className="title">{props.title}</div>}
      {
        props.direction === "vertical"
          ? (
            <div className="flex horizontal">
              {props.avatar &&
                <div className="box center self">
                  <Avatar avatar={props.avatar}/>}
                </div>
              }
              <div className={"flex vertical ninety"}>
                {props.children}
              </div>
            </div>
          )
          : (
            <div className="flex horizontal">
              {props.avatar &&
                <div className="box">
                  <Avatar avatar={props.avatar}/>}
                </div>
              }
              {props.children}
            </div>
          )
      }
    </div>);
}
