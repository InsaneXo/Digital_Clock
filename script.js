console.log("hello world")

const clock = () => {
    let time = new Date()
    let hrs = time.getHours()
    let min = time.getMinutes()
    let sec = time.getSeconds()
    let weeks = time.getDay()
    let date = time.getDate()
    let months = time.getMonth()
    let am_or_pm = document.getElementById('am-pm')


    let dayList = ["Sunday, ", "Monday, ", "Tuesday, ", "Wednesday, ", "Thursday, ", "Friday, ", "Saturday, "]
    let chooseDay = dayList[weeks]

    let monthsList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let chooseMonths = monthsList[months]
    
    
    
    if (hrs > 11){
        am_or_pm.innerHTML = "PM"
    }
    else{
        am_or_pm.innerHTML = "AM"
    }

    
    if (hrs > 12) {
        hrs = hrs - 12
        
        
    }
    else if (hrs == 0) {
        hrs = 12
        
    }
    


    hrs = hrs < 10 ? "0" + hrs : hrs
    min = min < 10 ? "0" + min : min
    sec = sec < 10 ? "0" + sec : sec
    date = date < 10 ? "0" + date : date




    document.getElementById('hrs').innerHTML = `${hrs} <br> Hours`
    document.getElementById('mins').innerHTML = `${min} <br> Mins`
    document.getElementById('secs').innerHTML = `${sec} <br> Secs`
    document.getElementById('weeks').innerHTML = chooseDay
    document.getElementById('date').innerHTML = date
    document.getElementById('month').innerHTML = chooseMonths


}


setInterval(() => {
    let currentTime = clock();
    document.getElementById('blink').classList.toggle('blink2')
    document.getElementById('blink4').classList.toggle('blink2')
}, 1000)









