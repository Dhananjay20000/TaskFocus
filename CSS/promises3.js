// p =new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let app = "BMS"
//         if(app === "BMS") {
//             resolve("Open BookMyShow");
//         } else {
//             reject(new Error("BMS app not found"));
//         }
//         }, 2000);
//   });

//   p.then((app) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log(`Opened ${app}`);
//             resolve();

//         }, 2000)
//     });
//   })
//   .then(() => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Search for a movie");
//             resolve();
//         }, 2000)
//     });
//   })

//   .then(() => {
//     return new Promise((resolve) =>{
//         setTimeout(() => {
//             console.log("Ticket Booked");
//             resolve();
//         }, 2000)
//     });
//   })
//   .catch((err) => {
//     console.log(" Error:", err.message);
//   })

//   .finally(() => {
//     setTimeout(() => {
//         console.log("Closed Phone");
//     }, 2000);
//    });







   //Async and Await
   // function wait(ms) {
   //    return new Promise((resolve) => setTimeout(resolve, ms));
   // }
   // async function Bookticket() {
   
    
   //  await wait(2000);
   //  console.log("Open Book my show - 2 sec");
    
   //   await wait(4000);
   //  console.log("Search for movie - 4 sec");
    
   //   await wait(3000);
   //  console.log("Ticket Booked - 3sec");

   //  console.log("Close Phone");
   // }

   // Bookticket();

   function wait(ms, shouldFail = false) { 
  return new Promise((resolve, reject) => { 
    setTimeout(() => { 
      if (shouldFail) { 
        reject(new Error("errorMsg: BMS is not found")); 
      } else { 
        resolve(); 
      } 
    }, ms);
  });
} 
async function Bookticket(){
  try{
    await wait(2000, false);
    console.log("Open Book my show - 2 sec");

    await wait(4000);
    console.log("Serach for movie - 4 sec");

    await wait(3000);
    console.log("Teckect Booked - 3sec");
  }
  catch(er){
    console.log(er.message);
  }
  finally {
    console.log("Close phone");
  }
}

Bookticket();