import React, {useEffect} from "react";

import People from "./People";
import {  useSelector, useDispatch } from "react-redux";
import {
  getGoing,
  selectGoing,
} from "./inviteSlice";


export default function GoingPage() {
  const person = useSelector(selectGoing);
  const dispatch = useDispatch()


  console.log(person, "not");


  useEffect(() => {
    
    dispatch(getGoing())
  }, []);

  return (
    <div className="notgoingCon">
      <h1>Going </h1>
      <div className="peopleMainDiv">
        <div className="peopleDiv">
          {person.map(person => <People person={person.person} />)}
        </div>
      </div>
    </div>
  );
}
