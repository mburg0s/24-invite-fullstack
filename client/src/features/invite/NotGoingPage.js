import React, { useEffect} from 'react'

import People from "./People";
import {  useSelector, useDispatch } from "react-redux";
import {
    selectNotGoing,
    getRejectInvite,
} from "./inviteSlice";

export default function NotGoingPage() {
    const person = useSelector(selectNotGoing)
    const dispatch = useDispatch()

  console.log(person, "not");

  useEffect(() => {
    dispatch(getRejectInvite())
  }, []);

  return (
    <div className="notgoingCon">
      <h1>Not Going </h1>

      <div className="peopleMainDiv">
        <div className="peopleDiv">
          {person.map(person => <People person={person.person} />)}
        </div>
      </div>
    </div>
  );
}
