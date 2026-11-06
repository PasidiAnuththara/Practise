// console.log("Hi");

//================var==================//

// {
//     var customerName = "Pasidi";
//     let address = "Negombo";
// }

// console.log(customerName);
// console.log(address);


//==============let==================//

// let NumberArray = [10,20,30,40];
// console.log(NumberArray);

// NumberArray = "60";
// console.log(NumberArray);

//===================const===================//

// const NumberArray = [10,20,30,40];
// console.log(NumberArray);

// NumberArray = "Hello";
// console.log(NumberArray);

// const number = [15,45,23,67,11,47,57,100,99];
// console.log(number);

// console.log(number[3]);

// //======push to array=====//
// number.push(90);
// console.log(number);


// //=======pop the array===============//
// number.pop();
// console.log(number);

// //=========Riverse array===================//
// console.log(number.toReversed());
// console.log(number);

// //==========sorted=================//
// console.log(number.toSorted());

// //=========length============//
// console.log(number.length);

// //===========unshift============//
// number.unshift(500);
// console.log(number.length);

// number.shift();
// console.log(number)
// console.log(number.indexOf(100));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

//========Step 01==========//
// function getsum(num1,num2){
//     return num1+num2;

// }

// let getsum=function(num1,num2){
//     return num1+num2;
// }

// let getsum = (num1,num2)=>{
//     {return num1+num2};
// }

// let getsum=num1 =>{
//     return num1;
// }

// let getsum=num1=>num1;

// console.log(getsum(10,20));



const number = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

function displayreplacement() {
    let oldnumber = Number(document.getElementById("oldnumber").value);
    let newnumber = Number(document.getElementById("newnumber").value);

    let index = number.indexOf(Number(oldnumber));

    number[index] = newnumber;

    console.log(number);

}

