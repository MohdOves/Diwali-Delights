document.addEventListener('DOMContentLoaded', () => {
    const greetingLetters = document.querySelectorAll('#greeting .letter');
    const userName = document.getElementById('userName');
    const languageSelect = document.getElementById('languageSelect');
    const submitBtn = document.getElementById('submitBtn');
    const message = document.getElementById('message');
    const fireworksContainer = document.getElementById('fireworks-container');

    // Animate greeting letters
    greetingLetters.forEach((letter, index) => {
        letter.style.setProperty('--i', index);
    });

    // Create diyas
    createDiyas(20);

    // Create rangoli patterns
    createRangoli(5);

    submitBtn.addEventListener('click', () => {
        if (userName.value && languageSelect.value) {
            showCelebrationMessage(userName.value, languageSelect.value);
            createFireworks(20);
            launchFireworks(10);
        }
    });
});

function createDiyas(count) {
    const container = document.getElementById('diya-container');
    for (let i = 0; i < count; i++) {
        const diya = document.createElement('div');
        diya.classList.add('diya');
        diya.style.left = `${Math.random() * 100}%`;
        diya.style.top = `${Math.random() * 100}%`;
        diya.style.animationDelay = `${Math.random() * 2}s`;
        container.appendChild(diya);
    }
}

function createFireworks(count) {
    const container = document.getElementById('firecrackers-container');
    for (let i = 0; i < count; i++) {
        const firecracker = document.createElement('div');
        firecracker.classList.add('firecracker');
        firecracker.style.left = `${Math.random() * 100}%`;
        firecracker.style.bottom = '0';
        firecracker.style.backgroundColor = getRandomColor();
        firecracker.style.animation = `explode ${1 + Math.random()}s linear`;
        container.appendChild(firecracker);

        // Create sparks
        for (let j = 0; j < 20; j++) {
            const spark = document.createElement('div');
            spark.classList.add('spark');
            spark.style.backgroundColor = firecracker.style.backgroundColor;
            spark.style.left = firecracker.style.left;
            spark.style.bottom = '100vh';
            spark.style.setProperty('--tx', `${(Math.random() - 0.5) * 200}px`);
            spark.style.setProperty('--ty', `${(Math.random() - 0.5) * 200}px`);
            container.appendChild(spark);
        }

        setTimeout(() => {
            firecracker.remove();
        }, 1000);
    }
}

function createRangoli(count) {
    const container = document.getElementById('rangoli-container');
    for (let i = 0; i < count; i++) {
        const rangoli = document.createElement('div');
        rangoli.classList.add('rangoli');
        rangoli.style.left = `${Math.random() * 100}%`;
        rangoli.style.top = `${Math.random() * 100}%`;
        rangoli.style.transform = `scale(${0.5 + Math.random()})`;
        container.appendChild(rangoli);
    }
}

function showCelebrationMessage(name, language) {
    const messages = {
        Hindi: `${name}, आपको दीपावली की हार्दिक शुभकामनाएं! रोशनी का यह त्योहार आपके जीवन में खुशियां लाए।`,
        Marathi: `${name}, दिवाळीच्या हार्दिक शुभेच्छा! प्रकाशाचा हा सण तुमच्या आयुष्यात आनंद घेऊन येवो.`,
        Bengali: `${name}, শুভ দীপাবলি! আলোর এই উৎসব আপনার জীবনে আনন্দ নিয়ে আসুক।`,
        Tamil: `${name}, இனிய தீபாவளி நல்வாழ்த்துக்கள்! ஒளியின் இந்த விழா உங்கள் வாழ்வில் மகிழ்ச்சியைக் கொண்டு வரட்டும்.`,
        Telugu: `${name}, మీకు దీపావళి శుభాకాంక్షలు! వెలుగుల పండుగ మీ జీవితంలో ఆనందాన్ని తీసుకురావాలి.`,
        Gujarati: `${name}, દિવાળીની હાર્દિક શુભેચ્છાઓ! પ્રકાશનો આ તહેવાર તમારા જીવનમાં આનંદ લાવે.`,
        Kannada: `${name}, ದೀಪಾವಳಿಯ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು! ಬೆಳಕಿನ ಈ ಹಬ್ಬವು ನಿಮ್ಮ ಜೀವನದಲ್ಲಿ ಸಂತೋಷವನ್ನು ತರಲಿ.`,
        Malayalam: `${name}, ആശംസകൾ! ഈ ദീപാവലി നിങ്ങളുടെ ജീവിതത്തിൽ സന്തോഷം കൊണ്ടുവരട്ടെ.`,
        Odia: `${name}, ଦୀପାବଳୀର ହାର୍ଦ୍ଦିକ ଶୁଭେଚ୍ଛା! ଆଲୋକର ଏହି ପର୍ବ ଆପଣଙ୍କ ଜୀବନରେ ଆନନ୍ଦ ଆଣୁ।`,
        Punjabi: `${name}, ਦਿਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ! ਰੋਸ਼ਨੀ ਦਾ ਇਹ ਤਿਉਹਾਰ ਤੁਹਾਡੇ ਜੀਵਨ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਲਿਆਵੇ।`,
        English: `${name}, wishing you a very Happy Diwali! May this festival of lights bring joy to your life.`
    };

    const selectedMessage = messages[language] || messages.English;
    message.innerHTML = selectedMessage;
    message.classList.add('show');
}

function getRandomColor() {
    const colors = ['#ff6b6b', '#ffd93d', '#f54088', '#6bcbef', '#4ecdc4'];
    return colors[Math.floor(Math.random() * colors.length)];
}

function launchFireworks(count) {
    const colors = ['#ff6b6b', '#ffd93d', '#f54088', '#6bcbef', '#4ecdc4'];
    
    for (let i = 0; i < count; i++) {
        setTimeout(() => {
            const firework = document.createElement('div');
            firework.classList.add('firework');
            firework.style.left = `${Math.random() * 100}%`;
            firework.style.bottom = '0';
            firework.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            
            const beforeAfter = document.createElement('div');
            beforeAfter.style.backgroundColor = firework.style.backgroundColor;
            firework.appendChild(beforeAfter);
            
            fireworksContainer.appendChild(firework);
            
            firework.addEventListener('animationend', () => {
                firework.remove();
            });
        }, i * 200);
    }
}
