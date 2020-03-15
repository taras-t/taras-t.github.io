function writeNewForm(){
   var current = new Date();
   document.writeln("<form action=\"result.html\" method=\"GET\" name=\"new_form\">");
   document.writeln("<p>Назва: <input name=\"name\" type=\"text\" size=\"20\" value=\"",getParam("name") , "\"> ", help(0), "</p>");
   document.writeln("<p>Вид птиці: <select name=\"type\">");
   document.writeln("<option selected value=\"0\">Курка</option>");
   document.writeln("<option value=\"1\">Качка</option>");
   document.writeln("<option value=\"2\">Індокачка</option>");
   document.writeln("<option value=\"3\">Гуска</option>");
   document.writeln("<option value=\"4\">Індик</option>");
   document.writeln("<option value=\"5\">Перепілка</option>");
   document.writeln("</select> ", help(1), "</p>");
   document.writeln("<p>Дата закладки:</p><p>Число: <select name=\"date\">");
   for(var i = 1; i <= 31; i++){
      if(i == current.getDate()){
            document.writeln("<option selected>", i, "</option>");
      }
      else{
            document.writeln("<option>", i, "</option>");
      }
   }
   document.writeln("</select> ", help(2), "</p>");
   document.writeln("Місяць: <select name=\"month\">");
   for(var i = 1; i <= 12; i++){
      if(i == current.getMonth() +1){
            document.writeln("<option selected value=\"",i , "\">", getMonthName(i), "</option>");
      }
      else{
            document.writeln("<option value=\"",i , "\">", getMonthName(i), "</option>");
      }
   }
   document.writeln("</select> ", help(3), "</p>");

   document.writeln("<p>Рік: <select name=\"year\">");
   document.writeln("<option>", current.getFullYear() - 1, "</option>");
   document.writeln("<option selected>", current.getFullYear(), "</option>");
   document.writeln("<option>", current.getFullYear() + 1, "</option>");
   document.writeln("</select> ", help(4), "</p>");
   document.writeln("<input type=\"submit\" value=\"Ok\"> <input type=\"reset\" value=\"Скинути\"> ", help(5), "</form>");
}
function writeBackForm(){
   document.writeln("<br><form name=\"back_form\">");
   document.writeln("<input type=\"button\" value=\"Назад\" onclick=\"history.back()\"> ");
   document.writeln("<input type=\"button\" value=\"Новий\" onclick=\"location.href='./'\"> ", help(6), "</form>");
}
