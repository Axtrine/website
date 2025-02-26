
        function startTime() {
          const today = new Date();
          let h = today.getHours();
          let m = today.getMinutes();
          let s = today.getSeconds();
          m = checkTime(m);
          s = checkTime(s);
          document.getElementById('txt').innerHTML =  h + ":" + m + ":" + s;
          setTimeout(startTime, 1000);
        }
        
        function checkTime(j) {
          if (j < 10)  {j = "0" + j};  
          return j;
        }
  // thanks vance and oofie :D