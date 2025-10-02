function returnSq(num) {
    return new Promise(function (resolve){
        resolve(num)
    });
}

function square(num) {
    console.log( num**2)
}

returnSq(2).then(square);



//simplere and shorter


const returnSq_1 = (num) => Promise.resolve(num);
const square_1 = (num) => num**2;

returnSq_1(3).then(square_1).then(console.log);