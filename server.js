const express=require('express') //express import

const app=express()

const http=require('http').createServer(app) // server created

const PORT=process.env.PORT||3000

http.listen(PORT,()=>{
    console.log(`Server starting .. ${PORT}`)  // listen port
})

app.use(express.static(__dirname+ '/public')) //middle ware

app.get('/',(req , res)=>{
    res.sendFile(__dirname+ '/index.html') // route page
})