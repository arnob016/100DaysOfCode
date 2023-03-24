input = [70, 75, 80, 94, 180, 182, 72]

for (let pos of input)
    checkspeed(pos);

function checkspeed(value) {

    if (value <= 70){
        console.log('Ok');
        return;
    }

    const point = Math.floor((value-70) / 5);
    if(point == 0) console.log('OK');
    else if (point < 12) console.log('Point: ' + point);
    else console.log('License Suspended');
}