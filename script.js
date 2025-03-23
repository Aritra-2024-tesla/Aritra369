const text = "Aritra";
let index = 0;
let isDeleting = false;

function typeEffect() {
    const typingElement = document.getElementById("typing");
    
    if (!isDeleting && index < text.length) {
        typingElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 200); // Typing speed
    } else if (isDeleting && index > 0) {
        typingElement.innerHTML = text.substring(0, index - 1);
        index--;
        setTimeout(typeEffect, 100); // Deleting speed
    } else {
        isDeleting = !isDeleting;
        setTimeout(typeEffect, 1200); // Delay before reverse
    }
}

window.onload = typeEffect;