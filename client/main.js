const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById('fortuneButton')
const deleteBtn = document.getElementById('delete')
const motivateForm = document.getElementById('motivate-form')



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
    axios.get("http://localhost:4000/api/")
        .then(res => {
            console.log(res.data)
    });
};


const postMessage = (e) => {
    e.preventDefault()

    let message = document.getElementById("input-message")

    let newMessage = {
        message: message.value,
        }

    axios.post("http://localhost:4000/api/", newMessage)
        .then(res => {
            let h2 = document.createElement('h2')
            h2.textContent = res.data.message
            document.body.appendChild(h2)
            console.log(res.data)})
}

const deleteMessage = () => {
    
    axios.delete("http://localhost:4000/api/")
    .then(res => console.log(res.data))

}

const putMessage = () => {
    let message = document.getElementById("input-message")
    let messagedUpdated = {
        message: message.value
    }
    axios.put("http://localhost:4000/api/")
    .then((res) =>  {
    alert("Message Updated!")
    console.log(req.data)})
}


complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
motivateForm.addEventListener('submit', postMessage )
deleteBtn.addEventListener('click', deleteMessage)