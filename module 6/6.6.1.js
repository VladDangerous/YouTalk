function checkPalindrome(word){
    let cleanedWord = '';
        for (let i =0; i < word.length; i++){
            if (word[i] !== " "){
                cleanedWord += word[i].toLowerCase();
            }
        }

        let reverseWord = '';
        for(let i = cleanedWord.length - 1; i >= 0; i--){
            reverseWord += cleanedWord[i];
        }

        if(cleanedWord === reverseWord){
            console.log("Слово " + word + " является палиндромом");
        }
        else{
            console.log("Слово " + word + " не является палиндромом")
        }
}

checkPalindrome("Довод");
checkPalindrome("Сантимент");