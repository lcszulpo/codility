function solution(n) {
    const binary = n.toString(2);
    
    let gap = 0;
    let counter = 0;
    let i = binary.length -1;
    
    while (binary[i] === '0') {
        i--;
    }
    
    for (;i >= 0; i--) {
        if (binary[i] === '1') {
            gap = Math.max(gap, counter)
            counter = 0;
        } else {
            counter++;
        }
    }
    
    gap = Math.max(gap, counter)
    
    return gap
}
