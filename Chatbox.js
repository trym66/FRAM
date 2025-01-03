function openNav() {
    document.getElementById("mySidenav").style.width = "500px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }


  const CHATBASE_API_URL = "https://www.chatbase.co/dashboard/schooltest1410/chatbot/n8HI00V7vUYnsRXbv5sr1"; // Chatbase API URL (bytt ut med din spesifikke URL)

async function sendMessage() {
    const userMessage = document.getElementById('chatMessage').value.trim();
    if (userMessage === "") return;

    // Vis brukermeldingen i chatboxen
    addMessage('user', userMessage);

    // Tøm inputfeltet
    document.getElementById('chatMessage').value = '';

    // Send melding til Chatbase API
    try {
        const response = await fetch(CHATBASE_API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                message: userMessage,
                session: "unique-session-id", // Lag en unik sesjons-ID for å holde styr på brukeren
            }),
        });

        const data = await response.json();

        // Sjekk om responsen var vellykket
        if (response.ok) {
            const botReply = data.reply || "Beklager, jeg forstår ikke spørsmålet.";
            addMessage('bot', botReply); // Vis botens svar i chatboks
        } else {
            addMessage('bot', "Beklager, noe gikk galt. Prøv igjen senere.");
        }
    } catch (error) {
        console.error("Error:", error);
        addMessage('bot', "En feil oppstod. Prøv igjen senere.");
    }
}

// Funksjon for å legge til meldinger i chatboks
function addMessage(sender, message) {
    const chatContent = document.getElementById('chatContent');
    const messageDiv = document.createElement('div');
    
    // Legger til CSS-klassen for meldingstyper
    messageDiv.classList.add('message', sender);  // "sender" vil være enten "user" eller "bot"
    
    messageDiv.innerHTML = message; // Setter inn teksten til meldingen
    chatContent.appendChild(messageDiv); // Legger til meldingen i chatboksens innhold
    
    chatContent.scrollTop = chatContent.scrollHeight; // Ruller til bunnen av chatten
}
