p = '5'
y = 'C...C'
T = 'CC..C'

//put thr functions that poop out the outputs
function thing(p, y, T) {
    let match = 0;
    for (let n = 0; n < p; n++){
        if(y[n]=== "C" && T[n]==="C"){
            match++
        }
    }
    console.log(match);
}
