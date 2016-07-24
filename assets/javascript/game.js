// variables
var win = 0;
var lose = 0;
var otherNum = [39, 44, 40, 55];
var chosenNumber = otherNum[Math.floor(Math.random() * otherNum.length)];
var numbers = [10,11,5,2];
var numbers = numbers.sort(function(){return 0.5 - Math.random()});
var images = ["assets/images/gem_1.jpg", "assets/images/gem_2.jpg", "assets/images/gem_3.jpg", "assets/images/gem_4.jpg",]
var counter = 0;
$('#winNumber').text(chosenNumber);

  for (var i=0; i< numbers.length; i++){

      var imageCrystal = $('<img>');
      
      imageCrystal.attr('data-num', numbers[i]);

      imageCrystal.attr('src', images[i]);

      imageCrystal.attr('alt', 'crystals');

      imageCrystal.addClass('crystalImage');

      $('#crystals').append(imageCrystal);
    } 

function shuffle () {
  numbers = numbers.sort(function(){return 0.5 - Math.random()});
  console.log(numbers.length)
  console.log(numbers)
  // for (var i=0; i< numbers.length; i++){ 
  //   $("#crystals img").attr('data-num', numbers[i]);
  // }
}

  
    $('.crystalImage').on('click', function(){
      counter = counter + parseInt($(this).data('num'));
      
      $('#score').text(counter);

      if (counter == chosenNumber){
        alert('You won!!!!');
        win++;
    		counter = 0;
    		$('#win').text(win);
    		chosenNumber = otherNum[Math.floor(Math.random() * otherNum.length)];
    		$('#winNumber').text(chosenNumber);
        shuffle();
        
      } else if( counter > chosenNumber){
      	lose++;
    		counter = 0;
    		$('#lose').text(lose);
    		chosenNumber = otherNum[Math.floor(Math.random() * otherNum.length)];
    		$('#winNumber').text(chosenNumber);
        alert('You lost!');
        shuffle();
      }
    });
      
      $('#winNumber').text(chosenNumber);
