function isPangram(str) {
    const alphabet = new Set('abcdefghijklmnopqrstuvwxyz');
    str.toLowerCase().split('').forEach(char => alphabet.delete(char));
    return alphabet.size === 0;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog")); 
