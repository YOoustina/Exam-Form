var questions = [
  {
    question: "Who is the founder of Microsoft?",
    choices: ["Diwali", "Andrew will", "Bill Gates", "Marconi"],
    answer: 2
  },

  {
    question: "How many strings does a violin have",
    choices: ["5", "6", "3", "4"],
    answer: 3
  },
  {
    question: "Which is the smallest continent in the world?",
    choices: ["Africa", "Australia", " South Amirca", "Florida"],
    answer: 1
  },

  {
    question: "the capital of United Kingdom is:",
    choices: ["Manchester", "Birmingham", "London", "Florida"],
    answer: 2
  },

  {
    question: "the capital of United States is:",
    choices: ["California", "New York", "Miami", "Florida"],
    answer: 1
  },
  {
    question: "Which language is used by the computer to process data?",
    choices: ["English", "Binary ", "Indian", "Arabic"],
    answer: 1
  },
  {
    question: "Which is the tallest mountain in the world?",
    choices: ["Mount Everest", "Sant Chathrin", "Florida", "Pacific Ocean"],
    answer: 0
  },
  {
    question: " Which is the principal source of energy for earth",
    choices: ["Water", "Sun", "Air", "Food"],
    answer: 2
  },
  {
    question: "How many lungs does the human body have",
    choices: ["2", "3", "1", "Don`t have any"],
    answer: 0
  },
  {
    question: "Which animal is called King of Jungle",
    choices: ["Monkey", "Zibra", "Bird", "Lion"],
    answer: 3
  }

];
////////////////////// random numders /////////////////////////////
var arr = [];
while (arr.length < 10) {
  var r = Math.floor(Math.random() * 10);
  if (arr.indexOf(r) === -1) {
    arr.push(r)
  }
}



//////////////////////////// Random Question ////////////////////////////////////

var numQ = 0;

function ShowQuestion(numQ = 0) {

  document.querySelector(".question").innerHTML = questions[arr[numQ]].question;
  var choice = questions[numQ].choices;
  for (var i = 0; i < choice.length; i++) {
    document.querySelector("#ch-" + i).innerHTML = questions[arr[numQ]].choices[i]


  }
  // if (numQ=5) {

  //   document.getElementById("next").style.backgroundColor="red"
  // }

}

ShowQuestion();
//////////////////////////// next btn  /////////////////////////////
document.getElementById("next").addEventListener("click", nextQ)

function nextQ() {

  if (numQ < arr.length - 1) {

    ShowQuestion(++numQ)
    // if (numQ=5) {

    //   document.getElementById("next").style.backgroundColor="red"
    // }

  }
  
 

}




//////////////////////// prev btn ///////////////////////////////

document.getElementById("prev").addEventListener("click", prevQ)

function prevQ() {

  if (numQ > 0) {
    ShowQuestion(--numQ)


  }
}
///////////////////////////// 1 2 3 4 5 btn  ////////////////////////////////////////////////////
var NoOfQ = document.querySelectorAll(".noQue")

NoOfQ.forEach(function (curr) {
  // console.log(curr)
  curr.addEventListener("click", function (e) {
    // console.log(this)
    var split = this.id.split('-')
    var indexx = split[1]
    if (e.target === this) {
      document.querySelector(".question").innerHTML = questions[arr[indexx]].question;
      numQ = parseInt(indexx);
      // console.log(numQ)
      var choice = questions[indexx].choices;
      for (var i = 0; i < choice.length; i++) {
        document.querySelector("#ch-" + i).innerHTML = questions[arr[indexx]].choices[i]

      }

    }

  });

});



///////////////////////////// falg  btn ////////////////////////////////
document.querySelector("#flag").addEventListener("click", flagQ)
var mark = []
// var fl = false;

function flagQ() {
if(mark.includes(numQ)){
 console.log("pused before")
}
else{
  mark.push(numQ);
}
  console.log(mark)
  document.querySelector("#flagNo-" + numQ).style.backgroundColor = "teal"

}

////////////////////////// un Answerd Question ///////////////////////////////////////////
var NoOfQ = document.querySelectorAll(".flagNo")

NoOfQ.forEach(function (curr) {
  curr.addEventListener("click", function (e) {
    var split = this.id.split('-')
    var indexx = split[1]
    if (e.target === this) {
      numQ = parseInt(indexx);
      document.querySelector(".question").innerHTML = questions[arr[indexx]].question;
      var choice = questions[indexx].choices;
      for (var i = 0; i < choice.length; i++) {
        document.querySelector("#ch-" + i).innerHTML = questions[arr[indexx]].choices[i]

      }

    }
    document.querySelector("#flagNo-" + numQ).style.backgroundColor = "gray"
    console.log(mark)

    var index =mark.indexOf(numQ) ;
    if ( index> -1) {
      mark.splice(index,1)
      
    }
console.log(mark)

  });

});


///////////////////////////// check ////////////////////////
var checks = document.querySelectorAll(".answer")
var result = 0;
checks.forEach(function (curr) {

  curr.addEventListener("click", function (e) {
    var split = this.id.split('-')
    var indexx = split[1]
    if (e.target === this) {




    }

  });

});
