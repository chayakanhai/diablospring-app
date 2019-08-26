import React from "react";
import moment from "moment";

const Notifications = props => {
  const { notifications } = props;
  return (
    <div className="section">
      <div className="card z-depth-0">
        <div className="card-content black-text text-darken card-panel teal lighten-2">
          <span className="card-title">Notifications</span>
          <ul className="notifications">
            {notifications &&
              notifications.map(demo => {
                return (
                  <li key={demo.id}>
                    <span className="pink-text">{demo.user}</span>
                    <span>{demo.content}</span>
                    <div className="grey-text note-date">
                      {moment(demo.time.toDate()).fromNow()}
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
