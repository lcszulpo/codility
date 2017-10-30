function solution(a) {
    let result = 0;
    
    for (i = 0; i < a.length; i++) {
        result ^= a[i];
    }
    
    return result;
}
