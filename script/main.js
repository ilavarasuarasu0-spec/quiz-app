
         
        const quizData = [
        {
          question: "Which language runs in a web browser?",
          options: ["Java", "C", "Python", "JavaScript"],
          answer: "JavaScript",
        },
        {
          question: "What does CSS stand for?",
          options: [
            "Central Style Sheets",
            "Cascading Style Sheets",
            "Computer Style Sheets",
            "Creative Style System",
          ],
          answer: "Cascading Style Sheets",
        },
        {
          question: "What does HTML stand for?",
          options: [
            "HyperText Markup Language",
            "HyperText Markdown Language",
            "Hyper Transfer Markup Language",
            "Home Tool Markup Language",
          ],
          answer: "HyperText Markup Language",
        },
        {
          question: "Which year was JavaScript launched?",
          options: ["1996", "1995", "1994", "None of the above"],
          answer: "1995",
        },
      ];
      const question=document.getElementById("question")
      const options=document.getElementById("options")
      const result=document.getElementById("result")
      const next=document.getElementById("next")
      let score=0
      let display=0
      function loadquestion(){
        const data=quizData[display]
        console.log(data)
        console.log(data.question)
        question.innerText=data.question
        options.innerHTML=""
        for(let i=0;i<=data.options.length-1;i++){
            console.log(data.options[i])
            const button=document.createElement("button")
            button.innerText=data.options[i]
            button.addEventListener("click",()=> selectanswer(data.options[i]));
            console.log(button)
            options.appendChild(button)
        }
      }
      loadquestion()
      function selectanswer(value){
       
        console.log(value)
        const correctanswer=quizData[display].answer
        if(value==correctanswer){
            score++
            console.log(score)

        }
      console.log(options.children[0].innerText)
      for(let i=0;i<=options.children.length-1;i++){
        options.children[i].disabled=true
        if(options.children[i].innerText==correctanswer){
            console.log(value,correctanswer)
            options.children[i].style.background="#4caf50"
        }else if(options.children[i].innerText==value)
        {
           options.children[i].style.background="#f44336"
        }
      }

    }
    next.addEventListener("click",()=>{
        display++
        if(quizData.length>display){
            loadquestion()
        }else{
            console.log(score)
            showscore()
        }
    })
    function showscore(){
        question.style.display="none"
        options.style.display="none"
        next.style.display="none"
        result.innerText=`your score is ${score}`
    }
     