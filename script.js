/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map(function(e,i,l){
    if(e.profession==="developer"){
      console.log(e);
      
    }
  })
  
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach(function(e){
    if(e.profession==="developer"){
      console.log(e);
    }
  })
  
}

function addData() {
  //Write your code here, just console.log
  let obj={id:4,name:"susan",age:"20",profession:"intern"};
  arr.push(obj);
  console.log(obj);
}

function removeAdmin() {
  //Write your code here, just console.log
  let index=-1;
  for(let a =0;a<arr.length;a++){
    if(arr[a].profession==="admin"){
      index=a;
      break;
    }
  }
  if(index!=-1){
    arr.splice(index,1);
  }
  console.log(arr);
}

function concatenateArray() {
  let arr2 = [
    { id: 4, name: "Deepak", age: "24", profession: "developer" },
    { id: 5, name: "dev", age: "25", profession: "teacher" },
    { id: 6, name: "Pawan", age: "16", profession: "intern" }
  ];
  const result = arr.concat(arr2);
  console.log(result);
}
