//const countValue= document.querySelector('#count');
const countValue= document.getElementById('count');


function increment() {
 //get the value from UI
let value = parseInt(countValue.innerText);
//update the value
value=value+1;
//set the value onto UI
countValue.innerText=value;
};

const decrement = () => {   
     //get the value from UI
    let value = parseInt(countValue.innerText);
    //update the value
    value=value-1;
    //set the value onto UI
    countValue.innerText=value;
    
    
};