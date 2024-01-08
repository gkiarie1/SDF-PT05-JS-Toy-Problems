function speedDetector(){
    var speed= parseInt(document.getElementById('speed').value) || 0;
    const speedLimit=70;
    const kmPerDemeritPoints=5;
    
     
    if (speed<=70){
    alert("OK");
    }
else{ 
const demeritPoints = Math.round((speed - speedLimit) / kmPerDemeritPoints);

if( demeritPoints>12){
    alert(`License Suspended ! Total demerit points: ${demeritPoints}`);
}else{
    alert(`Demerit points: ${demeritPoints}`)
}
}
}
