import React, { useEffect} from 'react'
import {  useDispatch, useSelector } from "react-redux";
// import axios from 'axios'
import {
    selectInvite,
    getInvite,
} from "./inviteSlice"
import InviteDetail from './InviteDetail'

export default function InvitePage() {

    const person = useSelector(selectInvite)
    // const person = person1.user
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getInvite())


    }, [])
    // console.log(person.user,'p')
    return (
        <div>
            <InviteDetail person = {person}/>
        </div>
    )
}