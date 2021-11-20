const config = require('config')
const path = require('path')
const express = require('express');
const app = express();
const WebSocket = require('ws')

const wss = new WebSocket.Server({port: 8888})

let initializeCount = 0;

let persons = {

}

wss.on('connection', ws=>{
    ws.on("message", (value) => {
        let def = JSON.parse(value)
        const prev = persons[def.client]
        initializeCount += def.value
        persons[def.client] = def.value + prev || 0
        console.log(persons, initializeCount)

        if(initializeCount >= 20){
            wss.clients.forEach((client) => {
                client.send(JSON.stringify({status: "redWon"}))
            })
        }
        else if(initializeCount <= -20){
            wss.clients.forEach((client) => {
                client.send(JSON.stringify({status: "greenWon"}))
            })
        }
        def.count = initializeCount
        wss.clients.forEach((client) => {
            client.send(JSON.stringify(def))
        })
    })

    ws.send(JSON.stringify({count: initializeCount}))
})



const PORT = 5000

app.use(express.json({ extended: true }));

if(process.env.NODE_ENV==='production'){
    app.use('/', express.static(path.join(__dirname, 'client', 'build')))

    app.get('*', (req, res)=>{
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

async function  start(){
    try{
        app.listen(PORT, ()=> console.log(`App has been started on ${PORT}`))
    }
    catch (e){
        console.log('Server error', e.message)
        process.exit(1)
    }
}

start()