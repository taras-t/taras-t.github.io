function strCorrect(str, input, output){
   while(str.indexOf(input) != -1){
      str = str.replace(input, output);
   }
   return str;
}
function isParam(aParamName){
   return location.search.indexOf(aParamName + "=") != -1;
}
function getParam(aParamName){
   var result = [""];
   var paramLine = decodeURI(location.search);
   paramLine = paramLine.substr(1, paramLine.length - 1);
   paramLine = strCorrect(paramLine, "+", " ");
   paramLine = strCorrect(paramLine, "%2C", ",");
   var params = paramLine.split("&");
   for(var i = 0; i < params.length; i ++){
      if(params[i].indexOf(aParamName + "=") != -1){result = params[i].split("=")}
   }
   return result[result.length - 1];
}
function getMonthName(month){
   var data = ["Січень", "Лютий","Березень" , "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"];
   return data[month - 1];
}
function getMonthShortName(month){
   var data = ["січ", "лют","бер" , "кві", "тра", "чер", "лип", "сер", "вер", "жов", "лис", "гру"];
   return data[month - 1];
}
function getTitle(){
   var data = ["Курка", "Качка", "Індокачка", "Гуска", "Індик", "Перепілка"];
   if(getParam("name") == ""){
      return data[getParam("type")] + " - " + getParam("date") +" " + getMonthShortName(getParam("month")) + ". " + getParam("year");
   }
   else{
      return getParam("name");
   }
}
function monthLength(month, year){
   var months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
   if(((year % 4 == 0)&&(year %
100 != 0))||(year % 400 == 0)){months[1] = 29}
   return months[month - 1];
}
function getDayName(date, month, year){
   var days =["<span class=\"mark\">НД</span>", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];
   var current = new Date(month + "/" + date + "/" + year);
   return days[current.getDay()];
}
function isToday(date, month, year){
   var current = new Date();
   return (current.getDate() == date)&&(current.getMonth() + 1 == month)&&(current.getFullYear() == year);
}
function isLandscape(){
   return screen.width >= screen.height;
}
function writeP(text){
 document.writeln("<p>", text, "</p>")
}
