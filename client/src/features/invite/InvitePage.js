import React, { useEffect} from 'react'
import {  useDispatch, useSelector } from "react-redux";
import {
    selectInvite,
    getInvite,
} from "./inviteSlice"
import InviteDetail from './InviteDetail'

export default function InvitePage() {

    const person = useSelector(selectInvite)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getInvite())


    }, [])
    return (
        <div>
            <InviteDetail person = {person}/>
        </div>
    )
}