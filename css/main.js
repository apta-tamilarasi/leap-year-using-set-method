var today=new Date();

document.write("TODAY"+"<br><br>"+today+"<br><br>");

var year=today.getFullYear();
document.write("get year "+year+"<br><br>");


var thisyear=today.getFullYear(today.setFullYear("2004"));
document.write("Set year "+thisyear+"<br><br>");
document.write("This year "+thisyear+"<br><br>");

if(thisyear%4==0){
   document.write("Given year  "+ thisyear+"  is leap year"); 
}

else{
    document.write("Given year "+thisyear+" is  not a leap year"); 
}
