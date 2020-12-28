let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const api ='https://rickandmortyapi.com/api/character/'

function fetchdata(url, callback){
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET',url,true)
    xhttp.onreadystatechange = function(){
        if(xhttp.readyState == 4 ){
            if(xhttp.status == 200){
            callback(null , JSON.parse(xhttp.responseText))
        }else{
            const error = new Error('error'+ url)
            return callback(error, null)
        }
    }
}
    xhttp.send()
}


fetchdata(api,function (error1, data1){
    if(error1) return console.error(error1)
    fetchdata(api + data1.results[0].id, function(error2,data2){
        if (error2) return console.error(error2)
        fetchdata(data2.origin.url, function(error3 , data3){
            if (error3) return console.error(error3)
            console.log(data1.info.count)
            console.log(data2.name)
            console.log(data3.dimension)
        })
    })
})