// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {

    
    // Unobtrusive event binding
    document.querySelector("button")
      .addEventListener("click", function () {
        
        var input =  document.querySelector("#nameis").value;
       
        // Call server to get the name

        $ajaxUtils
          .sendGetRequest("name.json", 
            function (res) {

              if (input === res.name1) {
              var message = res.name1;
              var message2 = "Attendance of theory is " + res.att1t + "% , ";
              var message3 = "Attendance of lab is " + res.att1l;
              var message4 = "Theory and labs attended is 19/20 and 18/20 respectfully";
                }

                else if (input === res.name2) {

              var message = res.name1;
              var message2 = "Attendance of theory is " + res.att2t + "% , ";
              var message3 = "Attendance of lab is " + res.att1l;
              var message3 = "Theory and labs attended is 17/20 and 18/20 respectfully";
                }

              document.querySelector("#content")
                .innerHTML = "<h2>" + message + "</h2>";

            });
      });
  }
);


