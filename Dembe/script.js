// Preloader
window.addEventListener('load', function() {
    const preloader = document.querySelector('.preloader');
    setTimeout(() => {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }, 1500);
});

// Custom Cursor
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    setTimeout(() => {
        cursorFollower.style.left = e.clientX + 'px';
        cursorFollower.style.top = e.clientY + 'px';
    }, 100);
});

document.querySelectorAll('a, button, input, .project-card, .certificate-item').forEach(element => {
    element.addEventListener('mouseenter', () => {
        cursor.classList.add('active');
        cursorFollower.classList.add('active');
    });
    
    element.addEventListener('mouseleave', () => {
        cursor.classList.remove('active');
        cursorFollower.classList.remove('active');
    });
});

// Theme Toggle
const themeSwitch = document.getElementById('theme-switch');
const body = document.body;

// Check for saved theme preference or use preferred color scheme
const savedTheme = localStorage.getItem('theme') || 
                   (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

if (savedTheme === 'dark') {
    body.classList.add('dark-theme');
    themeSwitch.checked = true;
}

themeSwitch.addEventListener('change', function() {
    if (this.checked) {
        body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark-theme');
        localStorage.setItem('theme', 'light');
    }
});

// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    mirror: false
});

// Initialize Typed.js for typing animation
document.addEventListener('DOMContentLoaded', function() {
    const typed = new Typed('#typed', {
        strings: ['Software Developer', 'Software Engineer', 'Data Engineer Enthusiast'],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true,
        showCursor: true,
        cursorChar: '|'
    });
});

// Initialize Glider.js for certificates carousel
document.addEventListener('DOMContentLoaded', function() {
    new Glider(document.querySelector('.glider'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        dots: '.dots',
        arrows: {
            prev: '.glider-prev',
            next: '.glider-next'
        },
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            }
        ]
    });
});

// Initialize Particles.js for background effect
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('particles-js')) {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: "#007bff"
                },
                shape: {
                    type: "circle",
                    stroke: {
                        width: 0,
                        color: "#000000"
                    },
                    polygon: {
                        nb_sides: 5
                    }
                },
                opacity: {
                    value: 0.5,
                    random: false,
                    anim: {
                        enable: false,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: false,
                        speed: 40,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#007bff",
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: "none",
                    random: false,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: true,
                        mode: "grab"
                    },
                    onclick: {
                        enable: true,
                        mode: "push"
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 140,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    bubble: {
                        distance: 400,
                        size: 40,
                        duration: 2,
                        opacity: 8,
                        speed: 3
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4
                    },
                    push: {
                        particles_nb: 4
                    },
                    remove: {
                        particles_nb: 2
                    }
                }
            },
            retina_detect: true
        });
    }
});

// Back to Top Button
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('active');
    } else {
        backToTopButton.classList.remove('active');
    }
});

backToTopButton.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Smooth scrolling for all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Chatbot functionality
function toggleChat() {
    const chatbotWindow = document.querySelector('.chatbot-window');
    chatbotWindow.classList.toggle('active');
    document.querySelector('.notification-badge').style.display = 'none';
}

function handleKeyPress(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
}

function sendMessage() {
    const userInput = document.getElementById('chatbot-input');
    const userMessage = userInput.value.trim();

    if (userMessage === '') return;

    displayMessage(userMessage, 'user');

    // Simulate bot typing
    setTimeout(() => {
        const botResponse = getBotResponse(userMessage);
        displayMessage(botResponse, 'bot');
    }, 1000);

    userInput.value = '';
}

function displayMessage(message, sender) {
    const chatbotMessages = document.getElementById('chatbot-messages');
    const now = new Date();
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const messageElement = document.createElement('div');
    messageElement.classList.add('chat-message', `${sender}-message`);
    
    messageElement.innerHTML = `
        <div class="message-content">${message}</div>
        <div class="message-time">${timeString}</div>
    `;

    chatbotMessages.appendChild(messageElement);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

function getBotResponse(userMessage) {
    const lowerCaseMessage = userMessage.toLowerCase();

    const responses = {
        'hello': "Hello there! How can I assist you today? 😊",
        'hi': "Hi! What can I do for you?",
        'hey': "Hey! How's it going?",
        'how are you': "I'm just a bot, but I'm functioning perfectly! How about you?",
        'name': "I'm Dembe's portfolio chatbot. Nice to meet you!",
        'who are you': "I'm a virtual assistant here to help you learn more about Dembe's skills and experience.",
        'what can you do': "I can tell you about Dembe's education, skills, projects, and certificates. Try asking me something!",
        'education': "Dembe holds a Postgraduate Diploma in IT from Vaal University of Technology (2024), a Bachelor's Degree in IT (2023), and a National Diploma (2021).",
        'skills': "Dembe has strong technical skills in Python, Java, SQL, .NET, and web development, along with excellent soft skills like communication and teamwork.",
        'projects': "Dembe has created several projects including a Morse Code Translator, Movie Database, and Safety Reporting System. Check out the Projects section for details!",
        'certificates': "Dembe has earned multiple certifications from Microsoft (Azure AI Engineer, Developer Associate), Cisco, IBM, and Fortinet.",
        'contact': "You can reach Dembe via email at dmakhari6@gmail.com or through the contact form on this website.",
        'location': "Dembe is based in Pretoria, South Africa.",
        'experience': "Dembe has experience in software development with expertise in building web applications and solving complex problems.",
        'default': "I'm not sure I understand. Could you ask about Dembe's skills, projects, education, or certificates?"
    };

    for (const [keyword, response] of Object.entries(responses)) {
        if (lowerCaseMessage.includes(keyword)) {
            return response;
        }
    }

    return responses['default'];
}

// Contact Form Submission
document.getElementById('contactForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    const submitBtn = form.querySelector('button[type="submit"]');
    const statusDiv = document.getElementById('formStatus');
    
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    
    try {
        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData
        });
        
        if (response.ok) {
            const result = await response.json();
            if (result.success) {
                statusDiv.innerHTML = '<div class="success">Message sent successfully! Dembe will get back to you soon.</div>';
                form.reset();
            } else {
                statusDiv.innerHTML = '<div class="error">Something went wrong. Please try again later.</div>';
            }
        } else {
            statusDiv.innerHTML = '<div class="error">Failed to send message. Please try again.</div>';
        }
    } catch (error) {
        statusDiv.innerHTML = '<div class="error">Network error. Please check your connection and try again.</div>';
    } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<span>Send Message</span><i class="fas fa-paper-plane"></i>';
        
        setTimeout(() => {
            statusDiv.innerHTML = '';
        }, 5000);
    }
});

// Show welcome message after 5 seconds
setTimeout(() => {
    if (!document.querySelector('.chatbot-window.active')) {
        document.querySelector('.notification-badge').style.display = 'flex';
    }
}, 5000);