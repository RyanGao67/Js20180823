var simpleLevelPlan = [
  "                      ",
  "                      ",
  "  x              = x  ",
  "  x         o o    x  ",
  "  x @      xxxxx   x  ",
  "  xxxxx            x  ",
  "      x!!!!!!!!!!!!x  ",
  "      xxxxxxxxxxxxxx  ",
  "                      "
];

function Level(plan){
	this.width = plan[0].length;
	this.height = plan.length;
	this.grid = [];
	this.actors = [];

	for(var y=0;y<this.height;y++){
		var line = plan[y], gridLine = [];
		for(var x=0;x<this.width;x++){
			var ch=line[x],fieldType=null;
			var Actor = actorChars
		}
	}
}
function Vector(x,y){
	this.x = x;
	this.y = y;
}
Vector.prototype.plus = function(other){
    return new Vector(this.x+other.x, this.y+other.y);
};
Vector.prototype.times = function(factor){
	return new Vector(this.x*factor, this.y*factor);
};

var actorChars = {
	"@": Player,
	"o": Coin,
	"=": Lava,
	"|": Lava,
	"v": Lava
};

function Player(pos){
	this.pos = pos.plus(new Vector(0, -0.5));
	this.size = new Vector(0.8, 1.5);
	this.speed = new Vector(0, 0);
}

Player.prototype.type = "player"

function Lava(pos, ch){
	this.pos = pos;
	this.size = new Vector(1,1);
	if(ch == '='){
		this.speed = new Vector(2, 0);
	}else if (ch=="|"){
		this.speed = new Vector(0,2);
	}else if(ch=='v'){
		this.speed = new Vector(0,3);
		this.repeatPos = pos;
	}
}

Lava.prototype.type = "Lava";

function Coin(pos){
	this.basePos = this.pos = pos.plus(new Vector(0.2, 0.1));
	this.size = new Vector(0.6, 0.6);
	this.wobble = Math.random()*Math.PI*2;
}
Coin.prototype.type = "coin";

var simpleLevel = new Level(simpleLevelPlan)
console.log(simpleLevel.width, 'by', simpleLevel.height)