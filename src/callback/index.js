function sum(n1,n2){
    return n1 + n2
}

function cal(n1,n2,callback){
    return callback(n1,n2)
}

console.log(cal(3,6,sum));

function date(callback){
    console.log(new Date)
    setTimeout(function(){
        let date = new Date
        callback(date) 
    },3000)
}

function printdate (datenow){
    console.log(datenow)
}

date(printdate)