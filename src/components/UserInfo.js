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
  avatar5,
};

export default function UserInfo({user}) {
  return (
    <div>

      <div className="userinfo box flex horizontal">
        <div className="box"><img className="avatar" src={avatars[user.avatarURL]} alt="avatar"/></div>
        <div className="flex vertical">
          <div className="name">{user.name}</div>
            <div className="questions flex horizontal">
              <div>Questions Answered</div>
              <div>{user.countAnswered}</div>
            </div>
            <div className="questions flex horizontal">
              <div>Questions Asked</div>
              <div>{user.countAsked}</div>
            </div>
        </div>
        <div className="box flex vertical">
          <div>Score</div>
          <div className="score">{user.countAll}</div>
        </div>
      </div>




    </div>




/*







  <div className="box">


  </div>
*/


  );
}
