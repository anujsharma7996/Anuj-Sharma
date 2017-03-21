// Event handling
document.addEventListener("DOMContentLoaded",
   function myfunc() {
    var myname = document.querySelector("#data").value;
    console.log(myname)
    }

  function (event) {

   
    // Unobtrusive event binding
    document.querySelector("button")
      .addEventListener("click", function () {
        
        // Call server to get the name
        if (myname === "anuj"){
        $ajaxUtils
          .sendGetRequest("data/name.txt", 
            function (request) {
              var name = request.responseText;

              document.querySelector("#content")
                .innerHTML = "<h2>" + name + "!</h2>";
            }); }

          else if (myname === "damini"){
              $ajaxUtils
          .sendGetRequest("data/name2.txt", 
            function (request) {
              var name = request.responseText;

              document.querySelector("#content")
                .innerHTML = "<h2>" + name + "!</h2>";
            });

          }
        
      });
  }
);