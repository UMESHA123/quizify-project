let readlineSync = require("readline-sync");
let kuler = require("kuler")

//take user name
const userName = readlineSync.question(kuler("Enter your name:-","#eab308"))

console.log(kuler(`Hello ${userName} wellcome to Quizify.. `,"#06b6d4"))

let score = 0;
//creating data set.

const database = {
    category1 : {
        name : "javascript",
        data : [
            {
question : `let a = {}, b = {}
    console.log(a==b);
    console.log(a===b);
    `,
                options : {
                    a : 'false false',
                    b : 'false true',
                    c : 'true false',
                    d : 'true true'
                },
                correctAnswer : 'a'
            },
            {
question : `Object.assign(target,source) 
    creates which type of copy?`,
                options : {
                    a : 'Deep copy',
                    b : 'Shallow copy',
                    c : 'Nested copy',
                    d : 'New Reference'
                },
                correctAnswer : 'b'
            },
            {
question : `Is method chaining possible 
    with forEach method?`,
                options : {
                    a : 'Yes',
                    b : 'No',
                },
                correctAnswer : 'b'
            }
        ]
    }    
}

//leader-board
let leaderBoard = {
    data : [
        {
            name : "Ram",
            score : 1,
            
        },
        {
            name : "suresh",
            score : 2
        },
        {
            name : 'ramesh',
            score : 3
        },
    ]
}

function playGame(userAns, correctAnswer){
    if(userAns === correctAnswer){
        score = score + 1;
        console.log("\ncorrect answer\n")
    }else{
        console.log("\nIncorrect answer");
        console.log(`correct answer is ${correctAnswer}`)
    }
}
function addToLeaderBoard(userName,score){
    leaderBoard.data.push({name :userName,score: score});
    leaderBoard.data.sort((a,b) => b.score - a.score)
}
function printLeaderBoard(leaderBoard){
console.log(kuler("==========================","#fbbf24"));

    for(let user of leaderBoard.data){
        let space = 20 - user.name.length;
        let extraSpace = '';
        for(let i=0;i<space;i++){
            extraSpace = extraSpace + "-"
        }

        console.log(kuler(`|${user.name}`+extraSpace+`>${user.score} |`,"#fbbf24"))
    }
console.log(kuler("==========================","#fbbf24"));

}

function showQuestionAndOption(){
    
    for(let i=0;i<database.category1.data.length;i++){
        console.log(kuler(`Q${i+1} - ${database.category1.data[i].question}\n`,"#d946ef"))
        for(let key in database.category1.data[i].options){
            console.log(kuler(`${key} - ${database.category1.data[i].options[key]}`,"#f9a8d4"));
        }
        console.log("\n")

        //taking user ans for each qutions
        let userAns = readlineSync.question("Enter your answer(a/b/c/d):-").toLowerCase()
        //console.log(userAns)
        playGame(userAns,database.category1.data[i].correctAnswer);
        
    }
    addToLeaderBoard(userName,score);
    printLeaderBoard(leaderBoard);
}
showQuestionAndOption()
console.log(kuler("==========================","#fbbf24"));
console.log(`${userName} scored - ${score}`);
console.log(kuler("==========================","#fbbf24"));

