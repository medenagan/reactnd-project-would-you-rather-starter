import React from "react";

import PhotoBox from "./PhotoBox";

export default function Poll(props) {

  const {optionOne, optionTwo, userAuthor, hasAsked, authedId} = props.questionDetails;
  const votesCount = optionOne.votes.length + optionTwo.votes.length;

  return <PhotoBox
    avatar={userAuthor.avatarURL}
    title={hasAsked
      ? "Asked by You:"
      : `Asked by ${userAuthor.name}:`}
    direction="vertical"
  >
    <div className="aqua bold big self center">Results</div>
    {
      [optionOne, optionTwo].map(option => {
        const percentage = Math.round(option.votes.length / votesCount * 100);
        return <div key={option.text} className="optionstats box flex vertical">
          <div className="flex horizontal">
            <div className="bold">{option.text}</div>
            <div
              className="yourvote"
              title="Your vote!"
              style={{visibility: option.votes.includes(authedId) ? "visible" : "hidden"}}
            >
              <span>YOURS</span>
            </div>
          </div>
          <div className="progress">
            <div style={{width: `${percentage}%`}}>
              {
                `${percentage}%`
              }
            </div>
          </div>
          <div className="center self">{`${option.votes.length} votes of ${votesCount}`}</div>
        </div>
      })
    }

  </PhotoBox>;
}
