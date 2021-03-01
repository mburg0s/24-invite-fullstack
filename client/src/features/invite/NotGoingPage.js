import React, { useEffect} from 'react'
// import { useSelector, useDispatch } from "react-redux";

import People from "./People";
import {  useSelector, useDispatch } from "react-redux";
import {
    selectNotGoing,
    getRejectInvite,
//   showNotGoing,
} from "./inviteSlice";

export default function NotGoingPage() {
    const person = useSelector(selectNotGoing)
    const dispatch = useDispatch()

//   const person = useSelector(showNotGoing);
  console.log(person, "not");

//   const dispatch = useDispatch();
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
