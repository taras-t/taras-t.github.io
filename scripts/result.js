function writeResult(){
   var current = new Date();
   var date = getParam("date");
   var month = getParam("month");
   var year = getParam("year");
   var isYear = ((month == 12)&&(date > 32 - getDataLength(getParam("type"))))||(year != current.getFullYear());
   var wYear ="";
   var isWriteCurrent = true;
   if(date > monthLength(month, year)){
      showHelp(7);
      history.back();
   }
   if(isLandscape()){
      document.writeln("<table><tr valign=\"top\"><td class=\"land\">");
   }
   document.writeln("<table  cellspacing=\"0\">");
   for(var i = 1; i <= getDataLength(getParam("type")); i++){
      if(isYear){wYear = " " + year}
      if(isToday(date, month, year)){
         document.write("<tr class=\"mark\">");
         isWriteCurrent = false;
      }
      else{
         document.write("<tr>");
      }
      document.writeln("<td class=\"list\">&bull; ", getDayName(date, month, year), "</td><td>", date, " ", getMonthShortName(month), ".",  wYear, "</td><td>", getData(getParam("type"), i), "</td></tr>");
      if((isLandscape())&&(i == Math.round(getDataLength(getParam("type")) / 2))){
         document.writeln("</table></td>");
         document.writeln("<td class=\"land\"><table cellspacing=\"0\">");
      }
      date++;
      if(date > monthLength(month, year)){
         date = 1;
         month++;
      }
      if(month > 12){
         month = 1;
         year++;
      }
   }
   document.writeln("</table>");
   if(isLandscape()){
      document.writeln("</td></tr></table>");
   }
   if(isWriteCurrent){
      writeP("<span class=\"mark\">Сьогодні " + current.getDate() + " " + getMonthShortName(current.getMonth() + 1) + ". " + current.getFullYear() + " р.</span>");
   }
}
