//defining global variables
var a = 1, b = 2, c = 3;

(function firstFunction(){ // scope, local variables
  var b = 5, c = 6;

  (function secondFunction(){ // local variables
    var b = 8;

    console.log("a: "+a+", b: "+b+", c: "+c);
    (function thirdFunction(){
      var a = 7, c = 9;

      (function fourthFunction(){
        var a = 1, c = 8;

      })();
    })();
  })();
})();

// place the following code inside one of the functions
// so the output is a: 1, b: 8, c: 6
// console.log("a: "+a+", b: "+b+", c: "+c);
