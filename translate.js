var frase = "boa noite minha donzela, poderia me passar o seu zap?";
var grrs = ["grr","gRr","grR","gRR", "GRR", "GRr", "Grr", "grrr", "gRrr",
			 "grRr", "grrR", "gRRr", "gRrR", "gRRR", "GRRR", "Grrr", "GRrr",
			 "GrRr", "GrrR", "GRRr", "GRrR", "GrRR", "GrrR", "grrrr", "gRrrr", "GRRRR"];
var saida = "";


frase = frase.toLowerCase();

for(i=0; i<frase.length; i++){
	if(frase.charCodeAt(i) > 96 && frase.charCodeAt(i) < 123){
		saida = saida + grrs[frase.charCodeAt(i) - 97];
	}else{
		saida = saida + frase.charAt(i);
	}

}
console.log(frase);
console.log(saida);