function getRandomInt(max){
  return Math.floor(Math.random()*(max+1));
}
function focusRun(){
  let S=0, B, L;
  do {
    alert("Задумайте число від 1 до 10");
    B=getRandomInt(9)+1;
    alert(`Додайте до нього ${B}.`);
    S=B;
    for(let i=1;i<getRandomInt(1)+2;i++){
      if(S>3){
        L=B;
        do {
          if(S>10){B=getRandomInt(9)+1}else{B=getRandomInt(S-1)+1}
        } while (B==L);
        alert(`Відніміть ${B}.`);
        S-=B;
      }
      L=B;
      do {
        B=getRandomInt(9)+1;
      } while (B==L);
      alert(`Додайте ${B}.`);
      S+=B;
    }
    alert("Відніміть задумане.");
  } while (confirm(`У Вас вийшло: ${S}.\n\nЩе раз?`));
}