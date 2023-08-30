import React from "react";
import "./UserInfo.scss";

const UserInfo = (props) => {
  const fullName = props.host.name;
  const [firstName, lastName] = fullName.split(" ");
  return (
    <div className="user_info">
      <div className="owner_info">
        <h3>
          <span>{firstName}</span>
          <span>{lastName}</span>
        </h3>
        <img src={props.host.picture} alt="HostPic" />
      </div>

      <div className="apartment_owner_stars">
        {[1, 2, 3, 4, 5].map((num) => (
          <span key={num} className={props.rating >= num ? "on" : null}>
            ★
          </span>
        ))}
      </div>
    </div>
  );
};

export default UserInfo;
