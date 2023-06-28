const { Console } = require("console");
const board = require("./board");
const cell = require("./cell")
const player = require("./player")
class game{
    constructor(p1,p2){
        this.board=new board().board;
        this.player1=p1;
        this.player2=p2;
        this.isActive=false;
        this.currentplayer=p1;
        console.log(p1.name,"'s turn :");
        board.printboard(this.board);

    }
     markcell(pos){
        if(this.board[pos].ismarked){
            throw new ("Cell is already marked choose another position");
        }
        if(pos>9||pos<0){
            throw new ("Enter valid cell position");
        }
        console.log(this.currentplayer.name," selecetd position ",pos);
        this.board[pos].ismarked=true;
        this.board[pos].mark=this.currentplayer.mark;
        let status=this.analyseResult();
        if(status=="win"){
            console.log("GAME WON BY ",this.currentplayer.name);
            return;
        }
        if(status=="draw"){
            console.log("GAME ENDED IN DRAW");
            return;
        }
        if(this.currentplayer.name==this.player1.name){
            this.currentplayer=this.player2;
            console.log(this.currentplayer.name,"'s turn : ");
        }else{
            this.currentplayer=this.player1;
            console.log(this.currentplayer.name,"'s turn : ");
        }
        board.printboard(this.board);
    }
    analyseResult(){
        let full=board.isboardfull(this.board);
        if(full){
            return "draw";
        }
        let curr=this.board;
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
    
}
module.exports = game;