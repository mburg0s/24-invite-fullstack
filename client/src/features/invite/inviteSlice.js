import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios'


export const inviteSlice = createSlice({
  name: 'invite',
  initialState: {
    inviteNotgoing: [],
    inviteGoing:[],
    invite: {},
  },
  reducers: {

    setInvite: (state, action) => {

      state.invite = action.payload
    },


    showNotGoing: (state,action) => {

      state.inviteNotgoing = action.payload
    },
    showGoing: (state,action) => {

      state.inviteGoing = action.payload
    }
  }
});

export const { setInvite,showNotGoing,showGoing} = inviteSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched




export const getInvite = () => dispatch => {

  axios.get('/invite')
  .then(resp => {
      console.log(resp.data, 'data')
      dispatch(setInvite(resp.data))
  })
}

export const getRejectInvite = () => dispatch => {
  axios.get('/notgoing')
  .then(resp => {
    console.log(resp.data, 'reject')
    dispatch(showNotGoing(resp.data))


  })

}

export const addNotGoing = (p) => dispatch => {
  axios.post('/mark-invitee',{...p, isGoing:false} )
  .then (resp =>{
    console.log(resp, 'addNotGoing')
    })
    // getInvite()
    axios.get('/invite')
    .then(resp => {
      console.log(resp.data.user, 'data')
      dispatch(setInvite(resp.data))
})

}

export const addGoing = (p) => dispatch => {
  axios.post('/mark-invitee',{...p, isGoing:true} )
  .then (resp =>{
    console.log(resp, 'addGoing')

})
    // getInvite()
    // getRandomUser()
    axios.get('/invite')
      .then(resp => {
        console.log(resp.data.user, 'data')
        dispatch(setInvite(resp.data))
})

}


export const getGoing = () => (dispatch) => {
  axios.get("/going").then((resp) => {
    console.log(resp.data);
    dispatch(showGoing(resp.data));
  });
  
};


// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.invite.value)`
export const selectNotGoing = state => state.invite.inviteNotgoing;
export const selectGoing = state => state.invite.inviteGoing;
export const selectInvite = state => state.invite.invite;
export default inviteSlice.reducer;
