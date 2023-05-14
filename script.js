
// 1-Print only Number that it should be print only integer. 
// “ const str=["1","3",52, "Subhan"] “
function filter(){
let arr = [1, "asad", 2, 3];

let numbers = arr.filter(item => typeof(item) === "number");


let strings = arr.filter(item => typeof(item) === "string");

}

// Destructure an array

function Destructure(){

const myNameList=["Hareem","Omer","Maryam"]

const[h,o,m]=["Hareem","Omer","Maryam"]
console.log(h);
console.log(o)
console.log(m)

}


// 3-Split an array into Pairs and if a pair is not full, it will contain the leftover items.
function splitPair(){
let arr=[1,2,3,4,5,6,7,8,9,10];

function splitPair(arr,pair){
  let arr2=[];
let length =arr.length;
  
  for(let i=0;i<=length; i+=pair){
    let a=arr.slice(i,(i+pair));
    arr2.push(a);
   
  }
  return arr2;
  
}
console.log(splitPair(arr,3))

}
// 5-program to check if the string is palindrome or not.

function palindrome(){
let str="noon";
let length=str.length;
let store="";
for(let i=length-1;i>=0;i--){
store+=str[i];
}
console.log(store)
if(str==store){
    console.log("yes the string is palindrome")
}

else{
    console.log("NO, the string is not palindrome")
}
}


// 7-Declaration and Reassignment of Variables.
function Reassignment(){
// let : block level
//  not redeclare
// reassign the value
let a =5;
console.log(a);
a=40;
console.log(a);
//var 
// let : global level
//   redeclare and
// reassign the value

var x=7
console.log(x)
var x=10
console.log(x)
//const
// let : block level
//  not redeclare
// not reassign THE value

const c=20
console.log(c)


}



// 8-Find Minimum and Maximum number value in array.

function max(){


let a=[1,233,3,4,5,6];
let max=0;
for(let i=0;i<a.length;i++){
if(a[i]>max){
  max=a[i];
}
}


  console.log(max)
}

// 9-Print a String in both cases (Lowercase and Uppercase).
function lowerUpper(){
let str="Asad";
console.log(str.toUpperCase())
console.log(str.toLowerCase())

}

//Array methods 

// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

//Array methods 

// 1: slice method :-break the array into pieces

let a=[1,2,3,4,5,6,7];
console.log(a.slice(3,4))
//2 : splice :-Add value at specific location

let b=[1,2,3,4,5,6,7];
//it show deleted value 
console.log(b.splice(2,2,100))
// it will show new array
console.log(b)

// 3: shift :Remove value from first index
   let c=[1,2,3,4,5,6,7];
//   it will show removed element
   console.log(c.shift())
//   it will show new array
   console.log (c)
// 4: unshift: Add value at first index
   let d=[1,2,3,4,5,6,7];
   // it will return the length of new array
   console.log(d.unshift(2))
   //it will return the new array
   console.log(d)
//5. pop :Remove value from end of array
    let e=[1,2,3,4,5,6,7];
    // it will remove last element from an array
    console.log(e.pop())
    //   it will show new array
    console.log(e)
    
//6. push Add value at end of array
    let f=[1,2,3,4,5,6,7];
    // it will show yhe length of new array
    console.log(e.push(999))
    //   it will show new array
    console.log(e)
//7. Reverse:- show value from last to start
 let g=[1,2,3,4,5,6,7];
 console.log(g.reverse());

//8. Join:- join add the array element and convert it into string
 let h=[1,2,3,4,5,6,7];
 let str=h.join("+");
 console.log(str);
//  its type change into string from array(object)
 console.log(typeof(str))
//9. sort:- sort element alphabeticaly
 let i=[1,222,3333,4,5,6,7];

 console.log(i.sort());
//  compare function compare accending order
let compare=(a,b)=>{
    return a-b;
}
 console.log(i.sort(compare));

//10. concat :-concat two array
    let j1=[1,2,3,4,5,6,7];
    let j2=[11,22,33,44,55,66,77];
    // it will show both of array in single array
    console.log(j1.concat(j2))
//11 . toString :-convert into string
    let k=[1,2,3,4,5,6,7];
    console.log(k.toString())

//12 . map :-map is similer to for each but return new array
    let l=[1,2,3,4,5,6,7];
    let newMapArray=i.map((value)=>{
        return value+1;
    })
console.log(newMapArray)
//13 . forEach :-forEach is similer to map but not return new array
    let m=[1,2,3,4,5,6,7];
    let newforArray=i.map((value)=>{
        return value+1;
    })
console.log(newMapArray)
 

   //14 . filter :-filter is use to filter an array
   let n=[1,2,3,4,1,6,1];
   let newFilter= n.filter((value)=>{
        return value =="1"
    })
    console.log(newFilter)
//15 . Reduce :-Reduce 
    let o=[1,2,3,4,1,6,1];
   let newRedr= o.reduce((acc,cur)=>{
        return acc+cur;
    })
    console.log(newRedr)
//16: indexof  
  let p=[1,2,3,4,1,6,1];
  //it will print the index of tghar value 
  console.log(p.indexOf(4))
//17: lastindexof  
  let q=[1,2,3,4,1,6,1];
  //it will print the index of tghar value 
  console.log(q.lastIndexOf(4))

