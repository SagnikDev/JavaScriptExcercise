let iAmGlobal = "someValues";

if (true) {
  var iAmLocal = "someMoreValues"; //To declare to access out of scope like below
  iAmGlobal = "Superman";
  console.log(iAmGlobal);
  console.log(iAmLocal);
}
console.log(iAmGlobal);

console.log(iAmLocal); //Accessable from outside scope
