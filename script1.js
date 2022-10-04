let challanges = ["What are the two types of Old English poetry?", "How many diphthongs are there in the English language?", "What is a female writer called?", "Supportive terms such as `oh` and `really` are called what?", "Where a speaker is completely blunt and direct (e.g. `Sit down!`) is called what?"]



let i = 0;




// let quest  = document.createElement('h2')
// let body = document.querySelector('body')
// quest.innerText = "What are the two types of Old English poetry?"
// body.appendChild('quest')

let questNum = 1

let quest = document.getElementById('challange')
quest.innerText = challanges[0]
let body = document.querySelector('body')
let newlabel1 = document.querySelector('#choice1')
let newlabel2 = document.querySelector('#choice2')
let newlabel3 = document.querySelector('#choice3')

function checkAns(ans, newquest, newchoices1, newchoices2, newchoices3){
   
        if(ans === true){
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
        document.querySelector('#block1').style.backgroundColor = 'rgba(0,0,0,0)'
        document.querySelector('#block2').style.backgroundColor = 'rgba(0,0,0,0)'
        document.querySelector('#block3').style.backgroundColor = 'rgba(0,0,0,0)'
        document.querySelector('#block4').style.backgroundColor = 'rgba(0,0,0,0)'
        document.querySelector('#block5').style.backgroundColor = 'rgba(0,0,0,0)'
        document.querySelector('#snowman').style.width = '70%'
        document.querySelector('#snowman').style.height = '52.5vw'
        let choices = document.getElementById('choices')
        choices.remove()
        let ans = document.getElementById('c3').checked
        checkAns(ans, null, null, null, null)
        
    }
    
}

function reset(){
    questNum = 1
    checkAns(true, challanges[0],
    'A. The heroic Germanic pre-Christian and the Christian',
    'B. Traditional and non-traditional',
    'C. classic and modern')

    document.querySelector('#block1').style.backgroundColor = 'rgba(0,0,0,0)'
    document.querySelector('#block2').style.backgroundColor = 'rgba(0,0,0,0)'
    document.querySelector('#block3').style.backgroundColor = 'rgba(0,0,0,0)'
    document.querySelector('#block4').style.backgroundColor = 'rgba(0,0,0,0)'
    document.querySelector('#block5').style.backgroundColor = 'rgba(0,0,0,0)'
    document.querySelector('#snowman').style.width = '35%'
    document.querySelector('#snowman').style.height = '26.5vw'

}

document.getElementById('check').addEventListener('click',action);
document.getElementById('reset').addEventListener('click',reset);






