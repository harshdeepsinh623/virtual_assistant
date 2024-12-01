let btn = document.querySelector("#btn")
let content = document.querySelector("#content")
let voice = document.querySelector("#voice")

function speak(text){
    let text_speak = new SpeechSynthesisUtterance(text)
    text_speak.rate = 1
    text_speak.pitch = 1
    text_speak.volume = 1
    text_speak.lang = "hi-GB"
    window.speechSynthesis.speak(text_speak)
}

function wishMe(){
    let day = new Date()
    let hours = day.getHours()
    
    if(hours>=0 && hours<12){
        speak("Good Morning")
    }

    else if(hours>=12 && hours<16){
        speak("Good Afternoon")
    }

    else{
        speak("Good Evening")

    }
}

window.addEventListener('load',()=>{
    wishMe()
})

let speech_recognition = window.SpeechRecognition || window.webkitSpeechRecognition

let recognition = new speech_recognition()

recognition.onresult=(event)=>{

    let currentIndex= event.resultIndex
    let transcript = event.results[currentIndex][0].transcript
    content.innerText = transcript
    takeCommand(transcript.toLowerCase())
}

btn.addEventListener("click",()=>{
    recognition.start()
    btn.style.display = "none"
    voice.style.display = "block"
})

function takeCommand(message){
    btn.style.display = "flex"
    voice.style.display = "none"

    if(message.includes("hello")||message.includes("hey")){
        speak("hello sir,what can i help you?")
    }
    else if(message.includes("Who are you")){
        speak("i am virtual assistant, created by harshdeepsinh Gohil")
    }
    else if(message.includes("open youtube")){
        speak("Opening youtube...")
        window.open("https://www.youtube.com","_blank")
    }
    else if(message.includes("open google")){
        speak("Opening google...")
        window.open("https://www.google.com","_blank")
    }
    else if(message.includes("open facebook")){
        speak("Opening facebook...")
        window.open("https://www.facebook.com","_blank")
    }
    else if(message.includes("open instagram")){
        speak("Opening instagram...")
        window.open("https://www.instagram.com","_blank")
    }
    else if(message.includes("open calculator")){
        speak("Opening calculator...")
        window.open("calculator://")
    }
    else if(message.includes("open whatsapp")){
        speak("Opening whatsapp...")
        window.open("https://web.whatsapp.com/","_blank")
    }
    else if(message.includes("open snapchat")){
        speak("Opening snapchat...")
        window.open("https://web.snapchat.com/","_blank")
    }
    else if(message.includes("time")){
        let time = new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
        speak(time)
    }
    else if(message.includes("date")){
        let date = new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
        speak(date)
    }
    else{
        let finalText = "this is a what i found on internet regarding"+message.replace("nova","") || 
        message.replace("Noah","")
        speak(finalText)
        window.open(`https://www.google.com/search?q=${message.replace("Noah","")}`, "_blank")
    }
 }