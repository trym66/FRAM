function openNav() {
    document.getElementById("mySidenav").style.width = "500px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }


// Henter HTML-elementene basert på de riktige ID-ene og klassene
const chatContent = document.getElementById("chatContent"); // Der meldingene vises
const chatMessage = document.getElementById("chatMessage"); // Inputfeltet for brukerens melding

// Funksjon for å sende melding
function sendMessage() {
    const message = chatMessage.value.trim(); // Henter og fjerner unødvendige mellomrom fra meldingen
    if (message !== "") {
        appendMessage("You: " + message);  // Legger til brukerens melding i chatboksen
        chatMessage.value = "";  // Tømmer input-feltet

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
            const botReply = data.choices[0].message.content;  // Få svar fra API
            appendMessage("GPT: " + botReply);  // Legger til GPT sitt svar i chatboksen
        })
        .catch(error => {
            console.error("Feil:", error);
            appendMessage("FRAM: Noe gikk galt...");
        });
    }
}

// Funksjon for å legge til meldinger i chatboksen
function appendMessage(message) {
    const messageElement = document.createElement("p");
    messageElement.textContent = message;
    chatContent.appendChild(messageElement);  // Legger til meldingen i chatboksens innhold
    chatContent.scrollTop = chatContent.scrollHeight;  // Ruller ned for å vise nyeste melding
}
