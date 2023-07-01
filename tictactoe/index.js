
const game = require("./game");
let g1=new game("vivek","X","vilay","O");
while(g1.isActive){
    try{
        let pos=Math.floor(Math.random() * 9);
        g1.markcell(pos);
        
    }catch(error){
        console.log("Error while playing => ",error);
    
    }
} 


// g1.analyseResult();