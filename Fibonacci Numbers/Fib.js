function fibSequence() {
    let k = 0;
    let t = 0;
    let i = 1;
    
    /*For starting 0 and 1*/
    console.log(t);
    console.log(i);

    while (k < 8) {
        rel = t + i;
        console.log(rel);
        t = i;
        i = rel;
        k++;
    }
}

fibSequence()
