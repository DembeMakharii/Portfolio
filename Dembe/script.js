// Function to toggle the chat window
function toggleChat() { 
    const chatbotWindow = document.querySelector('.chatbot-window');
    chatbotWindow.style.display = chatbotWindow.style.display === 'block' ? 'none' : 'block';
}

// Function to send a message
function sendMessage() {
    const userInput = document.getElementById('chatbot-input');
    const userMessage = userInput.value.trim();

    if (userMessage === '') return; // Don't send empty messages

    // Display the user's message in the chatbox
    displayMessage(userMessage, 'user');

    // Simulate a chatbot response
    setTimeout(() => {
        const botResponse = getBotResponse(userMessage);
        displayMessage(botResponse, 'bot');
    }, 500); // Simulate a delay for the bot's response

    // Clear the input field
    userInput.value = '';
}

// Function to display a message in the chatbox
function displayMessage(message, sender) {
    const chatbotMessages = document.getElementById('chatbot-messages');

    // Create a new message element
    const messageElement = document.createElement('div');
    messageElement.classList.add('chat-message', sender === 'user' ? 'user-message' : 'bot-message');
    messageElement.textContent = message;

    // Append the message to the chatbox
    chatbotMessages.appendChild(messageElement);

    // Scroll to the bottom of the chatbox
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

// Function to generate a bot response based on user input
function getBotResponse(userMessage) {
    const lowerCaseMessage = userMessage.toLowerCase();

    if (lowerCaseMessage.includes("hello")) {
        return "Hello! How may I assist you today?";
    } else if (lowerCaseMessage.includes("where do you stay")) {
        return "I stay in Pretoria.";
    } else if (lowerCaseMessage.includes("what are your qualifications")) {
        return "I currently hold a postgraduate Diploma in Information Technology.";
    } else {
    
        return "I'm sorry, I don't understand. Can you rephrase that?";
    }
}

// Add event listener for the Enter key
document.getElementById('chatbot-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// Get all certificate links
const certificateLinks = document.querySelectorAll('.certificates-list a');

// Get the certificate details container elements
const certificateTitle = document.getElementById('certificate-title');
const certificateIssuedBy = document.getElementById('certificate-issued-by');
const certificateLink = document.getElementById('certificate-link');

// Add click event listeners to each certificate link
certificateLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent the default link behavior

        // Get the certificate details from the data attributes
        const title = link.textContent;
        const issuedBy = link.getAttribute('data-issued-by');
        const certificateUrl = link.getAttribute('data-certificate-link');

        // Update the certificate details container
        certificateTitle.textContent = title;
        certificateIssuedBy.textContent = `Issued by: ${issuedBy}`;
        certificateLink.href = certificateUrl;

        // Scroll to the certificate details container
        document.getElementById('certificate-details').scrollIntoView({ behavior: 'smooth' });
    });
});