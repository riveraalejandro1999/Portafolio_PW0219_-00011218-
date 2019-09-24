function arrayDatos(array) {
    let sum=0;
    let promedio =0;
    for(let i=0; i<array.length;i++){
    sum=sum+ array[i];
    promedio=sum/array.length;
    }
    console.log('La suma es: ' + sum);
    console.log('EL promedio es: '+ promedio);
}