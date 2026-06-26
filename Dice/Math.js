
let game = document.querySelector("#Dice_img")
    

let start = () => {
    let dice = Math.floor(Math.random() * 6) + 1;
    game.innerHTML = '';
    console.log(dice);

    if(dice == 1) {   
        game.style.backgroundImage = "url(dice1.jpeg)";
        return false;
    }
    else if(dice == 2) {
        game.style.backgroundImage = "url(dice2.jpeg)";
        return false;    }
    else if(dice == 3) {
        game.style.backgroundImage = "url(dice3.jpeg)";
        return false; 
    }
    else if(dice == 4) {
        game.style.backgroundImage = "url(dice4.jpeg)";
        return false; 
    }
    else if(dice == 5) {
        game.style.backgroundImage = "url(dice5.jpeg)";
        return false; 
    }
    else if(dice == 6) {
        game.style.backgroundImage = "url(dice6.jpeg)";
        return false; 
    }
}

const canvas = document.getElementById('denseStarsCanvas');
        const ctx = canvas.getContext('2d');

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // माउस की पोजीशन और अट्रैक्शन रेंज
        const mouse = { x: null, y: null, radius: 180 };
        window.addEventListener('mousemove', (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        });
        window.addEventListener('mouseout', () => {
            mouse.x = null;
            mouse.y = null;
        });

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 1.5 + 0.3; // बारीक डॉट्स
                this.speedX = (Math.random() - 0.5) * 0.4; // धीमी और स्मूथ स्पीड
                this.speedY = (Math.random() - 0.5) * 0.3;
                
                // इमेज वाले नियॉन ब्लू, लाइट ग्रीन और व्हाइट डॉट्स का मिक्स
                let rand = Math.random();
                if (rand < 0.5) {
                    this.color = 'rgba(0, 255, 242, ' + (Math.random() * 0.7 + 0.3) + ')'; // सयान
                } else if (rand < 0.8) {
                    this.color = 'rgba(52, 211, 153, ' + (Math.random() * 0.6 + 0.2) + ')'; // लाइट ग्रीन
                } else {
                    this.color = 'rgba(255, 255, 255, ' + (Math.random() * 0.8 + 0.2) + ')'; // प्योर व्हाइट स्टार्स
                }
                
                this.angle = Math.random() * 100;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.fill();
            }

            update() {
                // वेव की तरह तैरता हुआ मोशन (Cosmic Flow)
                this.angle += 0.005;
                this.x += this.speedX + Math.sin(this.angle) * 0.1;
                this.y += this.speedY + Math.cos(this.angle) * 0.1;

                // बाउंड्री रीसेट
                if (this.x < 0) this.x = canvas.width;
                if (this.x > canvas.width) this.x = 0;
                if (this.y < 0) this.y = canvas.height;
                if (this.y > canvas.height) this.y = 0;

                // माउस इंटरैक्शन (कण माउस की तरफ खींचेंगे जैसे इमेज में वेव है)
                if (mouse.x != null && mouse.y != null) {
                    let dx = mouse.x - this.x;
                    let dy = mouse.y - this.y;
                    let distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance < mouse.radius) {
                        let force = (mouse.radius - distance) / mouse.radius;
                        this.x += dx * force * 0.02;
                        this.y += dy * force * 0.02;
                    }
                }
            }
        }

        // डॉट्स की संख्या यहाँ बढ़ाकर 6000 कर दी है (SUPER DENSE)
        const particlesArray = [];
        const numberOfParticles = 6000; 
        
        for (let i = 0; i < numberOfParticles; i++) {
            particlesArray.push(new Particle());
        }

        // एनीमेशन रन करने का लूप
        function animate() {
            // थोड़ा सा ट्रांसपेरेंट ब्लैक पेंट ताकि मोशन ब्लर (Tail Effect) मिले
            ctx.fillStyle = 'rgba(2, 4, 10, 0.2)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            for (let i = 0; i < particlesArray.length; i++) {
                particlesArray[i].update();
                particlesArray[i].draw();
            }
            requestAnimationFrame(animate);
        }
        animate();


