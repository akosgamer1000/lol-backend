import express from "express";
import cors from 'cors';
import  fs  from 'node:fs';
const app= express();
app.use(express.json())
app.use(cors())

app.get("/kerdesek",async(req,res)=>{
 
  fs.readFile('questionsandanswers.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    res.send(data)
  });
});



app.listen(4000)

