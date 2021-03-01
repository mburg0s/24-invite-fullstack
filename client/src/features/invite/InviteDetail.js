import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { countGoing, countNotGoing, approveInvitee,rejectInvitee, addNotGoing,addGoing,
    selectGoing,
    selectNotGoing,
} from "./inviteSlice";
import {Link} from "react-router-dom";
import People from "./People";

export default function InviteDetail({person}) {
  const dispatch = useDispatch()  
  const going = useSelector(countGoing);
  const notgoing = useSelector(countNotGoing);
// const going = useSelector(selectGoing);
// const notgoing = useSelector(selectNotGoing);


  function reject() {
    dispatch(rejectInvitee())
    dispatch(addNotGoing({person}))
      
  }
  function approve(){
    dispatch(approveInvitee())
    dispatch(addGoing({person}))
  
  }

  return (
    <div>
      <div className="inviteCounter">
        <Link to={`/going`} className = "btnGoing"> 
            <p>Going: {going} </p>

        </Link>
        <Link to={`/not-going`} className = "btnNotGoing">  
            <p>Not Going: {notgoing} </p>

        </Link>    
      </div>
      <div className="inviteMainContainer">
          <People  person = {person} /> 
        {/* <div className="invitePicContainer">
          <img src={person.picture} alt={person.first} className="invitePic" />
        </div>
        <div className="inviteInfo">
          <span className="inviteSpan">
            {" "}
            <strong>Name:</strong> {person.first} {person.last}{" "}
          </span>
          <span className="inviteSpan">
            {" "}
            <strong>Phone:</strong> {person.phone}{" "}
          </span>
          <span className="inviteSpan">
            {" "}
            <strong>Email:</strong> {person.email}{" "}
          </span>
        </div> */}
        <div className="inviteButton">
          <button className="inviteReject" onClick={()=> reject()}>x</button>
          <button className="inviteAccept" onClick={() => {approve()}}>✓</button>
        </div>
      </div>
    </div>
  );
}
