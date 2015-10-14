var juego, pos, jessipos, final=0;
var fondo = {
	fondoURL: "img/fondo.png",
	fondoOK: false
};
var teclas = {
	UP: 38,
	DOWN: 40,
	LEFT: 37,
	RIGHT: 39
};
var jessi = {
	x: 30,
	y:500,
	vel: 10,
	frenteURL: ["img/jf1.png", "img/jf2.png", "img/jf3.png"],
	atrasURL: ["img/ja1.png", "img/ja2.png", "img/ja3.png"],
	derURL: ["img/jd1.png", "img/jd2.png", "img/jd3.png"],
	izqURL: ["img/ji1.png", "img/ji2.png", "img/ji3.png"],
	frenteOK: [false, false, false],
	atrasOK:[false, false, false],
	derOK: [false, false, false],
	izqOK:[false, false, false]
};
var robot = {
	x: 680,
	y: 30,
	vel: 10,
	imagenURL: "img/robot.png",
	imagenOK: false
};

function tecla (tl) {
	var k = tl.keyCode;
	if (k == teclas.UP || k == teclas.DOWN || k == teclas.LEFT || k == teclas.RIGHT) {
if (jessi.y >= 40 && jessi.x >= 20 && jessi.x <= 780) {
if (jessi.y >190 || jessi.x > 130 || jessi.y < 120) {
if (jessi.y > 150 || jessi.x < 170 || jessi.x > 220) {
if (jessi.x < 50 || jessi.x > 100 || jessi.y > 110 ) {
if (jessi.x < 250 || jessi.x > 380 || jessi.y > 150 || jessi.y <= 70) {
if (jessi.x < 290 || jessi.x > 340 || jessi.y > 190) {
if (jessi.x < 450 || jessi.y > 160 || jessi.x > 580) {
if (jessi.x < 610 || jessi.y > 230 || jessi.y < 120) {
if (jessi.x < 490 || jessi.y > 270 || jessi.x > 540 || jessi.y < 200) {
if (jessi.x < 210 || jessi.y > 230 || jessi.x > 260 || jessi.y < 160) {
if (jessi.x < 380 || jessi.x > 500 || jessi.y > 350 || jessi.y <= 270) {
if (jessi.x < 410 || jessi.x > 460 || jessi.y > 390 || jessi.y < 310) {
if (jessi.x < 610 || jessi.y > 310 || jessi.y < 240) {
if (jessi.x < 650 || jessi.x > 700 || jessi.y < 450) {
if (jessi.x > 140 || jessi.y < 320 || jessi.y > 430) {
if (jessi.x > 140 || jessi.x < 70 || jessi.y > 480 || jessi.y < 440) {
if (jessi.x > 70 || jessi.x < 50 || jessi.y > 470 || jessi.y < 450) {
	if (k == teclas.UP) {
	jessi.y -= jessi.vel;
		jessi.atras.name = jessi.atrasURL[final];
		jessi.atras.src = jessi.atrasURL[final];
	}
} } } } } } } } } } } } } } } } }
if (jessi.y <= 520 && jessi.x >= 20 && jessi.x <= 740) {
if (jessi.x > 390 || jessi.y < 510 ) {
// 1ER CUADRITO
if (jessi.x < 50 || jessi.x > 100 || jessi.y < 30 || jessi.y > 100) {
// BLOQUE IZQUIERDO
if (jessi.x > 130 || jessi.y < 110 || jessi.y > 180) {
// SEGUNDO CUADRITO
if (jessi.x < 210 || jessi.x > 260 || jessi.y < 150 || jessi.y > 220) 
// TERCER CUADRITO
if (jessi.x < 490 || jessi.x > 540 || jessi.y < 190 || jessi.y > 260) {
// CUARTO CUADRITO
if (jessi.x < 650 || jessi.x > 700 || jessi.y < 440 || jessi.y > 460) {
// BLOQUE INFERIOR IZQUIERDA
if (jessi.x > 140 || jessi.y < 310 || jessi.y > 420) {
// BLOQUE DE TUNEL DERECHO
if (jessi.x < 620 || jessi.y < 230 || jessi.y > 300) {
// RECTANGULO INFERIOR IZQUIERDA
if (jessi.x < 170 || jessi.x > 290 || jessi.y < 400) {
// RECTANGULO INFERIOR DERECHA
if (jessi.x < 530 || jessi.x > 580 || jessi.y < 410) {
// CRUZ ARRIBA
if (jessi.x < 250 || jessi.x > 380 || jessi.y < 70 || jessi.y > 140) {
if (jessi.x < 290 || jessi.x > 340 || jessi.y < 30 || jessi.y > 140) {
// CRUZ ABAJO
if (jessi.x < 380 || jessi.x > 500 || jessi.y < 270 || jessi.y > 340) {
if (jessi.x < 410 || jessi.x > 460 || jessi.y < 230 || jessi.y > 340) {
// HUECO ESTRUCTURA SUPERIOR DERECHA
if (jessi.x < 610 || jessi.x > 690 || jessi.y < 70 || jessi.y > 220) {
if (jessi.x < 700 || jessi.x > 740 || jessi.y < 110 || jessi.y > 220) {
	if (k == teclas.DOWN) {
	jessi.y += jessi.vel;
		jessi.frente.name = jessi.frenteURL[final];
		jessi.frente.src = jessi.frenteURL[final];
	}
} } } } } } } } } } } } } } } }
if (jessi.x >= 40 || jessi.x == 30 || jessi.y == 220) {
if (jessi.x > 400 || jessi.y < 530 ) {
if (jessi.x > 150 || jessi.x < 70 || jessi.y < 320 || jessi.y > 470) {
if (jessi.x > 140 || jessi.y < 120 || jessi.y > 180) {
if (jessi.x > 110 || jessi.x < 70 || jessi.y > 100 || jessi.y < 40) {
if (jessi.x > 230 || jessi.y > 140 || jessi.x < 180) {
if (jessi.x > 590 || jessi.y > 150 || jessi.x < 450) {
// Espacio en Figura superior Derecha
  if (jessi.x < 620 || jessi.x > 700 || jessi.y < 80 || jessi.y > 100) {
  if (jessi.x < 620 || jessi.x > 710 || jessi.y < 100 || jessi.y > 120) {

if (jessi.x > 300 || jessi.y < 410 || jessi.x < 170) {
if (jessi.x > 590 || jessi.y < 420 || jessi.x < 530) {
if (jessi.x > 710 || jessi.y < 450 || jessi.x < 650 || jessi.y > 510) {
if (jessi.x > 270 || jessi.y < 160 || jessi.x < 210 || jessi.y > 220) {
if (jessi.x > 550 || jessi.y < 200 || jessi.x < 490 || jessi.y > 260) {
if (jessi.x > 550 || jessi.y < 200 || jessi.x < 490 || jessi.y > 260) {
	// CRUZ ARRIBA
if (jessi.x > 510 || jessi.y < 280 || jessi.x < 380 || jessi.y > 340) {
if (jessi.x > 390 || jessi.y < 80 || jessi.x < 250 || jessi.y > 140) {
	// CRUZ ABAJO
if (jessi.x > 350 || jessi.y < 40 || jessi.x < 290 || jessi.y > 180) {
if (jessi.x > 470 || jessi.y < 240 || jessi.x < 410 || jessi.y > 380) {
	if (k == teclas.LEFT) {
	jessi.x -= jessi.vel;
		jessi.izq.name = jessi.izqURL[final];
		jessi.izq.src = jessi.izqURL[final];
	if (jessi.x <= -50 && jessi.y == 220) {
		jessi.x = 810;
		jessi.y += 10;
	}
	}
} } } } } } } } } } } } } } } } } } }
if (jessi.x <= 710  || jessi.x == 720 || jessi.y == 230) {
if (jessi.x < 40 || jessi.x > 70 || jessi.y < 40 || jessi.y > 100) { // PRIMER CUADRITO
if (jessi.x < 160 || jessi.y >140 || jessi.y < 30 || jessi.x > 220) { // BLOQUE SUPERIOR IZQUIERDA
if (jessi.x < 200 || jessi.x > 260 || jessi.y < 160 || jessi.y > 220) { // SEGUNDO CUADRITO 
if (jessi.x < 440 || jessi.x > 580 || jessi.y < 30 || jessi.y > 150) { // BLOQUE SUPERIOR DERECHA
if (jessi.x < 600 || jessi.x > 690 || jessi.y < 80 || jessi.y > 220) {
 // FIGURA ESQUINA SUPERIOR DERECHA
 // Espacio en Figura inferior izquierda
  if (jessi.x < 600 || jessi.x > 690 || jessi.y < 80 || jessi.y > 100) {
  if (jessi.x < 600 || jessi.x > 700 || jessi.y < 100 || jessi.y > 120) {
// CRUZ ARRIBA
if (jessi.x < 280 || jessi.x > 340 || jessi.y < 40 || jessi.y > 180) {
if (jessi.x < 240 || jessi.x > 360 || jessi.y < 80 || jessi.y > 140) {
  	// CRUZ ABAJO
if (jessi.x < 400 || jessi.x > 450 || jessi.y < 240 || jessi.y > 380) {
if (jessi.x < 370 || jessi.x > 510 || jessi.y < 280 || jessi.y > 340) {
  	// 3ER CUADRITO
if (jessi.x < 480 || jessi.x > 540 || jessi.y < 200 || jessi.y > 260) {
  	// 4TO CUADRITO
if (jessi.x < 640 || jessi.x > 700 || jessi.y < 450 || jessi.y > 510) {
  	// ESTRUCTURA INFERIOR IZQUIERDA
if (jessi.x < 160 || jessi.x > 290 || jessi.y < 410) {
  	// ESTRUCTURA INFERIOR DERECHA
if (jessi.x < 520 || jessi.x > 580 || jessi.y < 420) {
  	// HUECO DERECHO DEL TUNEL
if (jessi.x < 600 || jessi.y < 240 || jessi.y > 300) {
  	// HUECO ESTRUCTURA INFERIOR IZQUIERDA
if (jessi.x < 40 || jessi.x > 100 || jessi.y < 420 || jessi.y > 440) {
if (jessi.x < 50 || jessi.x > 100 || jessi.y < 440 || jessi.y > 470) {
	if (k == teclas.RIGHT) {
	jessi.x += jessi.vel;
		jessi.der.name = jessi.derURL[final];
		jessi.der.src = jessi.derURL[final];
	if (jessi.x >= 840 && jessi.y == 230) {
		jessi.x = -20;
		jessi.y -= 10;
	} }
} } } } } } } } } } } } } } } } } } }
	final++;
	if (final == 3) { final = 0 }
	pos = k;
robomovimiento(jessi.x, jessi.y);
	verificar();
	}
}


function jugar() {
var canvas = document.getElementById('juego');
juego = canvas.getContext("2d");

fondo.imagen = new Image();
fondo.imagen.src = fondo.fondoURL;
fondo.imagen.onload=function(){
	fondo.fondoOK = true;
	verificar();
};
robot.imagen = new Image();
robot.imagen.src = robot.imagenURL;
robot.imagen.onload=function(){
	robot.imagenOK = true;
	verificar();
};

for (var x=0; x < jessi.frenteURL.length; x++) {
	jessi.frente = new Image();
	jessi.frente.src = jessi.frenteURL[x];
	jessi.frente.name = jessi.frenteURL[x];
	jessi.frente.onload = verificar;
	jessi.frenteOK[x] = true;
}
for (var x=0; x < jessi.atrasURL.length; x++) {
	jessi.atras = new Image();
	jessi.atras.src = jessi.atrasURL[x];
	jessi.atras.name = jessi.atrasURL[x];
	jessi.atras.onload = verificar;
	jessi.atrasOK[x] = true;
}
for (var x=0; x < jessi.derURL.length; x++) {
	jessi.der = new Image();
	jessi.der.src = jessi.derURL[x];
	jessi.der.name = jessi.derURL[x];
	jessi.der.onload = verificar;
	jessi.derOK[x] = true;
}
for (var x=0; x < jessi.izqURL.length; x++) {
	jessi.izq = new Image();
	jessi.izq.src = jessi.izqURL[x];
	jessi.izq.name = jessi.izqURL[x];
	jessi.izq.onload = verificar;
	jessi.izqOK[x] = true;
}
robomovimiento(jessi.x, jessi.y);
document.addEventListener("keydown",tecla);
}
function verificar() {
if (jessi.frenteOK[0] && jessi.frenteOK[1] && jessi.frenteOK[2] && jessi.atrasOK[0] && jessi.atrasOK[1] && jessi.atrasOK[2] && jessi.derOK[0] && jessi.derOK[1] && jessi.derOK[2] && jessi.izqOK[0] && jessi.izqOK[1] && jessi.izqOK[2] && fondo.fondoOK && robot.imagenOK)
	{
	jessipos = jessi.frente;
	if (pos == teclas.UP) {
	jessipos = jessi.atras;
	}
	if (pos == teclas.DOWN) {
	jessipos = jessi.frente;
	}
	if (pos == teclas.LEFT) {
	jessipos = jessi.izq;
	}
	if (pos == teclas.RIGHT) {
	jessipos = jessi.der;
	}
	dibujar();
	}
}
function robomovimiento(ax, ay) {
	irax = ax;
	iray = ay;
	var direccion;
	if (irax == robot.x) {
		direccion = 1;
	}
	if (iray == robot.y) {
		direccion = 0;
	}
	else {
	direccion = Math.floor(Math.random() * 2); // ¿X ó Y?
	}
	if (direccion == 0) {
		if (irax > robot.x) {
			// DERECHA
if (robot.x <= 710  || robot.x == 720 || robot.y == 230) {
if (robot.x < 40 || robot.x > 70 || robot.y < 40 || robot.y > 100) {
if (robot.x < 160 || robot.y >140 || robot.y < 30 || robot.x > 220) {
if (robot.x < 200 || robot.x > 260 || robot.y < 160 || robot.y > 220) {
if (robot.x < 440 || robot.x > 580 || robot.y < 30 || robot.y > 150) {
if (robot.x < 600 || robot.x > 690 || robot.y < 80 || robot.y > 220) {
if (robot.x < 600 || robot.x > 690 || robot.y < 80 || robot.y > 100) {
if (robot.x < 600 || robot.x > 700 || robot.y < 100 || robot.y > 120) {
if (robot.x < 280 || robot.x > 340 || robot.y < 40 || robot.y > 180) {
if (robot.x < 240 || robot.x > 360 || robot.y < 80 || robot.y > 140) {
if (robot.x < 400 || robot.x > 450 || robot.y < 240 || robot.y > 380) {
if (robot.x < 370 || robot.x > 510 || robot.y < 280 || robot.y > 340) {
if (robot.x < 480 || robot.x > 540 || robot.y < 200 || robot.y > 260) {
if (robot.x < 640 || robot.x > 700 || robot.y < 450 || robot.y > 510) {
if (robot.x < 160 || robot.x > 290 || robot.y < 410) {
if (robot.x < 520 || robot.x > 580 || robot.y < 420) {
if (robot.x < 600 || robot.y < 240 || robot.y > 300) {
if (robot.x < 40 || robot.x > 100 || robot.y < 420 || robot.y > 440) {
if (robot.x < 50 || robot.x > 100 || robot.y < 440 || robot.y > 470) {
			robot.x += robot.vel;
} } } } } } } } } } } } } } } } } } }
}
		}
		if (irax < robot.x) {
			// IZQUIERDA
if (robot.x >= 40 || robot.x == 30 || robot.y == 220) {
if (robot.x > 400 || robot.y < 530 ) {
if (robot.x > 150 || robot.x < 70 || robot.y < 320 || robot.y > 470) {
if (robot.x > 140 || robot.y < 120 || robot.y > 180) {
if (robot.x > 110 || robot.x < 70 || robot.y > 100 || robot.y < 40) {
if (robot.x > 230 || robot.y > 140 || robot.x < 180) {
if (robot.x > 590 || robot.y > 150 || robot.x < 450) {
if (robot.x < 620 || robot.x > 700 || robot.y < 80 || robot.y > 100) {
if (robot.x < 620 || robot.x > 710 || robot.y < 100 || robot.y > 120) {
if (robot.x > 300 || robot.y < 410 || robot.x < 170) {
if (robot.x > 590 || robot.y < 420 || robot.x < 530) {
if (robot.x > 710 || robot.y < 450 || robot.x < 650 || robot.y > 510) {
if (robot.x > 270 || robot.y < 160 || robot.x < 210 || robot.y > 220) {
if (robot.x > 550 || robot.y < 200 || robot.x < 490 || robot.y > 260) {
if (robot.x > 550 || robot.y < 200 || robot.x < 490 || robot.y > 260) {
if (robot.x > 510 || robot.y < 280 || robot.x < 380 || robot.y > 340) {
if (robot.x > 390 || robot.y < 80 || robot.x < 250 || robot.y > 140) {
if (robot.x > 350 || robot.y < 40 || robot.x < 290 || robot.y > 180) {
if (robot.x > 470 || robot.y < 240 || robot.x < 410 || robot.y > 380) {
			robot.x -= robot.vel;
} } } } } } } } } } } } } } } } } } }
}
	// else {direccion=1}
	if (direccion == 1) {
		if (iray > robot.y) {
			// ABAJO
if (robot.y <= 520 && robot.x >= 20 && robot.x <= 740) {
if (robot.x > 390 || robot.y < 510 ) {
if (robot.x < 50 || robot.x > 100 || robot.y < 30 || robot.y > 100) {
if (robot.x > 130 || robot.y < 110 || robot.y > 180) {
if (robot.x < 210 || robot.x > 260 || robot.y < 150 || robot.y > 220) 
if (robot.x < 490 || robot.x > 540 || robot.y < 190 || robot.y > 260) {
if (robot.x < 650 || robot.x > 700 || robot.y < 440 || robot.y > 460) {
if (robot.x > 140 || robot.y < 310 || robot.y > 420) {
if (robot.x < 620 || robot.y < 230 || robot.y > 300) {
if (robot.x < 170 || robot.x > 290 || robot.y < 400) {
if (robot.x < 530 || robot.x > 580 || robot.y < 410) {
if (robot.x < 250 || robot.x > 380 || robot.y < 70 || robot.y > 140) {
if (robot.x < 290 || robot.x > 340 || robot.y < 30 || robot.y > 140) {
if (robot.x < 380 || robot.x > 500 || robot.y < 270 || robot.y > 340) {
if (robot.x < 410 || robot.x > 460 || robot.y < 230 || robot.y > 340) {
if (robot.x < 610 || robot.x > 690 || robot.y < 70 || robot.y > 220) {
if (robot.x < 700 || robot.x > 740 || robot.y < 110 || robot.y > 220) {
		robot.y += robot.vel;
} } } } } } } } } } } } } } } }
		}
		if (iray < robot.y) {
			// ARRIBA
if (jessi.y >= 40 && jessi.x >= 20 && jessi.x <= 780) {
if (jessi.y >190 || jessi.x > 130 || jessi.y < 120) {
if (jessi.y > 150 || jessi.x < 170 || jessi.x > 220) {
if (jessi.x < 50 || jessi.x > 100 || jessi.y > 110 ) {
if (jessi.x < 250 || jessi.x > 380 || jessi.y > 150 || jessi.y <= 70) {
if (jessi.x < 290 || jessi.x > 340 || jessi.y > 190) {
if (jessi.x < 450 || jessi.y > 160 || jessi.x > 580) {
if (jessi.x < 610 || jessi.y > 230 || jessi.y < 120) {
if (jessi.x < 490 || jessi.y > 270 || jessi.x > 540 || jessi.y < 200) {
if (jessi.x < 210 || jessi.y > 230 || jessi.x > 260 || jessi.y < 160) {
if (jessi.x < 380 || jessi.x > 500 || jessi.y > 350 || jessi.y <= 270) {
if (jessi.x < 410 || jessi.x > 460 || jessi.y > 390 || jessi.y < 310) {
if (jessi.x < 610 || jessi.y > 310 || jessi.y < 240) {
if (jessi.x < 650 || jessi.x > 700 || jessi.y < 450) {
if (jessi.x > 140 || jessi.y < 320 || jessi.y > 430) {
if (jessi.x > 140 || jessi.x < 70 || jessi.y > 480 || jessi.y < 440) {
if (jessi.x > 70 || jessi.x < 50 || jessi.y > 470 || jessi.y < 450) {
			robot.y -= robot.vel;
} } } } } } } } } } } } } } } } }
}
	}
	// else {
	// 	direccion=0;
	// }
	verificar();
}

function dibujar() {
	if (fondo.fondoOK) {
	juego.drawImage(fondo.imagen, 0, 0);
	}
	// DIBUJAR JESSI EN POSICION
	juego.drawImage(jessipos, jessi.x, jessi.y);

	// DIBUJAR AL ROBOT EN POSICION
	juego.drawImage(robot.imagen, robot.x, robot.y);
}




// CORRIENDO
		// if (jessi.atras.name == jessi.atrasURL[2])
		// {
		// 	jessi.atras.name = jessi.atrasURL[0];
		// 	jessi.atras.src = jessi.atrasURL[0];
		// }
		// else if (jessi.atras.name == jessi.atrasURL[0])
		// {
		// 	jessi.atras.name = jessi.atrasURL[1];
		// 	jessi.atras.src = jessi.atrasURL[1];
		// }
		// else if (jessi.atras.name == jessi.atrasURL[1])
		// {
		// 	jessi.atras.name = jessi.atrasURL[2];
		// 	jessi.atras.src = jessi.atrasURL[2];
		// }