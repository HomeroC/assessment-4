const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById('fortuneButton')


const motivateForm = document.getElementById('motivate-form')
const container = document.getElementById('message-container')
const message = document.getElementById("input-message")


const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};


const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getMessage = () => {
    axios
        .get("http://localhost:4000/api/messages")
        .then(res => {
            console.log(res.data)
    });
};



const postMessage = (event) => {
    event.preventDefault()
    const newMessage = {
        message: message.value,
        }
        
        axios
        .post("http://localhost:4000/api/messages", newMessage)
        .then(res => {
            
            let h2 = document.createElement('h2')
            h2.textContent = message.value
            h2.addEventListener('click', deleteMessage)
            container.appendChild(h2)
            console.log(res.data)
            
        })
}

const deleteMessage = (message) => {
    console.log(message)
    axios
    .delete(`http://localhost:4000/api/messages/${message.id}`)
    .then((res) => {
        container.innerHTML = ''
        console.log(res.data)
    })
}

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)

motivateForm.addEventListener('submit', postMessage)


getMessage()