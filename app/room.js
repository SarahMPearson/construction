'use strict';


function Room(name, length, width, height,floor, color){
  this.name = name;
  this.length = parseInt(length);
  this.width = parseInt(width);
  this.height = parseInt(height);
  this.floor = floor;
  this.color = color;
}

Room.prototype.area = function(){
  return this.length * this.width;
};
Room.prototype.wallArea = function() {
  return (2*(this.width*this.height) + 2* (this.length*this.height));
};
Room.prototype.cost = function(){
 if(this.floor=== 'carpet') {
   return ((this.length*this.width) * 15) + this.wallArea()*0.5;
 }else if (this.floor === 'tile') {
   return ((this.length*this.width) * 12) + this.wallArea()*0.5;
 }else{
  return ((this.length * this.width) *10) + this.wallArea()*0.5;
 }
};

//his code
//Room.prototype.cost = function() {
//var rate, total = 0;
//
//switch(this.floor){
//  case 'carpet':
//    rate = 15;
//    break;
//  case 'tile':
//    rate = 12;
//    break;
//  case 'wood':
//    rate = 10;
//    }
//
// total += rate * this.area();
// total +=(this.width * this.height) * 2 * 0.50;
// total +=(this.length * this.height) * 2 * 0.50;
//
// return total;
// };

module.exports = Room;


