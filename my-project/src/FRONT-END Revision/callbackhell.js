setTimeout(()=> {
    console.log("Step 1 - Open BMS");
    setTimeout(()=>{
      console.log("Step - 2 - search movies"); 
      setTimeout(()=> {
        console.log("step 3 - select seats");
        setTimeout(()=>{
            console.log("step 4 = Ticket Booked")
        },1000);
      },5000);
    },3000);
},2000);