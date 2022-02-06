function myVFunction() {
    var UEmail = document.getElementById("Uemail").value.indexOf("@");
    var Upass = document.getElementById("Upass").value;
    var Uname = document.getElementById("Uname").value;
    submitOK = "true";
  
    if ( (Uname.length)||Uname.length<1||Uname.length > 10) {
      alert("The name may have 1  10 characters");
      submitOK = "false";
    } 
  
    if (isNaN(Upass.length) || Upass.length < 1 || Upass.length > 6) {
      alert("The pass must be of length 6");
      submitOK = "false";
    }
  
    if (UEmail == -1) {
      alert("Not a valid e-mail!");
      submitOK = "false"; }
  

  if (submitOK == "false") {
  return false;
  }
}
 