
function ageInDays(){
  var birthyear = prompt('what year were you born... good friend');
  var ageInDayss = (2018 - birthyear) * 365;
  var h1 = document.createElement('hi');
  var textAnswer = document.createTextNode('You are'+ ageInDays +'days old',);
  h1.setAttribute('id','ageIndays');
  h1.appendChild(textAnswer);
  document.getElementById('flex-box-result').appendChild(h1);
  console.log(ageInDayss);
}

//challenge 2:
function generateCat() {
  var image = document.createElement( 'img');
  var div = document.getElementById('flex-cat-gtn');
  image.src = "./asset/img/download.jpeg"
  div.appendChild(image);
}

function rpsGame(yourchoice) {
  console.log(yourchoice);
  var humanchoice, botchoice;
  humanchoice = yourchoice.id;
  botchoice = numberTochoice(randToRpsInt());
  console.log('computer choice:', botchoice);
  results = decideWinner(humanchoice, botchoice); // (0,1) human lost / bot won
  console.log(results);
  massage = finalMassage(results)  //{'massage': 'you won', 'color': 'green'}
  //srpsFrontEnd(yourchoice.id, botchoice, massage);
}

function randToRpsInt() {
  return Math.floor(Math.random() * 3);
}
  function numberTochoice(number) {
    return ['rock', 'paper', 'scissors'][number];
  }

  function decideWinner(yourChoice, computerChoice) {
    var rpsDatabase = {
      'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
      'paper': {'rock': 1, 'paper': 0.5, 'scissors': 0},
      'scissors': {'paper': 1, 'scissors': 0.5, 'rock': 0},
    };

    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];

    return [yourScore, computerScore];
  }

  function finalymassage([yourscore, computerscore]) {
    if (yourscore === 0) {
      return {'massage': 'you lost!', 'color': 'red'};
    }else if (yourscore === 0,5) {
        return {'massage': 'you tied', 'color': 'yollow'};
      }else {
          return {'massage': 'you won', 'color': 'green'};
        }
      }
