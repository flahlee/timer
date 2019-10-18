$(document).ready(function() {

	
    // 	CURRENT DATE
        var currentDate = new Date();
        var month = currentDate.getMonth() + 1;
        var day = currentDate.getDate();
        var year = currentDate.getFullYear();
        var fullDate = month + "/" + day + "/" + year;
        document.getElementById('current-date').innerHTML = fullDate;
        
        
        
    //TIMER
        
        
    // CLOCK FUNCTIONALITY STARTS HERE
    let seconds = 0;
    let minutes = 0;
    let hours = 0;
    
    let displaySeconds = 0;
    let displayMinutes = 0;
    let displayHours = 0;
    
    let interval = null;
    
    let status = "stopped";
    
    function stopWatch() {
    
        seconds++;
    
        if(seconds / 60 === 1) {
            seconds = 0;
            minutes++;
    
            if(minutes / 60 === 1) {
                minutes = 0;
                hours++;
            }
        }
    
        if(seconds < 10) {
            displaySeconds = "0" + seconds.toString();
        }
        else {
            displaySeconds = seconds;
        }
    
        if(minutes < 10) {
            displayMinutes = "0" + minutes.toString();
        }
        else {
            displayMinutes = minutes;
        }
    
        if(hours < 10) {
            displayHours ="0" + hours.toString();
        }
        else {
            displayHours = hours;
        }
    
    
        document.getElementById('display').innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds;
    }
        
    function startStop() {
    
        if(status === "stopped") {
    
            
            interval = window.setInterval(stopWatch, 1000);
            status = "started";
        }
        else {
            window.clearInterval(interval);
            status = "stopped";
        }
    }
    
    let startStopButton = document.getElementById("startStop");
    startStopButton.onclick = startStop;
        
    // CLOCK FUNCTIONALITY ENDS HERE
        
        
        
        
    
            var addBtn = document.getElementById('submit-user');
            var addUser = document.getElementById('add-user');
        
        
            function addNewUser() {
                
            
            const usersContainer = document.getElementById('users-container');
            const userBox = document.getElementById('user-box');
            const user = document.querySelector('.user');
            const list = document.querySelector('.list');
            const time = document.querySelector('.time');
            
            let newUser = addUser.value;
            let text = document.createTextNode(newUser);
    
            let startStopBtn = document.getElementById('startStop');
            let myDisplay = document.getElementById('display');
            
            const newDiv = document.createElement('div');
            const pList = document.createElement('p');
            const pTime = document.createElement('p');
            
            pList.classList.add('list');
            pList.setAttribute('id', 'startStop');
            pList.innerHTML = newUser;
            pTime.classList.add('time');
            pTime.setAttribute('id', 'display');
             pTime.innerHTML = '00:00:00';
            
            
            newDiv.classList.add('user');
            newDiv.appendChild(pList);
            newDiv.appendChild(pTime);
            userBox.appendChild(newDiv);
            console.log(newDiv);
                
                
                
                
    // CLOCK FUNCTIONALITY STARTS HERE
    let seconds = 0;
    let minutes = 0;
    let hours = 0;
    
    let displaySeconds = 0;
    let displayMinutes = 0;
    let displayHours = 0;
    
    let interval = null;
    
    let status = "stopped";
    
    function stopWatch() {
    
        seconds++;
    
        if(seconds / 60 === 1) {
            seconds = 0;
            minutes++;
    
            if(minutes / 60 === 1) {
                minutes = 0;
                hours++;
            }
        }
    
        if(seconds < 10) {
            displaySeconds = "0" + seconds.toString();
        }
        else {
            displaySeconds = seconds;
        }
    
        if(minutes < 10) {
            displayMinutes = "0" + minutes.toString();
        }
        else {
            displayMinutes = minutes;
        }
    
        if(hours < 10) {
            displayHours ="0" + hours.toString();
        }
        else {
            displayHours = hours;
        }
    
    
        pTime.innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds;
    }
        
    function startStop() {
    
        if(status === "stopped") {
    
            
            interval = window.setInterval(stopWatch, 1000);
            status = "started";
            pList.style.background = "green";
        }
        else {
            window.clearInterval(interval);
            status = "stopped";
            pList.style.background = "#333";
        }
    }
    
    pList.onclick = startStop;
        
    // CLOCK FUNCTIONALITY ENDS HERE
            
        }
            
        
    
            addBtn.onclick = addNewUser;
            
    
            
    
        
        
    });