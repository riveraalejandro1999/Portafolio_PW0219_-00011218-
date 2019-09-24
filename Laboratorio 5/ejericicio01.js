function arrayDatos(array) {
    var miFuncion =0; 
    let sum=0;
    let promedio =0;
    for(let i=0; i<array.length;i++){
        switch(typeof array[i]){
            case 'function':
            miFuncion++;
        }
    }
     console.log (miFuncion);
}