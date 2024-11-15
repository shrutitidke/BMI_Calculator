function getbmivalue(){

    var height=document.getElementById("height").value;
    var weight=document.getElementById("weight").value;

    height=height*12;

    height=height*0.025;

    var bmivalue = weight/(height*height)

    document.getElementById("bmivalue").value=bmivalue

    var statusMessage = "";

            if (bmivalue >= 19 && bmivalue <= 25) {
            statusMessage = "Good condition";
            }  else if (bmivalue < 19) {
            statusMessage = "Underweight";
           } else if (bmivalue > 25) {
            statusMessage = "Overweight";
           }else {
            alert("Please enter valid height and weight values.");
          }

        document.getElementById("bmiStatus").textContent = statusMessage;
         
}