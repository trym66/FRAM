function openNav() {
    document.getElementById("mySidenav").style.width = "500px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }



const chatContent = document.getElementById("chatContent"); 
const chatMessage = document.getElementById("chatMessage"); 

// Funksjon for å sende melding
function sendMessage() {
    const message = chatMessage.value.trim(); 
    if (message !== "") {
        appendMessage("You: " + message);  
        chatMessage.value = "";  // 

        // Sender POST-forespørsel til serveren
        fetch("http://localhost:3000/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ prompt: message }),
        })
        .then(response => response.json())
        .then(data => {
            const botReply = data.choices[0].message.content; 
            appendMessage("GPT: " + botReply);  
        })
        .catch(error => {
            console.error("Feil:", error);
            appendMessage("FRAM: Noe gikk galt...");
        });
    }
}


function appendMessage(message) {
    const messageElement = document.createElement("p");
    messageElement.textContent = message;
    chatContent.appendChild(messageElement);  
    chatContent.scrollTop = chatContent.scrollHeight;  
}
