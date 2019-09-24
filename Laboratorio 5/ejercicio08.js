
 function binario() {
     
 let decimal = 255; // Este número lo iremos convirtiendo a todas las bases
 
 // Decimal a binario
 let decimalEnBinario = decimal.toString(2); // A la base 2
 console.log("El número decimal %s en binario es %s", decimal, decimalEnBinario);
 
 // Decimal a octal
 let decimalEnOctal = decimal.toString(8); // A la base 8
 console.log("El número decimal %s en octal es %s", decimal, decimalEnOctal);
 
 // Decimal a hexadecimal
 let decimalEnHexadecimal = decimal.toString(16); // A la base 16
 console.log("El número decimal %s en hexadecimal es %s", decimal, decimalEnHexadecimal);
 }