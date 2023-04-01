showStars(10);

function showStars(n){
    for (i=1; i<=n; i++){
        let strr = ''
        for(k=1;k<=i;k++)
            strr += '*'
        console.log(strr)
    }
}