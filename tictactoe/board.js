const cell = require("./cell");
class board{
    constructor(){
        let temp_board=[];
        for(let i=0;i<9;i++)temp_board.push(new cell());
        this.board=temp_board;
    }
    static isboardfull(board){
        
        for(let i=0;i<9;i++){
            if(board[i].ismarked==false)return false;
        }
        return true;
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