//if else,switch case js
partyFunc(12,23)
partyFunc(24,12)
partyFunc(22,22)
partyFunc(2,4)
partyFunc(13,18)


function partyFunc(age,time){
    console.log('Input','age',age,'time',time)
    console.log("Hey There,")
    let guest_Type;

    if(age<=12){
        guest_Type = "Kid"
        console.log(guest_Type,'!')
    }
    else if (age > 12 && age < 20){
        guest_Type = "Teenager"
        console.log(guest_Type,'!')
    }
    else if (age<=50){    
        guest_Type = "Adult"
        console.log(guest_Type,'!')}

    else if (age<80){    
        guest_Type = "Old"
        console.log(guest_Type,'!')}

    if(time >= 6 && time <= 12)
        console.log("Good Morning")

    else if(time >= 12 && time <= 18)
        console.log("Good Afternoon")

    else if(time < 6 || time > 24)
        console.log("Why are you not sleeping")

    else
        console.log("Good Evening")

    if(10<=time<=22){
        switch(guest_Type){
            case "Kid":
                console.log("You can't join the party, take a candy.");
                break;
            case "Adult":
                console.log("You can join the party. Go in.")
            case "Adult":
                console.log("Dear sir,you can join the party. Welcome.")
        }
    }
    else{
        console.log("Sorry partyhouse is closed right now.")
    }
}