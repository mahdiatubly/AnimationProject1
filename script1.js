//The questions list
let challanges = ["What are the two types of Old English poetry?", "How many diphthongs are there in the English language?", "What is a female writer called?", "Supportive terms such as `oh` and `really` are called what?", "Where a speaker is completely blunt and direct (e.g. `Sit down!`) is called what?"]

//A global var. used to follow the question number
let questNum = 1

//A global var. used to define the wining and losing conditions
let counter = 0

//Running music in the game background
let myMusic= document.getElementById("music")
myMusic.play();

//Grapping the question's box and setting the first question
let quest = document.getElementById('challange')
quest.innerText = challanges[0]

//Grapping the body of the page and the labels of the choices buttons
let body = document.querySelector('body')
let newlabel1 = document.querySelector('#choice1')
let newlabel2 = document.querySelector('#choice2')
let newlabel3 = document.querySelector('#choice3')

/*This is a void function uses to check the user's answers and remove a 
  part of the snowman picture if the answer is wrong.
    @return: -
    @parameters:
        - ans: a boolean value returned by checking if the box of the correct
          answer chose or not 
        - newquest: the next question
        - newchoices1: the first choice providede to the new question
        - newchoices2: the second choice providede to the new question
        - newchoices3: the third choice providede to the new question*/    
function checkAns(ans, newquest, newchoices1, newchoices2, newchoices3){
        if(ans === true){
            counter += 1
            quest.innerText = newquest
            newlabel1.innerText = newchoices1
            newlabel2.innerText = newchoices2
            newlabel3.innerText = newchoices3
        }
        else{
            quest.innerText = newquest
            newlabel1.innerText = newchoices1
            newlabel2.innerText = newchoices2
            newlabel3.innerText = newchoices3
            document.querySelector(`#block${6-questNum}`).style.backgroundColor = 'black'
        }
}

/*This is a void function uses to respond to clicking the check button.
    @return: -
    @parameters: -
*/ 
function action(){
    if(questNum === 1){
        let ans = document.getElementById('c1').checked
        checkAns(ans, challanges[1], '5', '6', '8')
        questNum += 1
    }
    else if(questNum === 2){
        let ans = document.getElementById('c3').checked
        checkAns(ans, challanges[2], 'Authoress', 'Authorest', 'Behn')
        questNum += 1
    }
    else if(questNum === 3){
        let ans = document.getElementById('c1').checked
        checkAns(ans, challanges[3], 'Backchannelling', 'Supportives', 'pairs')
        questNum += 1
    }
    else if(questNum === 4){
        let ans = document.getElementById('c1').checked
        checkAns(ans, challanges[4], 'Rude', 'Direct Person', 'Bald on-record')
        questNum += 1
    }
    else if(questNum === 5){
        let ans = document.getElementById('c3').checked
        checkAns(ans, null, null, null, null)
        questNum += 1
    }
    else if(questNum === 6){
        console.log(counter)
        if(counter >= 3){
            let link = document.querySelector('#link')
            link.href = "win.html"
        }
        else{
            let link = document.querySelector('#link')
            link.href = "lose.html"
        }   
    }
}

/*This is a void function uses to respond to clicking the reset button.
  The function will return the game to the first question and return
  the full snowman's picture.
    @return: -
    @parameters: -
*/ 
fun
function reset(){
    questNum = 1
    counter = 0
    checkAns(true, challanges[0],
    'A. The heroic Germanic pre-Christian and the Christian',
    'B. Traditional and non-traditional',
    'C. classic and modern')

    document.querySelector('#block1').style.backgroundColor = 'rgba(0,0,0,0)'
    document.querySelector('#block2').style.backgroundColor = 'rgba(0,0,0,0)'
    document.querySelector('#block3').style.backgroundColor = 'rgba(0,0,0,0)'
    document.querySelector('#block4').style.backgroundColor = 'rgba(0,0,0,0)'
    document.querySelector('#block5').style.backgroundColor = 'rgba(0,0,0,0)'
    document.querySelector('.snowman').style.width = '35%'
    document.querySelector('.snowman').style.height = '26.5vw'
    document.querySelector('#block3').style.margin = '0 0 0 0'
    document.querySelector('#block3').innerText = null

    document.querySelector('#block1').style.border = '.25vw solid'
    document.querySelector('#block2').style.border = '.25vw solid'
    document.querySelector('#block3').style.border = '.25vw solid'
    document.querySelector('#block4').style.border = '.25vw solid'
    document.querySelector('#block5').style.border = '.25vw solid'

    document.querySelector('.snowman').removeAttribute('id')
    let link = document.querySelector('#link')
    link.href = '#'
}

//Adding listeners to the buttons of the game.
document.getElementById('check').addEventListener('click',action);
document.getElementById('reset').addEventListener('click',reset);






