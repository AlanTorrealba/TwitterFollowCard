import React from "react";
import { useState } from "react";

function TwitterFollowCard({ userName, name, initialIsFollowing }) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
  const text = isFollowing ? "siguiendo" : "seguir";
  const buttonClassName = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";

const handleClick = () => {
    setIsFollowing(!isFollowing)
}


  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src={`https://unavatar.io/${userName}`}
          alt="el avatar de midudev"
        />
        <div className="tw-followCard-info">
          <strong>{name}</strong>
          <span className="tw-followCard-infoUserName">@{userName}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleClick}>{text}</button>
      </aside>
    </article>
  );
}

export default TwitterFollowCard;
