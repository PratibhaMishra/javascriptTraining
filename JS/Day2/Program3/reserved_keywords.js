func = {};
func['class'] = function(){
  console.log("In class reserved keyword function")
};
var myClass = new func['class']();

func = {};
func['extend'] = function(){
  console.log("In extend reserved keyword function")
};
var myClass = new func['extend']();


func = {};
func['switch'] = function(){
  console.log("In switch reserved keyword function")
};
var myClass = new func['switch']();