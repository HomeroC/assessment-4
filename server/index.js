const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const { getCompliment, getFortune, postMessage, deleteMessage, getMessage, putMessage } = require('./controller')


app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);

app.post("/api/messages", postMessage)
app.delete("/api/messages/:id", deleteMessage)
app.get("/api/messages", getMessage)



app.listen(4000, () => console.log("Server running on 4000"));
