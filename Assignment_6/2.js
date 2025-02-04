function Largest(n1, n2, n3){
    if (n1>=n2 && n1>=n3){
        return n1;
    }
    else if(n2>=n1 && n2 >=n3){
        return n2;
    }
    else{
        return n3;
    }
}

console.log(Largest(7,8,9))
