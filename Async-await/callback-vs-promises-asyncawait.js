//Async 
function waitFor2SecondsAndThenCallConsoleLog(cb1, cb2){
    setTimeout(()=>{cb1(cb2)}, 2000);
}

const functionToCallAfter1 = (cb) => {

    console.log('function 1 done'); 
    const v = "whatever";

setTimeout(() => {cb(v)}, 2000);
}

const functionToCallAfter2 = (v) => {
    console.log('the last function done', v);
};

//console.log('before');
//waitFor2SecondsAndThenCallConsoleLog(functionToCallAfter1, functionToCallAfter2);

const promiseAsyncFunc1 = () => { 
    return new Promise((resolve, reject) => {
        setTimeout(() => { console.log("function 1 done"); resolve("whatever")},
        2000);
    });
}


const nonAsync = () => { 
    return "whatever";
}


const promiseAsyncFunc2 = (v) => { 
    return new Promise((resolve, reject) => {
        setTimeout(() => { console.log("the last function done", v); resolve()},
        2000);
    });
}

// promiseAsyncFunc1()
// .then(v => { return promiseAsyncFunc2(v); })
// .then(() => { console.log("done"); })

const doWork = async () => {
  var v = await nonAsync();
  await promiseAsyncFunc2(v);
}

doWork();