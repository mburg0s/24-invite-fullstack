import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios'
// import { useSelector, useDispatch } from "react-redux";



export const inviteSlice = createSlice({
  name: 'invite',
  initialState: {
    going: 0,
    notgoing: 0,
    // inviteGoing: [],
    inviteNotgoing: [],
    inviteGoing:[],
    invite: {},
  },
  reducers: {
    approveInvitee: (state) => {
      
      state.going++

    },
    rejectInvitee: (state) => {
      state.notgoing++
      // console.log(inviteeToBeAdded , state.notgoing, 'notgoing')
      // state. = action.payload

    },
    setInvite: (state, action) => {

      state.invite = action.payload
    },

    // setApprove: (state, action) => {
    //   state.inviteNotgoing = action.payload
    // },

    showNotGoing: (state,action) => {

      state.inviteNotgoing = action.payload
    },
    showGoing: (state,action) => {

      state.inviteGoing = action.payload
    }
  },
});

export const { rejectInvitee, acceptInvitee, setInvite,showNotGoing,saveInvite, approveInvitee, showGoing, setApprove} = inviteSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
// export const incrementAsync = amount => dispatch => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount));
//   }, 1000);
// };


export const getInvite = () => dispatch => {

  axios.get('/invite')
  .then(resp => {
      console.log(resp.data, 'data')
      dispatch(setInvite(resp.data))
      // dispatch()
  })
}

export const getRejectInvite = () => dispatch => {
  axios.get('/notgoing')
  .then(resp => {
    console.log(resp.data, 'reject')
    // dispatch(setApprove(resp.data))
    dispatch(showNotGoing(resp.data))


  })

}

export const addNotGoing = (p) => dispatch => {
  axios.post('/mark-invitee',{...p, isGoing:false} )
  .then (resp =>{
    console.log(resp, 'addNotGoing')
    // dispatch(setInvite()

    // dispatch(showNotGoing(resp.data))
})
// dispatch(setInvite())

}

export const addGoing = (p) => dispatch => {
  axios.post('/mark-invitee',{...p, isGoing:true} )
  // console.log()
  .then (resp =>{
    console.log(resp, 'addGoing')
    // dispatch(showGoing(resp.data))

})

}


// export const getApproveInvite = () => (dispatch) => {
//   axios.get("/going").then((resp) => {
//     console.log(resp.data);
//     dispatch(showGoing(resp.data));
//   });
  
// };

export const getGoing = () => (dispatch) => {
  axios.get("/going").then((resp) => {
    console.log(resp.data);
    dispatch(showGoing(resp.data));
  });
  
};


// app.post('/users', (req, res)=>{
//   const user = req.body
//   users.push({...user, id: users.length + 1})
//   res.json(user)
//   console.log(user, 'name')

// })


// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.invite.value)`
export const countGoing = state => state.invite.going;
export const countNotGoing = state => state.invite.notgoing;
export const selectNotGoing = state => state.invite.inviteNotgoing;
export const selectGoing = state => state.invite.inviteGoing;

export const selectInvite = state => state.invite.invite;

export default inviteSlice.reducer;
