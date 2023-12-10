const messages = require("./controller");
const arr = []


module.exports = {
  getCompliment: (req, res) => {
    const compliments = [
      "Gee, you're a smart cookie!",
      "Cool shirt!",
      "Your Javascript skills are stellar.",
    ];

    // choose random compliment
    let randomIndex = Math.floor(Math.random() * compliments.length);
    let randomCompliment = compliments[randomIndex];

    res.status(200).send(randomCompliment);
  },

  getFortune: (req, res) => {
    const fortunes = [
      "A smile is your personal welcome mat.",
      "A good friendship is often more important than a passionate romance.",
      "A smooth long journey! Great expectations.",
      "All your hard work will soon pay off.",
      "Have a beautiful day.",
    ];

    let randomIndex = Math.floor(Math.random() * fortunes.length);

    let randomFortune = fortunes[randomIndex];

    res.status(200).send(randomFortune);
  },

  postMessage: (req, res) => {
    const { message } = req.body;
    const arr = [];

    arr.push(message)
    res.status(200).send(arr);
  },

  deleteMessage: (req, res) => {
    const { message } = req.body;
    const arr = [];

    let filtered = arr.filter((message) => message != message )
    console.log(filtered)
    res.status(200).send(filtered);
  },

  getMessage: (req, res) => {
    res.status(200).send(arr)
  },

  putMessage: (req, res) => {},
};
