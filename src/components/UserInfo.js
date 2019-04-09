import React from "react";

import PhotoBox from "./PhotoBox";

export default function UserInfo({user}) {
  return (
    <PhotoBox avatar={user.avatarURL}>

      <div className="flex vertical">
        <div className="title">{user.name}</div>

        <div className="questions flex horizontal">
          <div>Questions Answered</div>
          <div>{user.countAnswered}</div>
        </div>

        <div className="questions flex horizontal">
          <div>Questions Asked</div>
          <div>{user.countAsked}</div>
        </div>
      </div>

      <div className="box flex vertical center">
        <div>Score</div>
        <div className="score">{user.countAll}</div>
      </div>

    </PhotoBox>
  );
}
