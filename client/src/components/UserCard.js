import React from "react";

export default function UserCard({ user }) {
  return (
    <div className="card">
      <h2>
        <span>Name: </span>
        {user.name}
      </h2>
      <h2>
        <span>Country: </span>
        {user.country}
      </h2>
      <h2>
        <span>Searches: </span>
        {user.searches}
      </h2>
    </div>
  );
}
