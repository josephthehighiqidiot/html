let img;
let timesClicked = 0;
let counter;
let overlay67 = document.getElementById('67');
overlay67.style.display = 'none';
document.getElementById("button").onclick = function() {
    if (document.body.contains(img))
    {
        document.body.removeChild(img);
    }
    else
    {
        counter = document.createElement('p');
        document.body.appendChild(counter)
    }
    if (timesClicked == 67)
    {
        document.body.style.overflow = 'hidden';
        overlay67.style.display = 'flex';
    }
    img = document.createElement('img');
    // pick a random integer 0..5 and use it in the filename
    img.src = `image${Math.floor(Math.random() * 6)}.webp`;
    img.style.opacity = '0';
    document.body.appendChild(img);
    
    // Trigger fade-in animation
    setTimeout(() => {
        img.style.transition = 'opacity 1s ease-in';
        img.style.opacity = '1';
    }, 2);
    timesClicked += 1;
    counter.textContent = `Button clicked: ${timesClicked} times`;
    
    
    
};