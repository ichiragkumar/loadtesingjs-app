import autocannon from "autocannon"



const url = 'http://localhost:3000/';
const duration = 30;


const instance = autocannon({
    url, 
    duration
}, (err, result) =>{
    if(err){
        console.error("Error is", err)
    }else{
        console.log("Result", result.requests.total)
        console.log("Result", result.duration)
    }
})


autocannon.track(instance)

