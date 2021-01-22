function megaFriend(names){

    var maxWord = names [0];
    
    for (var i = 0; i < names.length; i++){

      var element = names[i];

      if (element.length > maxWord.length){

        maxWord = element;

      }
      
    }
    return maxWord;
}

var result = megaFriend(["korim", "jamal", "sofi", "mohimenul", "talukder"]);
console.log(result);