function init(){(canvas=document.getElementById("canvas"))&&canvas.getContext&&(context=canvas.getContext("2d"),window.addEventListener("mousemove",documentMouseMoveHandler,!1),window.addEventListener("mousedown",documentMouseDownHandler,!1),window.addEventListener("mouseup",documentMouseUpHandler,!1),document.addEventListener("touchstart",documentTouchStartHandler,!1),document.addEventListener("touchmove",documentTouchMoveHandler,!1),window.addEventListener("resize",windowResizeHandler,!1),createParticles(),windowResizeHandler(),setInterval(loop,1e3/60))}function createParticles(){particles=[];for(var e=0;e<QUANTITY;e++){var t={size:1,position:{x:mouseX,y:mouseY},offset:{x:0,y:0},shift:{x:mouseX,y:mouseY},speed:.01+.04*Math.random(),targetSize:1,fillColor:"#"+(4210752*Math.random()+11184810|0).toString(16),orbit:.5*RADIUS+.5*RADIUS*Math.random()};particles.push(t)}}function documentMouseMoveHandler(e){mouseX=e.clientX-.5*(window.innerWidth-SCREEN_WIDTH),mouseY=e.clientY-.5*(window.innerHeight-SCREEN_HEIGHT)}function documentMouseDownHandler(e){mouseIsDown=!0}function documentMouseUpHandler(e){mouseIsDown=!1}function documentTouchStartHandler(e){1==e.touches.length&&(e.preventDefault(),mouseX=e.touches[0].pageX-.5*(window.innerWidth-SCREEN_WIDTH),mouseY=e.touches[0].pageY-.5*(window.innerHeight-SCREEN_HEIGHT))}function documentTouchMoveHandler(e){1==e.touches.length&&(e.preventDefault(),mouseX=e.touches[0].pageX-.5*(window.innerWidth-SCREEN_WIDTH),mouseY=e.touches[0].pageY-.5*(window.innerHeight-SCREEN_HEIGHT))}function windowResizeHandler(){SCREEN_WIDTH=window.innerWidth,SCREEN_HEIGHT=window.innerHeight,canvas.width=SCREEN_WIDTH,canvas.height=SCREEN_HEIGHT}function loop(){for(mouseIsDown?RADIUS_SCALE+=.02*(RADIUS_SCALE_MAX-RADIUS_SCALE):RADIUS_SCALE-=.02*(RADIUS_SCALE-RADIUS_SCALE_MIN),RADIUS_SCALE=Math.min(RADIUS_SCALE,RADIUS_SCALE_MAX),context.fillStyle="rgba(0,0,0,0.05)",context.fillRect(0,0,context.canvas.width,context.canvas.height),i=0,len=particles.length;i<len;i++){var e=particles[i],t={x:e.position.x,y:e.position.y};e.offset.x+=e.speed,e.offset.y+=e.speed,e.shift.x+=(mouseX-e.shift.x)*e.speed,e.shift.y+=(mouseY-e.shift.y)*e.speed,e.position.x=e.shift.x+Math.cos(i+e.offset.x)*(e.orbit*RADIUS_SCALE),e.position.y=e.shift.y+Math.sin(i+e.offset.y)*(e.orbit*RADIUS_SCALE),e.position.x=Math.max(Math.min(e.position.x,SCREEN_WIDTH),0),e.position.y=Math.max(Math.min(e.position.y,SCREEN_HEIGHT),0),e.size+=.05*(e.targetSize-e.size),Math.round(e.size)==Math.round(e.targetSize)&&(e.targetSize=1+7*Math.random()),context.beginPath(),context.fillStyle=e.fillColor,context.strokeStyle=e.fillColor,context.lineWidth=e.size,context.moveTo(t.x,t.y),context.lineTo(e.position.x,e.position.y),context.stroke(),context.arc(e.position.x,e.position.y,e.size/2,0,2*Math.PI,!0),context.fill()}}var SCREEN_WIDTH=window.innerWidth,SCREEN_HEIGHT=window.innerHeight,RADIUS=70,RADIUS_SCALE=1,RADIUS_SCALE_MIN=1,RADIUS_SCALE_MAX=1.5,QUANTITY=25,canvas,context,particles,mouseX=.5*SCREEN_WIDTH,mouseY=.5*SCREEN_HEIGHT,mouseIsDown=!1;window.onload=init;