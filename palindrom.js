function palindrome(str){
    var str = str.split("");
    var str = str.filter(function (sp) {return sp != " ";});
    var palindrome = [];
    var pi = 0;
    for (var i = str.length-1; i > -1; i--, pi++){
        palindrome[pi] = str[i];
    }
    if (palindrome.toString()==str.toString()){
        return true;
    } else {
        return false;
    }
}
console.log(palindrome('never odd or even'));   //Return true
console.log(palindrome('madam adam'));          //Return true
console.log(palindrome('eye'));                 //Return true
console.log(palindrome('race car'));            //Return true
console.log(palindrome('race cars'));           //Return false