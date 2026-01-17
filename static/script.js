const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');

let particles = [];
let mouseX = 0;
let mouseY = 0;

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

class Particle {
    constructor() {
        this.reset();
    }

    reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.5 + 0.2;
        this.color = `rgba(0, 255, 255, ${this.opacity})`;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > canvas.width) {
            this.speedX *= -1;
        }
        if (this.y < 0 || this.y > canvas.height) {
            this.speedY *= -1;
        }

        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 100) {
            const force = (100 - distance) / 100;
            this.x -= dx * force * 0.02;
            this.y -= dy * force * 0.02;
        }
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}

function initParticles() {
    particles = [];
    const particleCount = Math.floor((canvas.width * canvas.height) / 15000);
    
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
}

function connectParticles() {
    const maxDistance = 150;

    for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < maxDistance) {
                const opacity = (1 - distance / maxDistance) * 0.3;
                ctx.beginPath();
                ctx.strokeStyle = `rgba(0, 255, 255, ${opacity})`;
                ctx.lineWidth = 0.5;
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.stroke();
            }
        }
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(particle => {
        particle.update();
        particle.draw();
    });

    connectParticles();

    requestAnimationFrame(animate);
}

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

initParticles();
animate();

window.addEventListener('resize', () => {
    resizeCanvas();
    initParticles();
});

document.addEventListener('DOMContentLoaded', () => {
    const nameElement = document.querySelector('.name');
    const signatureText = document.querySelector('.signature-text');
    
    nameElement.addEventListener('mouseenter', () => {
        nameElement.style.textShadow = '0 0 30px rgba(0, 255, 255, 0.8)';
    });
    
    nameElement.addEventListener('mouseleave', () => {
        nameElement.style.textShadow = 'none';
    });

    const avatarContainer = document.querySelector('.avatar-container');
    
    avatarContainer.addEventListener('click', () => {
        avatarContainer.style.animation = 'none';
        avatarContainer.offsetHeight;
        avatarContainer.style.animation = 'pulse 0.5s ease-in-out';
        
        setTimeout(() => {
            avatarContainer.style.animation = 'none';
        }, 500);
    });

    const navItems = document.querySelectorAll('.nav-item');
    const pageSections = document.querySelectorAll('.page-section');
    
    navItems.forEach(item => {
        const navLink = item.querySelector('.nav-link');
        
        navLink.addEventListener('click', (e) => {
            e.preventDefault();
            
            navItems.forEach(navItem => {
                navItem.classList.remove('active');
            });
            
            item.classList.add('active');
            
            const targetId = navLink.getAttribute('href').substring(1);
            
            pageSections.forEach(section => {
                section.classList.remove('active');
            });
            
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add('active');
            }
        });

        navLink.addEventListener('mouseenter', () => {
            const navIcon = navLink.querySelector('.nav-icon');
            navIcon.style.transform = 'scale(1.3) rotate(10deg)';
        });

        navLink.addEventListener('mouseleave', () => {
            const navIcon = navLink.querySelector('.nav-icon');
            if (!item.classList.contains('active')) {
                navIcon.style.transform = 'scale(1) rotate(0deg)';
            } else {
                navIcon.style.transform = 'scale(1.2) rotate(0deg)';
            }
        });
    });
});