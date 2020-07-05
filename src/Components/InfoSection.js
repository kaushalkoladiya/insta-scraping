import React from "react";

export default (props) => {
  return (
    <section className="p-4">
      <div className="row text-center">
        <div className="col">
          <img
            src={props.info.profileImage}
            className="img img-fluid w-100 h-auto"
            style={{ maxWidth: "500px" }}
            alt="Profile"
          />
        </div>
      </div>

      <div className="row py-1 text-center">
        <div className="col">
          Name:{" "}
          <span className="font-weight-bold">
            {props.info.fullname ? props.info.fullname : props.info.username}
          </span>
        </div>
      </div>
      <div className="row py-1 text-center">
        <div className="col">
          Bio: <span className="font-weight-bold">{props.info.bio}</span>
        </div>
      </div>
      <div className="row py-1 text-center">
        <div className="col">
          Website: <span className="font-weight-bold">{props.info.link}</span>
        </div>
      </div>
      <div className="row py-1 text-center">
        <div className="col">
          Followers:{" "}
          <span className="font-weight-bold">{props.info.follower}</span>
        </div>
      </div>
      <div className="row py-1 text-center">
        <div className="col">
          Following:{" "}
          <span className="font-weight-bold">{props.info.following}</span>
        </div>
      </div>
      <div className="row py-1 text-center">
        <div className="col">
          Posts: <span className="font-weight-bold">{props.info.posts}</span>
        </div>
      </div>
      <div className="row py-1 text-center">
        <div className="col">
          <span className="font-weight-bold">#{props.info.username}</span> is{" "}
          {props.info.isPrivate ? "private" : "public"},{" "}
          {props.info.isVerified ? "verified" : "not verified"} and{" "}
          {props.info.isBussinessAccount ? "bussiness" : "personal"} account.
        </div>
      </div>
    </section>
  );
};
