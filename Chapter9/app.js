/* console.log("one");
console.log("two");
setTimeout(()=>
{
    console.log("hello");
},1000);
//callBack
console.log("Three");

function sum(a,b)
{
    console.log(a+b);
}
function calculator(a,b,sumCallback)
{
    sumCallback(a,b);
}
calculator(1,2,sum);
const hello=()=>
{
    console.log("hello world!");
}
setTimeout(hello,3000);//3sec
//callback Hell
let age=19;
if(age>=18)
{
    if(age>=60)
    {
        console.log("senior");
    }
    else{
        console.log("middle");
    }
}
else{
    console.log("child");
}
function getData(dataId,getNextData)
{
    setTimeout(()=>
    {
        console.log("data",dataId);
       if(getNextData){ getNextData();}
    },2000)
   
}
getData(1,()=>{getData(2,()=>{
    getData(3,()=>{getData(4)});
;})});

//Promises:
let promises= new Promise((resolve,reject)=>
{
    console.log("I am a Promise");
   //resolve("Success");
   reject("some error");
});
function getData1(dataId,getNextData)
{
   return new Promise((resolve,reject)=>
{
    
    setTimeout(()=>
    {
        //console.log("data",dataId);
        //resolve("success");
        reject("Error")
       if(getNextData){ getNextData();}
    },2000)
})
   
}



//then()
const  getpromise= (()=>{
 return    new Promise((resolve,reject)=>
{
    console.log("I am a Promise");
   //resolve("Success");
   reject("some error");
});   
});
let Promise1=getpromise();
Promise1.then((res)=>
{
    console.log("Promises Fullfilled",res);
});

let Promise2=getpromise();
Promise1.catch((err)=>
{
    console.log("Promises Rejected",err);
});
 

function asyncFunc(){
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>
        {
            console.log("Some data1");
            resolve("Success");
        },2000);
    });
    
};
function asyncFunc2(){
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>
        {
            console.log("Some data2");
            resolve("Success");
        },4000);
    });
    
};
console.log("Fetching data1");
 asyncFunc().then((res)=>
{
   console.log("Fetching data2");
   asyncFunc2().then((res)=>
{
    console.log(res);
}
);
}
);


//Promise Chain
function getData3(dataId,getNextData)
{
   return new Promise((resolve,reject)=>
{
    
    setTimeout(()=>
    {
        console.log("data",dataId);
        resolve("success");
        //reject("Error")
      // if(getNextData){ getNextData();}
    },2000)
}) 
};

getData3(1)
  .then((res)=>
    {
        return getData3(2);
    })
    .then((res)=>
    {
         return getData3(3);
    })
    .then((res)=>
    {
        return getData3(res);
    });

async function hello()
{
    console.log("hello");
}
function api()
{
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>
        {
            console.log("Weather data");
            resolve(2000);
        },2000);
    })
}

async function getWeatherData()
{
    await api();
    await api();
} */
function getData1(dataId,getNextData)
{
   return new Promise((resolve,reject)=>
{
    
    setTimeout(()=>
    {
        console.log("data",dataId);
        resolve("success");
       // reject("Error")
       
    },2000);
});
   
}


/* async function getAllData() {
    await getData1(1);
    await getData1(2);
    await getData1(3);
    await getData1(4);
    await getData1(5);
    
} */

(async function() {
    await getData1(1);
    await getData1(2);
    await getData1(3);
    await getData1(4);
    await getData1(5);
    
})();






