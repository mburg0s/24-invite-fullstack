import React from "react";

export default function People({person}) {
    console.log({person}, 'peep')
    

  return (
    <div className="mainPContainer">
        
      {/* <div className="invitePicContainer" style={{ backgroundImage: `url(${item.img.thumb})` }}> */}
      <div className="invitePicContainer">  
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
      </div>
    </div>
  );
}
