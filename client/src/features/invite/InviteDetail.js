import React from "react";
import {useDispatch } from "react-redux";
import {
  addNotGoing,
  addGoing,
} from "./inviteSlice";
import { Link } from "react-router-dom";
import People from "./People";

export default function InviteDetail({ person }) {
  const dispatch = useDispatch();


  return (
    <div className="inviteMain">
      <div className="inviteCounter">
        <Link to={`/going`} className="btnGoing">
          <p>Going: {person.countGoing} </p>
        </Link>
        <Link to={`/not-going`} className="btnNotGoing">
          <p>Not Going: {person.countNotGoing} </p>
        </Link>
      </div>
      <div className="inviteMainContainer">
        <People person={person} />

        <div className="inviteButton">
          <button
            className="inviteReject"
            onClick={() => {
              dispatch(addNotGoing({ person }));
            }}
          >
            x
          </button>
          <button
            className="inviteAccept"
            onClick={() => {
              dispatch(addGoing({ person }));
            }}
          >
            ✓
          </button>
        </div>
      </div>
    </div>
  );
}
