/* The following should be a file in your js or script folder */

$( "#CircleForm" ).validate({

});

function displayCircle() {
    // if the form is valid, then make the calculations
    if ($("#CircleForm").valid()) {
        
         document.getElementById("diameter").innerHTML = "";
         document.getElementById("circumference").innerHTML = "";
         document.getElementById("area").innerHTML = "";

         var radius; // string representation of the radius
         var radiusfp; // floating point value of radius
         var diameter;  // floating point diameter
         var circumference;  // floating point circumference
         var area;  // floating point area
         var result; // displayable result

         // read in the radius as a string
         radius = document.getElementById("radius").value;

         // Convert numbers from strings to Floating Point
         radiusfp = parseFloat( radius );

         // calculate the diameter
         diameter = calcDiameter(radiusfp);

         //calculate the circumference
         circumference = calcCircumference(radiusfp);

         //calculate the area
         area = calcArea(radiusfp);

         // display the diameter
         document.getElementById("diameter").innerHTML = diameter.toString();

         // display the circumference
         document.getElementById("circumference").innerHTML = circumference.toString();

         // display the area
         document.getElementById("area").innerHTML = area.toString();
    }
}

  function calcDiameter (r) 
  // returns diameter
  // 2 times the radius
  {
      return 2*r;
  }

  function calcCircumference (r) 
  // returns circumference
  // 2 times PI times radius
  {
      return 2*Math.PI*r
  }

  function calcArea (r) 
  // returns area
  // PI times radius squared
  {
      return Math.PI*r*r
  }
  
  function clearForm()
{
    document.getElementById("radius").value = "";
    document.getElementById("radiuserror").innerHTML = "";
    document.getElementById("circumference").innerHTML = "";
    document.getElementById("diameter").innerHTML = "";
    document.getElementById("area").innerHTML = "";
}
