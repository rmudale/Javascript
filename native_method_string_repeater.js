/*
 * Define a repeatify function on the String Object. The function accepts an integer that specifies how many times the string has to be repeated
 * The Function returns the string repeated the number of times specified 
 * e.g console.log("Javascript".repeatify(3));
 */
 
 String.prototype.repeatify = String.prototype.repeatify || function(times) {
  let str = "";
  
  for(let i=0; i<times; i++) {
    str += this;
  }
  
  return str; 
 }
 
 console.log("Javascript".repeatify(3));
