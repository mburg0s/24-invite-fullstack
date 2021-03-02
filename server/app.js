const express = require('express')
const app = express()
const axios = require('axios')

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
let notGoing = []
let going = []
// const user ={
//     "first": "Oya",
//     "last": "Nalbantoğlu",
//     "phone": "(248)-159-5176",
//     "email": "oya.nalbantoglu@example.com",
//     "picture": "https://randomuser.me/api/portraits/women/70.jpg",
//       "isGoing": false
//   }



app.get('/invite', (req, res) => {
    axios.get('http://randomuser.me/api/')
    .then(resp =>{
        person = resp.data.results[0]
            console.log(person)
            

        res.json({
            first: person.name.first,
            last: person.name.last,
            phone: person.phone,
            email: person.email,
            picture: person.picture.large,
            countGoing: going.length,
            countNotGoing: notGoing.length
        })
    })
})

app.get('/going', (req, res)=> {
    res.json(going)
    console.log(going, 'going')


})

app.get('/notgoing', (req, res)=> {
            res.json(notGoing)
            console.log(notGoing, 'notgoing1')

})


app.post('/mark-invitee', (req, res)=>{
    const person = req.body
    person.isGoing ? going.push(person) : notGoing.push(person)
    console.log(person,'mark')


})




app.listen(3001, (req, res) => {
    console.log('listening on port 3001')
})

