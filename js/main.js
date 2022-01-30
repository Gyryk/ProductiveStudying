let isBreak = false;
let countDownTime;

setCountDownTime();

function timer()
{
  var x = setInterval(function()
  {
    let now = new Date().getTime();
    let distance = countDownTime - now;

    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    let milliseconds = Math.floor(distance % 1000);

    document.getElementById("timer").innerHTML = minutes + ":" + seconds + ":" + milliseconds;

    setBreakText();

    if(distance <= 0)
    {
      clearInterval(x);
      document.getElementById("audio").play();

      isBreak = !isBreak;
      setBreakText();
      setCountDownTime();
    }
  }, 1);
}
function setBreakText()
{
  if(!isBreak)
  {
    document.getElementById("break").innerHTML = "Time to study!";
  }
  else
  {
    document.getElementById("break").innerHTML = "Time for a break!";
  }
}

function setCountDownTime()
{
  if(!isBreak)
  {
    countDownTime = new Date().getTime() + (1000 * 60 * 25);
    timer();
  }
  else
  {
    countDownTime = new Date().getTime() + (1000 * 60 * 5);
    timer();
  }
}
