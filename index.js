document.getElementById("button").onclick = function() {
    alert("you did it!");
    const img = document.createElement('img');
    img.src = 'image.png';
    img.style.opacity = '0';
    document.body.appendChild(img);
    
    // Trigger fade-in animation
    setTimeout(() => {
        img.style.transition = 'opacity 5s ease-in';
        img.style.opacity = '1';
    }, 10);
};