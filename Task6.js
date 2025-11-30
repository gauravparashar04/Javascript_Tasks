const output = document.getElementById("output");


function addtodom(text){
    let li = document.createElement("li");
    li.textContent = text;
    output.appendChild(li);
}
function step1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Step 1 Done");
            addtodom("Step 1 Done");
            resolve("Success");
        },1000);
    })
}

function step2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Step 2 Done");
            addtodom("Step 2 Done");
            resolve("Success");
        },1000);
    })
}


function step3(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Step 3 Done");
            addtodom("Step 3 Done");
            resolve("Success");
        },1000);
    })
}


// using Async And Await for promise in Task 6


async function runstep(){
    await step1();
    await step2();
    await step3();
}
// runstep();


// using then() for promise in task 6

// console.log("step 1 coming...");
// step1().then((res)=>{
//     console.log("step 2 coming...");
//     return step2();
// }).then(()=>{
//     console.log("step 3 coming....");
//     return step3();
// }).then(()=>{
//     console.log("All steps are done...");
// })
