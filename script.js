
// Create variables
function compute()
{
    var principal = document.getElementById("principal").value;
        // Add validation for "Principal" input box
    if(principal <= 0 ){
        alert("Enter a positive number");
        principal.focus();
    } 
       
    alert("OK")
   
    
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);

    // When "Compute Interest" is clicked, set its inner html property
    var result = document.getElementById("result");
    result.innerHTML= "If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+interest+",\<br\>in the year "+year+"";

    
}  

// Write a function that reads the value of the range slider 
        
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

 