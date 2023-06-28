const player = require("./player");
const game = require("./game");
let p1=new player("vivek","X");
let p2=new player("vilay","O");
let g1=new game(p1,p2);

g1.markcell(3);
g1.markcell(7);
// g1.analyseResult();