const message = document.getElementById("message")
const btncolor = document.getElementById("btncolor")
const btn1 = document.getElementById("btn1")
const Profile = document.getElementById("profile")
const grade = document.getElementById("grade")
const sched = document.getElementById("sched")

// function showMessage(Text){
//     message.innerHTML = Text
// }	

// button.addEventListener(
//     "click",function(){
//         message.innerHTML = "Loading..."

//         setTimeout(function(){
//             message.innerHTML = "Welcome to JavaScript"},3000)
// })


// function showMessage(Text){
//     message.innerHTML = Text
// }

// button.addEventListener(
//     "click",function(){
//         message.innerHTML = "Loading..."

//         setTimeout(function(){
//             showMessage("Welcome to JavaScript")},3000)
// })



function loadMessage(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){

            let success = true

            if(success){
                resolve("Welcome to PDM")
                message.style.color = "green"
            }
            else{
                reject("Failed to Load")
                message.style.color = "red"
            }
        },3000)
    })
}

btncolor.addEventListener("click",function(){
    message.innerHTML = "Loading...."
    message.style.color = "gray"
    btn1.style.color = "blue"
    btncolor.style.color = "pink"

    loadMessage()

    .then(function(result){
        message.innerHTML = result
    })

    .catch(function(error){
        message.innerHTML = error
    })
})

function showMessage(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve("Checking Account....")
            message.style.color = "yellowgreen"
        },2000)
    })
}

btncolor.addEventListener("click",function(){
    message.innerHTML = "Loading..."
    message.style.color = "violet"

    showMessage()

    .then(function(result){
        message.innerHTML = result

        return new Promise(function(resolve){
            setTimeout(function(){
                resolve("Loading Profile....")
                message.style.color = "cyan"
            },3000)
        })
        
        .then(function(result){
            message.innerHTML = result

            return new Promise(function(resolve){
                setTimeout(function(){
                    resolve("Welcome!")
                    message.style.color = "skyblue"
                },3000)
            })
        })

        .then(function(result){
            message.innerHTML = result
        })

    })
})

btn1.addEventListener("click",function(){
    message.innerHTML = "Loading Dashboard...."
    Profile.innerHTML = "Profile: Waiting...."
    grade.innerHTML = "Grades: Waiting...."
    sched.innerHTML = "Schedule: Waiting...."

    message.style.color = "white"

    btn1.style.backgroundColor = "cyan"
    btncolor.style.backgroundColor = "skyblue"
    btn1.style.color = "white"
    btncolor.style.color = "white"
    

    const profilePromise = new Promise(function(resolve){

        setTimeout(function(){

            profile.innerHTML = "Profile: Loaded"

            profile.style.color = "white"

            resolve()
        },1000)
    })

    const gradePromise = new Promise(function(resolve){

        setTimeout(function(){

            grade.innerHTML = "Grades: Loaded"

            grade.style.color = "white"

            resolve()
        },2000)
    })

    const schedPromise = new Promise(function(resolve){

        setTimeout(function(){

            sched.innerHTML = "Schedule: Loaded"

            sched.style.color = "white"

            resolve()
        },3000)
    })

    Promise.all([profilePromise,gradePromise,schedPromise])

    .then(function(){
        message.innerHTML = "Dashboard is Ready!"

        message.style.color = "white"
    })
})

// btncolor.addEventListener("click",function(){
//     message.innerHTML = "Dashboard is loading....."
//     Profile.innerHTML = "Payment Pending...."
//     grade.innerHTML = "Order Waiting...."
//     sched.innerHTML = "Image Rendering...."

//     message.style.color = "green"

//     btn1.style.color = "yellow"
//     btncolor.style.color = "blue"

//     const profilePromise = new Promise(function(resolve){

//         setTimeout(function(){

//             profile.innerHTML = "Payment: Loaded"

//             profile.style.color = "yellow"

//             resolve()
//         },1000)
//     })

//     const gradePromise = new Promise(function(resolve){

//         setTimeout(function(){

//             grade.innerHTML = "Order: Loaded"

//             grade.style.color = "skyblue"

//             resolve()
//         },2000)
//     })

//     const schedPromise = new Promise(function(resolve){

//         setTimeout(function(){

//             sched.innerHTML = "Image: Loaded"

//             sched.style.color = "cyan"

//             resolve()
//         },3000)
//     })

//     Promise.all([profilePromise,gradePromise,schedPromise])

//     .then(function(){
//         message.innerHTML = "Dashboard is Ready!"

//         message.style.color = "violet"
//     })
// })