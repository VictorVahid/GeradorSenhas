function ArrayAscii(charA, charZ) {
	var a = [],
		i = charA.charCodeAt(0),
		j = charZ.charCodeAt(0);
	for (; i <= j; i++) {
		a.push(String.fromCharCode(i));
	}
	return a;
}

const letrasMaiusculas = ArrayAscii("A", "Z");
const letrasMinusculas = ArrayAscii("a", "z");
const numeros = ArrayAscii("0", "9");
const simbolos = [
	"!",
	"@",
	"#",
	"$",
	"%",
	"&",
	"*",
	"(",
	")",
	"-",
	"_",
	"+",
	"=",
	"[",
	"]",
	"{",
	"}",
	"|",
	";",
	":",
	"'",
	",",
	".",
	"/",
	"?",
	"\\",
];
const caracteresPermitidos = letrasMaiusculas.concat(
	letrasMinusculas,
	numeros,
	simbolos
);
function indiceAleatorio(caracteresPermitidos) {
	return Math.floor(Math.random() * caracteresPermitidos.length);
}

function senha(numeroMax) {
	let s = [];
	if (numeroMax <= 5) {
		return "Entrada Inválida";
	}
	for (let i = 0; i < numeroMax; i++) {
		let indice = indiceAleatorio(caracteresPermitidos);
		s.push(caracteresPermitidos[indice]);
		// console.log(s)
	}
	return s.join("");
}

function displayPassword() {
	const tamanhoInput = document.getElementById("tamanho");
	const tamanho = Number(tamanhoInput.value);
	senhaGerada = senha(tamanho);
	document.getElementById("senha").innerHTML = senhaGerada;
}

document.getElementById("gerar").addEventListener("click", displayPassword);
