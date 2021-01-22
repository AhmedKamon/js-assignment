     
     

    // kilometerToMeter--
function kilometerToMeter(kilometer){

    meter = kilometer * 1000;
    
    return meter;

}
    var meter = kilometerToMeter(10);
    
    // kilometerToMeter--

    
    // budgetCalculator--
    function budgetCalculator(watch, phone, laptop){
        
        var watchPrice = watch * 50;
        
        var phonePrice = phone * 100;
        
        var laptopPrice = laptop * 500;
       
        var total = watchPrice + phonePrice + laptopPrice;
        
        return total;

    }

    var total = budgetCalculator(5, 10, 3);
    
    // budgetCalculator--



   // hotelCost--

    function hotelCost(days){ 

        var hotelRent = 0;

        if ( days <= 10 ){
            rent = days * 100 ;
            
        } else if( days<= 20){

            var firstTenDays = 10 * 100;

            var remainingDays = days - 10;

            var secondTenDays = remainingDays * 80;

            rent = firstTenDays + secondTenDays;
            
        } 
        else{ 

            var firstTenDays = 10 * 100;

            var secondTenDays = 10 * 80;

            var remainingDays = days - 20;

            var thirdDays = remainingDays * 50;

            rent = firstTenDays + secondTenDays + thirdDays;
        }
    
        return rent;
    
    }
    var hotelRent = hotelCost(71);
    
    // hotelCost--


    // megaFriend--

  
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
      
       

     // megaFriend--

