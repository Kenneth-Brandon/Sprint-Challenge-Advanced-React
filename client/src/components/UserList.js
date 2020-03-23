import React from "react";

import UserCard from "./UserCard";
import useDarkMode from "../hooks/useDarkMode";

export default function UserList({ userList }) {
  const [isOnDarkMode, switchDarkMode] = useDarkMode(false);

  return (
    <div className="userList-container" data-testid="userList">
      <div
        className="dark-mode__toggle"
        onClick={switchDarkMode}
        data-testid="dark-mode-btn"
      >
        <div className={isOnDarkMode ? "toggle toggled" : "toggle"} />
      </div>

      <span id="dark-mode-text">dark mode</span>

      <div className="list-wrapper">
        {userList.map((user, index) => (
          <UserCard user={user} key={index} />
        ))}
      </div>
    </div>
  );
}
