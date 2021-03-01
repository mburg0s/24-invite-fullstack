import React, { useEffect} from 'react'
import {  useDispatch, useSelector } from "react-redux";
// import axios from 'axios'
import {
    selectInvite,
    getInvite,
    selectGoing,
    selectNotGoing,
} from "./inviteSlice"
import InviteDetail from './InviteDetail'

export default function InvitePage() {

    // refactor to use slice
    // const [person, getPerson] =useState({})
    const person = useSelector(selectInvite)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getInvite())

        // axios.get('/results')
        // .then(resp => {
        //     console.log(resp.data, 'data')
        //     getPerson(resp.data)
        // })
    }, [])


    return (
        <div>
            <InviteDetail person = {person}/>
        </div>
    )
}