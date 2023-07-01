const board = require("./board");
const player = require("./player")
class game{
    constructor(p1name,p1mark,p2name,p2mark){
        this.board=new board().board;
        this.player1=new player(p1name,p1mark);
        this.player2=new player(p2name,p2mark);
        this.isActive=true;
        this.currentplayer=this.player1;
        console.log(this.currentplayer.name,"'s turn :");
        board.printboard(this.board);

    }
     markcell(pos){
        console.log(pos)
        if(this.board[pos].ismarked){
            console.log("Cell is already marked choose another position");
            return;
        }
        if(pos>9||pos<0){
            console.log("Enter valid cell position");
            return;
        }
        console.log(this.currentplayer.name," selecetd position ",pos);
        this.board[pos].ismarked=true;
        this.board[pos].mark=this.currentplayer.mark; 
        let status=board.analyseResult(this.board);
        if(status=="win"){
            console.log("GAME WON BY ",this.currentplayer.name);
            this.isActive=false;
            return;
        }
        if(status=="draw"){
            console.log("GAME ENDED IN DRAW");
            this.isActive=false;
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
    
    
}
module.exports = game;