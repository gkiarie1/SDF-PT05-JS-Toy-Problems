function speedDetector(){
    let speed= parseInt(document.getElementById('speed').value) || 0;
    const speedLimit=70;
    const kmPerDemeritPoints=5;
    
    if (speed <= 70) {
        speedometer(speed, 'OK');
    } else {
        const demeritPoints = Math.round((speed - speedLimit) / kmPerDemeritPoints);

        const status = demeritPoints > 12 ?  `License Suspended!\nDemerit points: ${demeritPoints}`: `Demerit points: ${demeritPoints}`;
        speedometer(speed, status, demeritPoints);
}
    function speedometer(speed, status, demeritPoints) {
            const needle = document.getElementById('needle');
            const speedText = document.getElementById('speedValue');
        
            const clampedSpeed = Math.min(Math.max(speed, 0), 180);
            const rotationAngle = (clampedSpeed / 180) * 180 - 90;
        
            needle.style.transform = `translateX(-50%) translateY(-100%) rotate(${rotationAngle}deg)`;
            speedText.textContent = `Speed: ${speed}\nStatus: ${status}`;       
        
                
    }
}
