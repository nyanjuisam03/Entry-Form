const express=require("express")
const mysql=require("mysql")
const cors =require("cors")
const app =express()

const db=mysql.createConnection({
  host:'localhost',
  user: 'root',
  password:"neon2003#",
  database:"form_database"
   
})

app.use(express.json())
app.use(cors())
app.get("/details",(req,res)=>{
    const a="SELECT * FROM form"
    db.query(a,(err,data)=>{
        if (err) throw err;
        res.send(data)
        
    })
})


app.post("/details",(req,res)=>{
    const b="INSERT INTO form(`FullName`,`Age` ,`Gender` ,`PhoneNo`) VALUES (?)"
    const values=[
        req.body.FullName,
        req.body.Age,
        req.body.Gender,
        req.body.PhoneNo
    ]

    db.query(b,[values],(err,data)=>{
        if(err) throw err;
        res.send(data)
    })
})


app.delete("/details/:id",(req,res)=>{
    const id=req.params.id;
    const c="DELETE FROM form WHERE id = ? "

    db.query(c,[id],(err,data)=>{
        if(err) throw err;
        res.send(data)
    })
})


app.listen(2000,()=>{
    console.log('server 2000 is running')
})