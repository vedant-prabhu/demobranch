window.addEventListener('load', () => {
    // थोड़ी देर बाद फॉर्म दिखाएँ
    setTimeout(() => {
        document.getElementById('loginForm').classList.add('show');
    }, 2000); // 2 सेकंड बाद
});