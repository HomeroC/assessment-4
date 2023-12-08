const messages = require("./controller")

module.exports = {
    
    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ["A smile is your personal welcome mat.", "A good friendship is often more important than a passionate romance.", "A smooth long journey! Great expectations.", "All your hard work will soon pay off.", "Have a beautiful day."]

        let randomIndex = Math.floor(Math.random() * fortunes.length)

        let randomFortune = fortunes [randomIndex]
        
        res.status(200).send(randomFortune)
    },
    
    postMessage: (req, res) => {
        const {message} = req.body

        let newMessage = {
            message: message
            }
            res.status(200).send(newMessage)
    },

    deleteMessage: (req,res) => {
        //let message = document.getElementById("input-message")
        const {message} = req.body

        let messageArr = [{message: message}]

        messageArr.forEach((index) => {
        messageArr.splice(index, 1)})
        res.status(200).send("Message Deleted!")
  },

    getMessage: (req,res) => {

    },

    putMessage: (req,res) => {

    } 

}