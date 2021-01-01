const user = {
    name: "Qasim Asad",
    age: "25",
    city: "san francisco",
    lastActivity: new Date().getTime()
}

const inactiveFirstStage = () => {
    console.log("User has been inactive for the past 1-2 minutes");
}

const inactiveSecondStage = () => {
    console.log("User has been inactive for the past 3-4 minutes");
}

const inactiveThirdStage = () => {
    console.log("User has been inactive for the past 5-6 minutes");
}


// this is the main method that acts like a worker and runs every 1 minute
setInterval(function(){
    // please write your code here
    const cTime = Math.floor(new Date().getTime()/ 60000) // in minutes
    const ltime = Math.floor(lastActivity / 60000) // in minutes
    {/*
        times up
        here, I think, I would have used if/else or switch/case,
        compared the cTime with lTime and check the difference,
        and call the inactive functions accordingly.
    */}
}, 1000);