// // 1. Converting the calbacks to promises, to conver the callback based operation like (settimeout)
// // u wrap them in side the pormise
// function delay(ms) {
//   // creating the promise
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("done!");
//     }, ms);
//   });
// }

const { use } = require("react");

// // using .then()
// delay(1000).then((message) => console.log(message));

// // 2. fetch data from the pblic api
// fetch("https://dummyjson.com/quotes")
//   .then((res) => {
//     if (res.status === 200) {
//       return res.json();
//     } else {
//       throw new Error(res.status);
//     }
//   })
//   .then((data) => console.log(data))
//   .catch((err) => console.log("Req failed: ", err));

// //3, custom prmise.all
// function customPromiseAll(promises) {
//   return new Promise((resolve, reject) => {
//     const results = [];
//     let resultCount = 0;
//     let failError = false;
//     promises.forEach((promise, index) => {
//       promise
//         .then((result) => {
//           // stope if we already have the error
//           if (failError) {
//             return;
//           }

//           results[index] = result;
//           resultCount++;

//           // if all promises are done we go back
//           if (promises.length === resultCount) {
//             resolve(results);
//           }
//         })
//         .catch((err) => {
//           if (failError) return; // if error exites return
//           failError = true; // falging eroor as treu
//           reject(err);
//           console.log("Errrpr: ", err);
//         });
//     });
//   });
// }

// // 4. fetch retry mechanism
// async function retryApi() {
//   let user;
//   //   run the loop unitl we get the user or somehting unexpected error happens
//   while (true) {
//     try {
//       //doing the
//       const res = fetch("https://some random api");
//       if (res.status === 404) {
//         alert("no such user exits, retrying... ");
//         continue;
//       }

//       if (!res.ok) {
//         throw new Error(res.status);
//       }

//       user = await res.json();
//       break;
//     } catch (error) {
//       throw error;
//     }
//   }
//   return user;
// }

// // 5. function for debounceing
// function debounce(fn, delay) {
//   let timer;
//   return function () {
//     clearTimeout(timer);
//     timer = setTimeout(fn, delay);
//   };
// }

// let debounceCall = debounce(() => console.log("api clicked"), 1000);

// now we can add that "debounceCall" and attach it to some event

// 6. running the concurrent api at once
//for that we will use he promise.all

async function concurrentRequests() {
  try {
    let results = await Promise.all([
      fetch("https://some req 01"),
      fetch("https://some req 02"),
      fetch("https://some req 03"),
    ]);

    //shwoign result here and returnging it
    console.log(results);
    return results;
  } catch (error) {
    console.log("Error happened.");
  }
}
