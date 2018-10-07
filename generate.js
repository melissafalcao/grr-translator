var init = [0,0,0,0,0];
var tam  = 5;
var frase= "";
for(i=0; i<27; i++){
  init = nextAssignment(i, 5);
  for(j=0; j<5;j++){
    if(init[j] == 0){
      frase = frase+ "r";
    }else{
      frase = frase + "R";
    }
  }
  console.log(frase);
  frase = "";
}


function nextAssignment(currentAssignment, tam) {
  //recebe um numero inteiro, referente a atual tentativa
  //numa ordem de 2^n, sendo n o numero de variaveis
  var bin = decpbin(currentAssignment) // pego esse inteiro e trago para binario
  newAssignment = []
  for(j=0; j<tam; j++){
   newAssignment[j] =  0
  }

  var tambin = bin.length
  while(tambin>0){
    newAssignment[tam-1] = parseInt(bin.charAt(tambin-1))
  tambin--
  tam--
  }//coloco os chars desse binario em um array

  return newAssignment
}


function decpbin(a) {
      //transforma decimal para binario 
    if (a == 0) {
      return "0";
    } else if (a == 1) {
      return "1";
    } else if (a / 2 == 1) {//casos base
      return "1" + (a % 2);
    } else if (a % 2 == 1) { // vou dividindo o numero e concatenando seus restos até chegar ao caso base
      return decpbin(Math.floor(a / 2)) + "1";
    } else {
      return decpbin(Math.floor(a / 2)) + "0";
    }
  }