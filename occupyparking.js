y = 'C...C'
T = 'CC..C'
y[0, 1, 2, 3, 4, 5];
T[0, 1, 2, 3, 4, 5];

const parking =[
    1,2,3,4,5,6,7,8,9,10,
    11,12,13,14,15,16,17,
];

function what(number,array){
    let uh;
    for(let n = 1; n <= array.length; n++){
        if(array[n] == number){
        found = array[n];
            break;
        } else{
            console.log(".");
            }
}
        if(!found){
            console.log("can't be found");
        }
        console.log(found);
        return found;

}
what(3, parking);