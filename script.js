
function btn1() {
    alert("usama afif");
  }
  function btn2() {
    alert("9");
  }
  function varname(){
document.getElementById("para").innerHTML="var num1 <br> var num2";
document.getElementById("output").innerHTML="";
  }
  function camelcase(){
    document.getElementById("para").innerHTML="helloMyNameIsUsamaAfif";
    document.getElementById("output").innerHTML="";
      }
      var num1=30;
      var num2=20;
      var sum=num1+num2;
      var sub=num1-num2;
      var mul=num1*num2;
      var div=num1/num2;

      function sumnumber(){
        
        document.getElementById("para").innerHTML="num1 = " + num1+" <br> num2 = "+num2;
        document.getElementById("output").innerHTML="num1 + num2 = "+sum;
      }
      function subnumber(){
        
        document.getElementById("para").innerHTML="num1 = " + num1+" <br> num2 = "+num2;
        document.getElementById("output").innerHTML="num1 - num2 = "+sub;
      }
      function mulnumber(){
        
        document.getElementById("para").innerHTML="num1 = " + num1+" <br> num2 = "+num2;
        document.getElementById("output").innerHTML="num1 * num2 = "+mul;
      }
      function divnumber(){
        
        document.getElementById("para").innerHTML="num1 = " + num1+" <br> num2 = "+num2;
        document.getElementById("output").innerHTML="num1 / num2 = "+div.toPrecision(5);
      }
      function calnumber(){
        document.getElementById("para").innerHTML=sum+" * "+mul+" - "+sub+" / "+div.toPrecision(5);
        document.getElementById("output").innerHTML=(sum*mul-sub/div.toPrecision(5)).toPrecision(7);

      }
      function inpclear(){
        document.getElementById("para").innerHTML="";
      }
      function outclear(){
        document.getElementById("output").innerHTML="";
      }