const timer=document.querySelector('.buy__timer');const date=new Date();let time=86400-(date.getHours()*3600+date.getMinutes()*60+date.getSeconds());if(date.getHours()>19){time+=7200}
setInterval(()=>{let hours=Math.floor(time/3600);let tempTime=time%3600;let minutes=Math.floor(tempTime/60);tempTime%=60;timer.textContent=`${hours} : ${minutes} : ${tempTime}`
if(time<=2){time=8400}else{time-=1}},1000)