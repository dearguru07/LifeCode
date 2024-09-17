function keepDoingYourJob(){
    let positiveStatement = "Your Good Deeds..!";
    let negitiveQueue= "All the negitivity around you..";
    
    setTimeout(()=>{
        console.log(negitiveQueue)
    },0);

    const Result = ()=>{
        let whatYouGet = positiveStatement ? "Its your Win at the End..":"";
        console.log(whatYouGet);
    }
    return Result;
}
let patience = keepDoingYourJob();
patience();