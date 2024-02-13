// Exercice 7: Vérifier si un mot est un palindrome
function isPalindrome(str) {

    str = str.toLowerCase();

    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - i - 1]) {
            return false;
        }
    }
    return true;
}
var string1 = "kayak";

if (isPalindrome(string1)) {
    console.log( "palindrome");
} else {
    console.log("pas palindrome");
}
