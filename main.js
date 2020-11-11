var i = 0;
var txt = '"The Distinction between Past, Present, Future is only a Stubbornly Persistent Illusion --Albert Einstein"';
var speed = 50;
typeWriter=()=>{   
    if (i < txt.length) {
        document.getElementById("demo").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);    
      }
}