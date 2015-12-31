var texto;
(function() {
var nivel=1;
var vidas=3;
var aciertos=0; 
var sc=0.5; //escala canvas
var scl=1; // escalar letra
	// Get the buttons.
	
	// A variable to store the requestID.
	var requestID;
Generar();

var n1,n2,n3,sig1,sig2,sig3,boton;var elemento;
function Generar(){
if(nivel==3){
n1 = Math.round(Math.random()*30);
 n2 = Math.round(Math.random()*30);
  n3 = Math.round(Math.random()*30);
var s1= Math.round(Math.random()*1);
var s2= Math.round(Math.random()*1);
var s3= Math.round(Math.random()*1);
if(s3==0){sig3="+";} if(s3==1){sig3="-";} 
}	
if(nivel==2){
n1 = Math.round(Math.random()*30);
 n2 = Math.round(Math.random()*30);
var s1= Math.round(Math.random()*1);
var s2= Math.round(Math.random()*1);
var s3= Math.round(Math.random()*1);

}
if(nivel==1){
n1 = Math.round(Math.random()*20);
 n2 = Math.round(Math.random()*20);
var s1= Math.round(Math.random()*1);
var s2= Math.round(Math.random()*1);
}
 sig1; sig2;
if(s1==0){sig1="+";} if(s1==1){sig1="-";}
if(s2==0){sig2="+";} if(s2==1){sig2="-";} 

elemento=document.getElementById("canvas");
canvas=elemento.getContext("2d");
	
	canvas.fillStyle = "#FFF";
	canvas.fillRect(0, 0, canvas.canvas.width, canvas.canvas.height);
canvas.font="bold 100px Ravie";
canvas.textAlign = "center";
canvas.fillStyle = "red";
canvas.shadowOffsetX = 10;
canvas.shadowOffsetY = 10;
canvas.shadowBlur = 10;
canvas.shadowColor = "rgba(0, 0, 0, 1)"
if(nivel==1||nivel==2){
if(sig1=="+"){canvas.fillText(""+n1+sig2+n2,300,150);}else{	
canvas.fillText(""+sig1+n1+sig2+n2,300,150);}
}else{
canvas.font="bold 80px Ravie";	
	if(sig1=="+"){canvas.fillText(""+n1+sig2+n2+sig3+n3,300,150);}else{	
canvas.fillText(""+sig1+n1+sig2+n2+sig3+n3,300,150);}
	}
ponerOpciones();
	
		}
		
$(document).ready(function(e) {
	
	// canvas and 2D context initialization
		canvas = document.getElementById("canvas");
		context2D = canvas.getContext("2d");


$(".op1").click(function()
		{
boton=1;			
	animar();
	});
$(".op2").click(function()
		{
boton=2;			
	animar();	
	});
$(".op3").click(function()
		{boton=3;
	animar();
	});		
$(".op4").click(function()
		{boton=4;
	animar();
		});	
});

var res,o1,o2,o3,o4,ale;
function ponerOpciones(){
ale = Math.round(Math.random()*3);	
if(nivel==1||nivel==2){
res=parseInt(sig1+n1)+parseInt(sig2+n2);}else{res=parseInt(sig1+n1)+parseInt(sig2+n2)+parseInt(sig3+n3);console.log("resp="+res);}
//console.log(""+res);
if(nivel==3){
if(sig2=="+"){		
o1=res+1;o2=res;o3=-res;o4=-(res+1);
}else{o1=res-1;o2=res;o3=-res;o4=-(res-1);}
	}



if(nivel==2){
if(n1==0||n2==0){
o1=n1+n2+1;o2=-n1+n2;o3=n1-n2;o4=-n1-n2-1;	
	}else{
if(sig2=="+"){		
o1=res+1;o2=res;o3=-res;o4=-(res+1);
}else{o1=res;o2=res-1;o3=-res;o4=-(res-1);}
	}

}
if(nivel==1){
if(n1==0||n2==0){
o1=n1+n2+1;o2=-n1+n2;o3=n1-n2;o4=-n1-n2-1;	
	}else{
o1=n1+n2;o2=-n1+n2;o3=n1-n2;o4=-n1-n2;
}

}

switch(ale){
	case 0:
$(".op1").text(""+o1);
$(".op2").text(""+o2);		
$(".op3").text(""+o3);		
$(".op4").text(""+o4);	
break;
case 1:
$(".op1").text(""+o4);
$(".op2").text(""+o3);		
$(".op3").text(""+o2);		
$(".op4").text(""+o1);	
break;
case 2:
$(".op1").text(""+o4);
$(".op2").text(""+o3);		
$(".op3").text(""+o1);		
$(".op4").text(""+o2);	
break;
case 3:
$(".op1").text(""+o1);
$(".op2").text(""+o4);		
$(".op3").text(""+o3);		
$(".op4").text(""+o2);	
break;
}
}
function comprobar(){
var p=parseInt($(".op"+boton).text());
//console.log("p="+p+"res="+res);
//console.log("boton="+boton);
if(p==res){
	
	//console.log("he ganado tio");
	
	animationWin();
	//var x=parseInt($(".aciertos").text())+1;
	//$(".aciertos").text(""+x);
}else{
//console.log("he perdido tio");	
	animationLost();
   vidas=parseInt($(".vidas").text())-1;
	$(".vidas").text(""+vidas);}
}


	var canvas;
	var context2D;
	
	var particles = [];
	

	
	function randomFloat (min, max)
	{
		return min + Math.random()*(max-min);
	}
	
	/*
	 * A single explosion particle
	 */
	function Particle ()
	{
		this.scale = 1.3;
		this.x = 0;
		this.y = 0;
		this.radius = 20;
		this.color = "#000";
		this.velocityX = 0;
		this.velocityY = 0;
		this.scaleSpeed = 0.5;
		
		this.update = function(ms)
		{
			// shrinking
			this.scale -= this.scaleSpeed * ms / 1000.0;
			
			if (this.scale <= 0)
			{
				this.scale = 0;
			}
			
			// moving away from explosion center
			this.x += this.velocityX * ms/1000.0;
			this.y += this.velocityY * ms/1000.0;
		};
		
		this.draw = function(context2D)
		{
			// translating the 2D context to the particle coordinates
			context2D.save();
			context2D.translate(this.x, this.y);
			context2D.scale(this.scale, this.scale);
			
			// drawing a filled circle in the particle's local space
			context2D.beginPath();
			context2D.arc(0, 0, this.radius, 0, Math.PI*2, true);
			context2D.closePath();
			
			context2D.fillStyle = this.color;
			context2D.fill();
			
			context2D.restore();
		};
	}
	
	/*
	 * Basic Explosion, all particles move and shrink at the same speed.
	 * 
	 * Parameter : explosion center
	 */
	function createBasicExplosion(x, y)
	{
		// creating 4 particles that scatter at 0, 90, 180 and 270 degrees
		for (var angle=0; angle<360; angle+=90)
		{
			var particle = new Particle();
			
			// particle will start at explosion center
			particle.x = x;
			particle.y = y;
			
			particle.color = "#FF0000";
			
			var speed = 50.0;
			
			// velocity is rotated by "angle"
			particle.velocityX = speed * Math.cos(angle * Math.PI / 180.0);
			particle.velocityY = speed * Math.sin(angle * Math.PI / 180.0);
			
			// adding the newly created particle to the "particles" array
			particles.push(particle);
		}
	}
	
	/*
	 * Advanced Explosion effect
	 * Each particle has a different size, move speed and scale speed.
	 * 
	 * Parameters:
	 * 	x, y - explosion center
	 * 	color - particles' color
	 */
	function createExplosion(x, y, color)
	{
		var minSize = 10;
		var maxSize = 30;
		var count = 10;
		var minSpeed = 60.0;
		var maxSpeed = 200.0;
		var minScaleSpeed = 1.0;
		var maxScaleSpeed = 4.0;
		
		console.log("explo");
		for (var angle=0; angle<360; angle += Math.round(360/count))
		{
			var particle = new Particle();
			
			particle.x = x;
			particle.y = y;
			
			particle.radius = randomFloat(minSize, maxSize);
			
			particle.color = color;
			
			particle.scaleSpeed = randomFloat(minScaleSpeed, maxScaleSpeed);
			
			var speed = randomFloat(minSpeed, maxSpeed);
			
			particle.velocityX = speed * Math.cos(angle * Math.PI / 180.0);
			particle.velocityY = speed * Math.sin(angle * Math.PI / 180.0);
			
			particles.push(particle);
		}
	}
	
	function update (frameDelay)
	{
		// draw a white background to clear canvas
		
		context2D.fillStyle = "#FFF";
		context2D.fillRect(0, 0, context2D.canvas.width, context2D.canvas.height);
		
		// update and draw particles
		for (var i=0; i<particles.length; i++)
		{
			var particle = particles[i];
			
			particle.update(frameDelay);
			particle.draw(context2D);
		}
	}
	
	
	/*$(document).ready(function(e) {


		// canvas and 2D context initialization
		canvas = document.getElementById("canvas");
		context2D = canvas.getContext("2d");
		
		// Button click : BOOM !
		$("div.botones").click(function()
		{
			
animar();		
		});		
	});*/
	var run;
		
		function animate() {
			
		run = requestAnimationFrame(animate);
		update(frameDelay);
		}
	var frameRate = 60.0;
		var frameDelay = 1000.0/frameRate;
		
function animar(){
	var x=260*sc;
			var y=200*sc;
			var d=160*sc;
	

context2D.shadowColor = "transparent"
			createExplosion(x, y, "#525252");
			
			createExplosion(x, y, "red");
			
			createExplosion(x+d, y, "#525252");
			
			createExplosion(x+d, y, "red");
			createExplosion(x+(d*2), y, "#525252");
			
			createExplosion(x+(d*2), y, "red");
			createExplosion(x+(d*3), y, "#525252");
			
			createExplosion(x+(d*3), y, "red");
			createExplosion(x+(d*4), y, "#525252");
			
			createExplosion(x+(d*4), y, "red");
			
			run = requestAnimationFrame(animate);
			setTimeout(function (){cancelAnimationFrame(run);
			
			
	comprobar();
	if(vidas==0){
	vidas=3;hasta=-120*sc;
	posX=0;posX2=0;
	$(".vidas").text(""+3);
	animationWin();
	aciertos=0;
	Nivel=1;
	Generar();
	texto="Game Over";
	$("#parrafo1").text("");
	$("#parrafo2").text("Has tenido 3 errores, sigue intentando");
	 $("#dialog").dialog();
  $("#lnkDialog").click();
init();
	}
	else{

if(aciertos==10){
nivel=nivel+1;
	if(nivel==4){
vidas=3;hasta=120*sc;
	posX=0;posX2=0;
	$(".vidas").text(""+3);
	animationLost();
	aciertos=0;
	nivel=1;
	$(".nivel").text(""+nivel);
texto="Superados";	
$("#parrafo1").text("Todos los retos");
$("#parrafo2").text("Dominas perfectamente los n\u00FAmeros enteros");
console.log("sale del of");	
		}else{
	console.log("aciertos = 10");
vidas=3;hasta=120*sc;
posX=0;posX2=0;
	$(".vidas").text(""+3);
	
	animationLost();
	aciertos=0;	

$(".nivel").text(""+nivel);
texto="Nivel"+nivel;	
$("#parrafo1").text("Pasas al Nivel 2");
$("#parrafo2").text("\u00BFPodr\u00E1s con l\u00E9?");

	}
$("#dialog").dialog();
  $("#lnkDialog").click();
  console.log("antes de init");
 init(); 	
	}
Generar();	
}

		},1000);
}
var canvas = document.getElementById('stage');

	// 2d Drawing Context.
	var ctx = canvas.getContext('2d');
	for(var i=0;i<11;i++){
		
 ctx.lineWidth = 3;
				ctx.strokeStyle = "red";
				ctx.beginPath();
				ctx.moveTo(10+(i*120*sc), 30);
				ctx.lineTo(10+(i*120*sc), 10);
				ctx.stroke(); 
				ctx.font="bold 20px verdana";
				ctx.fillText(""+i-5,10+(i*120*sc)-12, 55);
}

	// Set the fill style for the drawing context.
	ctx.globalAlpha=0.6;
	ctx.fillStyle="CornflowerBlue";
	

	// Variables to for the drawing position and object.
	var posX = 0;
	var boxWidth = 10;
	var pixelsPerFrame = 5; // How many pixels the box should move per frame.

	// Draw the initial box on the canvas.
	ctx.fillRect(posX, 0, boxWidth, canvas.height);
//ctx.globalAlpha=1;

	// Animate.
	var hasta=0;
	function animates() {
		
		requestID = requestAnimationFrame(animates);

		// If the box has not reached the end draw on the canvas.
		// Otherwise stop the animation.
		if (posX <= hasta) {
		//	console.log("posx="+posX);
			ctx.clearRect(0, 0,1400*sc,250*sc);
	for(var i=0;i<10;i++){
		 ctx.lineWidth = 3;
				ctx.strokeStyle = "red";
				ctx.beginPath();
				ctx.moveTo(10+(i*120*sc), 50);
				ctx.lineTo(10+(i*120*sc), 10);
				ctx.stroke(); 
				ctx.fillStyle="black";
				ctx.font="bold 20px verdana";
				ctx.fillText(""+i-5,10+(i*120*sc)-12, 55);
}		
ctx.fillStyle="CornflowerBlue";
ctx.globalAlpha=0.6;
			ctx.fillRect(0,0,posX+10,250*sc);
			
			posX += pixelsPerFrame;
		} else {
			cancelAnimationFrame(requestID);
		}
	}
var posX2;
function animate2() {
		requestID2 = requestAnimationFrame(animate2);

		// If the box has not reached the end draw on the canvas.
		// Otherwise stop the animation.
		if (posX2 >= hasta) {
			ctx.clearRect(0, 0,1400*sc, 250*sc);
	for(var i=0;i<11;i++){
		 ctx.lineWidth = 3;
				ctx.strokeStyle = "red";
				ctx.beginPath();
				ctx.moveTo(10+(i*120*sc), 30);
				ctx.lineTo(10+(i*120*sc), 10);
				ctx.stroke(); 
				ctx.fillStyle="black";
				ctx.font="bold 20px verdana";
				ctx.fillText(""+i-5,10+(i*120*sc)-12, 55);
}		
ctx.fillStyle="CornflowerBlue";
ctx.globalAlpha=0.6;
			ctx.fillRect(0, 0, posX2+10, 250*sc);
			posX2 = posX2-1;
			
		} else {
			cancelAnimationFrame(requestID2);
		}
	}

	// Event listener for the start button.
	function animationWin() {
	console.log("he ganado");	
hasta=hasta+120*sc;
aciertos=aciertos+1;
		// Start the animation.
		requestID = requestAnimationFrame(animates);
		
	}


	// Event listener for the stop button.
	 function animationLost() {
		console.log("he perdido");	
	posX2=hasta;	
hasta=hasta-120*sc;
posX=posX-120*sc;
		// Start the animation.
		requestID2 = requestAnimationFrame(animate2);
	}

}());

 var can, ctx, step = 50, steps = 255;
              delay = 20;
              var rgbstep = 20;
 
        function init() {
            can = document.getElementById("MyCanvas1");
            ctx= can.getContext("2d");
            ctx.fillStyle = "blue";
            ctx.font = "40pt Helvetica";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
			console.log("init final");
                     Textfadeup();        }
 
          function Textfadeup() {
            rgbstep++;
            ctx.clearRect(0, 0, can.width, can.height);
			ctx.font="bold 60px verdana";
            ctx.fillStyle = "rgb(" + rgbstep + "," + 0 + "," + 0 + ")"
            ctx.fillText(texto, 160, 100);
            if (rgbstep < 255)
                var t = setTimeout('Textfadeup()', 10);
            if (rgbstep == 255) {
                Textfadedown();
            }
			console.log("textfade final");
        }
        function Textfadedown() {
rgbstep=rgbstep-1;
            ctx.clearRect(0, 0, can.width, can.height);
            ctx.font="bold 60px verdana";
           ctx.fillStyle = "rgb(" + rgbstep + "," + 0 + "," + 0 + ")"
            ctx.fillText(texto, 160, 100);
            if (rgbstep > 80)
                var t = setTimeout('Textfadedown()', 10);
            if (rgbstep == 80) {
                Textfadeup();
            }
        }  
	
