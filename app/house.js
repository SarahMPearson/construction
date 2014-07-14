'use strict';

function House(name, material, year){
  this.name = name;
  this.material = material;
  this.year = parseInt(year);
  this.rooms = [];
}

House.prototype.area = function(){
  var totalArea = 0;
  for(var i = 0; i < this.rooms.length; i++) {
    totalArea += this.rooms[i].area();
}
return totalArea;
};

House.prototype.cost = function(){
  var houseCost = 0;
  for (var i = 0; i < this.rooms.length; i++) {
    houseCost += this.rooms[i].cost();
  }
  return houseCost;
};

module.exports = House;

