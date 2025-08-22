let currentStep = 1;
const totalSteps = 6;
let userName = "My Love";


particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 40,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#f06292"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            }
        },
        "opacity": {
            "value": 0.6,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 6,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 2,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#f8bbd0",
            "opacity": 0.4,
            "width": 1.5
        },
        "move": {
            "enable": true,
            "speed": 1.5,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": true,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "grab"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 160,
                "line_linked": {
                    "opacity": 1
                }
            },
            "push": {
                "particles_nb": 6
            }
        }
    },
    "retina_detect": true
});

document.addEventListener('DOMContentLoaded', function() {
    showStep(currentStep);
    createPetals();
    const heartMessage = document.getElementById('heartMessage');
    document.getElementById('interactiveHeart').addEventListener('click', function() {
        setTimeout(() => {
            heartMessage.classList.add('show');
        }, 500);
    });

    setCountdown();
});

function showStep(step) {
    document.querySelectorAll('.step').forEach(el => {
        el.classList.remove('active');
    });

    const currentStepEl = document.getElementById(`step${step}`);
    currentStepEl.classList.add('active');

    const progressPercentage = ((step - 1) / (totalSteps - 1)) * 100;
    gsap.to("#progressBar", {
        width: `${progressPercentage}%`,
        duration: 1,
        ease: "power2.out"
    });
    switch (step) {
        case 1:
            gsap.from("#envelope", {
                y: 100,
                opacity: 0,
                duration: 1,
                ease: "back.out(1.7)"
            });
            break;
        case 2:
            gsap.from(".name-input", {
                scale: 0.5,
                opacity: 0,
                duration: 0.8,
                ease: "elastic.out(1, 0.5)"
            });
            break;
        case 3:
            gsap.from("#interactiveHeart", {
                scale: 0.5,
                rotation: 180,
                duration: 1,
                ease: "elastic.out(1, 0.5)"
            });
            document.getElementById('heartName').textContent = userName;
            break;
        case 4:
            typeMessage();
            gsap.from(".photo-frame", {
                y: 50,
                rotation: -10,
                opacity: 0,
                duration: 1,
                ease: "back.out(1.7)"
            });
            break;
        case 5:
            gsap.from(".polaroid", {
                y: 100,
                opacity: 0,
                stagger: 0.2,
                duration: 1,
                ease: "back.out(1.7)"
            });
            break;
        case 6:
            createFireworks();
            gsap.from(".heart", {
                scale: 0,
                duration: 1.5,
                ease: "elastic.out(1, 0.5)"
            });
            break;
    }
}

function nextStep() {
    if (currentStep < totalSteps) {
        currentStep++;
        showStep(currentStep);

        if (currentStep === 2) {
            document.getElementById('envelope').classList.add('open');
        }
    }
}

function saveName() {
    const nameInput = document.getElementById('nameInput').value.trim();
    if (nameInput) {
        userName = nameInput;
        document.getElementById('displayName').textContent = userName;
        document.getElementById('finalName').textContent = userName;
        document.getElementById('heartName').textContent = userName;
        nextStep();

        gsap.to(".name-input", {
            backgroundColor: "#e8f5e9",
            borderColor: "#81c784",
            duration: 0.5,
            yoyo: true,
            repeat: 1
        });
    } else {
        gsap.to(".name-input", {
            backgroundColor: "#ffebee",
            borderColor: "#e53935",
            duration: 0.5,
            yoyo: true,
            repeat: 1
        });
        alert("Please enter your beautiful name to continue");
    }
}

function createHearts() {
    const container = document.getElementById('floatingHearts');
    const colors = ['#ff4081', '#f06292', '#f8bbd0', '#d81b60', '#ff80ab'];

    for (let i = 0; i < 25; i++) {
        const heart = document.createElement('div');
        heart.classList.add('floating-heart');
        heart.innerHTML = '❤';
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.color = colors[Math.floor(Math.random() * colors.length)];
        heart.style.animationDuration = `${3 + Math.random() * 3}s`;
        heart.style.fontSize = `${20 + Math.random() * 25}px`;
        heart.style.top = `${60 + Math.random() * 30}%`;

        container.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 4000);
    }

    gsap.to("#interactiveHeart", {
        scale: 1.3,
        duration: 0.3,
        yoyo: true,
        repeat: 1
    });
}

function createPetals() {
    const container = document.getElementById('petalsContainer');
    const petalColors = ['#ffcdd2', '#f8bbd0', '#fce4ec', '#f48fb1'];

    for (let i = 0; i < 15; i++) {
        const petal = document.createElement('div');
        petal.classList.add('petal');

        const petalType = Math.floor(Math.random() * 3);
        let petalShape;
        switch (petalType) {
            case 0:
                petalShape = "M50,0 C60,15 60,30 50,45 C40,30 40,15 50,0";
                break;
            case 1:
                petalShape = "M50,0 C70,20 70,40 50,50 C30,40 30,20 50,0";
                break;
            case 2:
                petalShape = "M50,0 C55,10 55,25 50,35 C45,25 45,10 50,0";
                break;
        }

        petal.style.width = `${10 + Math.random() * 20}px`;
        petal.style.height = `${10 + Math.random() * 20}px`;
        petal.style.left = `${Math.random() * 100}%`;
        petal.style.top = `-20px`;
        petal.style.fill = petalColors[Math.floor(Math.random() * petalColors.length)];
        petal.style.opacity = 0.7 + Math.random() * 0.3;

        petal.innerHTML = `
            <svg viewBox="0 0 100 50" width="100%" height="100%">
                <path d="${petalShape}" fill="${petalColors[Math.floor(Math.random() * petalColors.length)]}" />
            </svg>
        `;

        container.appendChild(petal);

        const duration = 10 + Math.random() * 20;
        const delay = Math.random() * 15;
        const sway = 50 + Math.random() * 100;

        gsap.to(petal, {
            y: window.innerHeight + 50,
            x: `+=${sway}`,
            rotation: 360,
            duration: duration,
            delay: delay,
            ease: "none",
            onComplete: () => {
                petal.style.top = `-20px`;
                petal.style.left = `${Math.random() * 100}%`;

                gsap.to(petal, {
                    y: window.innerHeight + 50,
                    x: `+=${sway}`,
                    rotation: 360,
                    duration: duration,
                    ease: "none",
                    onComplete: () => {
                        petal.remove();
                    }
                });
            }
        });
    }
}

function typeMessage() {
    const messages = [
        `Dear ${userName},`,
        "On your special day, I want you to know...",
        "You are the most amazing person I've ever met.",
        "Your smile brightens my darkest days.",
        "Your laugh is my favorite sound in the world.",
        "Your love gives me strength and happiness.",
        "I'm so grateful to have you in my life.",
        "May this year bring you all the joy you deserve.",
        "You deserve the world and more.",
        "Happy Birthday, my love! ❤"
    ];

    const typingText = document.getElementById('typingText');
    let messageIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function type() {
        const currentMessage = messages[messageIndex];

        if (isDeleting) {
            typingText.innerHTML = currentMessage.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typingText.innerHTML = currentMessage.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }

        if (!isDeleting && charIndex === currentMessage.length) {
            isDeleting = true;
            typingSpeed = 1500;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            messageIndex = (messageIndex + 1) % messages.length;
            typingSpeed = 500;
        }

        setTimeout(type, typingSpeed);
    }

    setTimeout(() => {
        document.getElementById('typedMessage').classList.add('show');
        type();
    }, 500);
}

function createFireworks() {
    for (let i = 0; i < 8; i++) {
        setTimeout(() => {
            createFirework();
        }, i * 800);
    }

    setInterval(() => {
        if (Math.random() > 0.7) {
            createFirework();
        }
    }, 2000);
}

function createFirework() {
    const colors = ['#ff4081', '#f06292', '#f8bbd0', '#d81b60', '#ff80ab', '#ffcdd2'];

    const firework = document.createElement('div');
    firework.classList.add('firework');
    firework.style.color = colors[Math.floor(Math.random() * colors.length)];
    firework.style.setProperty('--x', `${Math.random() * window.innerWidth}px`);
    firework.style.setProperty('--y', `${Math.random() * window.innerHeight * 0.8}px`);
    firework.style.setProperty('--x-end', `${(Math.random() - 0.5) * 20}px`);
    firework.style.setProperty('--y-end', `${(Math.random() - 0.5) * 20}px`);

    document.body.appendChild(firework);

    setTimeout(() => {
        for (let i = 0; i < 30; i++) {
            const particle = document.createElement('div');
            particle.classList.add('firework-particle');
            particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            particle.style.left = firework.style.getPropertyValue('--x');
            particle.style.top = firework.style.getPropertyValue('--y');
            particle.style.setProperty('--tx', `${Math.cos(i * 0.2) * 100}px`);
            particle.style.setProperty('--ty', `${Math.sin(i * 0.2) * 100}px`);

            document.body.appendChild(particle);

            setTimeout(() => {
                particle.remove();
            }, 1000);
        }

        firework.remove();
    }, 1000);
}

function setCountdown() {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 1);

    function updateCountdown() {
        const now = new Date();
        const diff = targetDate - now;

        if (diff <= 0) {
            document.getElementById('countdown').innerHTML = "<span>Happy Birthday!</span>";
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = days.toString().padStart(2, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
}