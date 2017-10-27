
function solution(N) {
    const binary = Math.abs(N).toString(2);
    let currentMaximum = 0;
    let finalMaximum = 0;
    
    for (let i = 0; i < binary.length; i++) {
        currentMaximum = 0;
        
        while (binary[i] === '0') {
            ++currentMaximum && ++i;
        }
        
        finalMaximum = Math.max(finalMaximum, currentMaximum)
    }
    
    return finalMaximum
}
