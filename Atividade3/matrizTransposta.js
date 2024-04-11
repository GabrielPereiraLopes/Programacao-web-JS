const A = [
          [1,2],
          [3,4],
          [5,6]
];

function transporMatriz(A){
    Matriz = '';
    for(let i = 0; i < A.length; i++){
        for(let j = 0; j < A[i].length; j++){
            Matriz += A[i][j] + ' ';
        }
        Matriz += '\n';
    }

    console.log(Matriz);

    
    NovaMatriz = '';
    for(let j = 0; j < A[0].length; j++){
        for(let i = 0; i < A.length; i++){
            NovaMatriz += A[i][j] + ' ';
        }
        NovaMatriz += '\n';
    }
    console.log(NovaMatriz);

}

transporMatriz(A);