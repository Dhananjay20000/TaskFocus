p = new Promise((resolve, reject) => {
    app = "BMS";
    if(app === "BMS")
        resolve("Open book my show");
    else
        reject("BMS not found");
})
p.then((app)=>{
    console.log(`found:  ${app}`);
})
.then(()=>{
    console.log(`search for movie`);
})
.then(() => {
    console.log(`Tickect Booked`);
})
.catch((err) => {
    console.log("BMS bor found" + err);
})
.finally(() =>{
    console.log("closed phone")
}
);

//promises with settimeout

 p = new Promise((resolve, reject) => {
   setTimeout(() => {
     let app = "BS";
     if (app === "BMS") {
       resolve("Open BookMyShow");
     } else {
       reject(new Error("BMS not found"));
     }
   }, 2000);
 });

 p.then((app) => {
   return new Promise((resolve) => {
     setTimeout(() => {
       console.log(`Opened ${app}`);
       resolve();
     }, 2000);
   });
 })
 .then(() => {
   return new Promise((resolve) => {
     setTimeout(() => {
       console.log("Search for a movie");
       resolve();
     }, 4000);
   });
 })