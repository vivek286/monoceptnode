const cell = require("./cell");
class board{
    constructor(){
        let temp_board=[];
        for(let i=0;i<9;i++)temp_board.push(new cell());
        this.board=temp_board;
    }
    // static isboardfull
    static analyseResult(board){
        let full=((board)=>{
        
            for(let i=0;i<9;i++){
                if(board[i].ismarked==false)return false;
            }
            return true;
        })(board);
        if(full){
            return "draw";
        }
        let curr=board;
        if(
            (curr[0].mark==curr[1].mark&&curr[1].mark==curr[2].mark&&curr[1].mark!="empty")||
            (curr[3].mark==curr[4].mark&&curr[4].mark==curr[5].mark&&curr[1].mark!="empty")||
            (curr[6].mark==curr[7].mark&&curr[7].mark==curr[8].mark&&curr[1].mark!="empty")||
            // vertical conditions
            (curr[0].mark==curr[3].mark&&curr[3].mark==curr[6].mark&&curr[1].mark!="empty")||
            (curr[1].mark==curr[4].mark&&curr[4].mark==curr[7].mark&&curr[1].mark!="empty")||
            (curr[2].mark==curr[5].mark&&curr[5].mark==curr[8].mark&&curr[1].mark!="empty")||
            // Daigonal conditions
            (curr[0].mark==curr[4].mark&&curr[4].mark==curr[8].mark&&curr[1].mark!="empty")||
            (curr[2].mark==curr[4].mark&&curr[4].mark==curr[6].mark&&curr[1].mark!="empty")        
        
        )return "win"

    }
    static printboard(board){
        
        let repres="";
        for(let i=0;i<9;i++){
            if((i+1)%3==0){
                if(board[i].mark=="empty"){
                    repres+=i+ "  "
                }else{
                    repres+=board[i].mark+ "  "
                }
                
                console.log(repres);
                repres="";

            }else{
                if(board[i].mark=="empty"){
                    repres+=i+ "  "
                }else{
                    repres+=board[i].mark+ "  "
                }
            }



        }
    }

}
module.exports = board;