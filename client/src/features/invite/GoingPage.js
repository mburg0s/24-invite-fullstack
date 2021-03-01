import React, {useState, useEffect} from "react";

import People from "./People";
import {  useSelector, useDispatch } from "react-redux";
import {
  getGoing,
  selectGoing,
} from "./inviteSlice";
import axios from 'axios'


export default function GoingPage() {
  const person = useSelector(selectGoing);
  const dispatch = useDispatch()


  // const [person, setApprove] = useState([])
  console.log(person, "not");


  useEffect(() => {
      // axios.get("/going")
      // .then(resp => {
      //   console.log(resp.data, 'approve')
      //   setApprove(resp.data)
      //   // const person = approve
      // })
    
    dispatch(getGoing())
  }, []);

  return (
    // person.map((p)=>(
    <div>
      <h1>Going </h1>
      <div className="peopleMainDiv">
        <div className="peopleDiv">
          {/* <People/> */}
          {/* <li> */}
          {/* <p>{p.first}</p> */}
          {/* </li> */}
          {person.map(person => <People person={person.person} />)}
          {/* <People person={person} /> */}
        </div>
      </div>
    </div>
    // ))
  );
}
