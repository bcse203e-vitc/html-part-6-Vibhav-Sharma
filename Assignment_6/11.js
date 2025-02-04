function countVowelsAndConsonants(str) {
    const vowels = str.match(/[aeiou]/gi)?.length || 0;
    const consonants = str.match(/[bcdfghjklmnpqrstvwxyz]/gi)?.length || 0;
    return { vowels, consonants };
}

console.log(countVowelsAndConsonants("JavaScript"));
