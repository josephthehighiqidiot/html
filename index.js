let img;
let timesClicked = 0;
let counter;
let overlay67 = document.getElementById('67');
let counterdiv = document.getElementById('counterdiv');
let alarmSound = document.getElementById('alarm');
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function wait(time) {
    console.log("Start waiting...");
    await sleep(time);  // Waits for 3 seconds
    console.log(`Waited ${time} miliseconds!`);
}
overlay67.style.display = 'none';
document.getElementById("button").onclick = function() {
    if (document.body.contains(img))
    {
        document.body.removeChild(img);
    }
    else
    {
        // create a <p> correctly and append only if counterdiv exists
        counter = document.createElement('p');
        if (counterdiv) counterdiv.appendChild(counter);
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
    if (counter) counter.textContent = `Button clicked: ${timesClicked} times`;
        if (timesClicked == 67)
    {
        document.body.counter.style.p.color = 'red';
        wait(1800);
        alarmSound.play('alarm.mp3');
        document.body.style.overflow = 'hidden';
        overlay67.style.display = 'flex';
    }
    
    
    
};