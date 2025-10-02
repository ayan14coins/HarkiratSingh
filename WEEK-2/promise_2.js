let a = Date.now();

function ayandas() {
    return new Promise(function(resolve){
        setTimeout(resolve, 1000)
    })
}


ayandas().then(function(){
    console.log("Hello Shimolika")
    let b = Date.now();
    console.log(b-a)
})
