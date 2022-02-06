  //function mymessage() {
         // alert("you can not reload the page");
        
        //}
        function myColorFunction1(x) {
            x.style.background = "#fbfcd4";
            }
   
           function myColorFunction2(x) {
           x.style.background = "#d4fced";
          }
          
        //signIn button
          var x = document.getElementById("btn-submit");
              x.addEventListener("mouseover", myFunction);
               x.addEventListener("click", mySubmitFunction);
               x.addEventListener("mouseout", myThirdFunction);
               function mySubmitFunction() {
          alert ("your from has been submitted!");
   
          }


          function loadDoc() {
            
            const xhttp = new XMLHttpRequest();
            //state change
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200)
                document.getElementById("result").innerHTML = this.responseText;
            }
            ///   
            xhttp.onload = function() {
                console.log(formData)
           
            }
            xhttp.open("Post", "http://localhost:8446/api/v1/empolyeeInfo/employeeLogin/E201/rajesh1234");
            
            var myForm = document.getElementById("myForm");
             var formData = new FormData(myForm);
             xhttp.send(formData);

        
        }