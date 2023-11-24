var wrapper = document.querySelector("#wrapper")
var container = document.querySelector("#container")
var searchContainer = document.querySelector(".search-container")
var searchContainerInput = document.querySelector(".search-input")
var btn = document.querySelector("#profile-head div p")
var themeBtn = document.querySelector("#profile-head i")
var light = true
const url = "https://api.github.com/users/"
var profileImg = document.querySelector("#p-img div img")
var profileName = document.querySelector("#p-info .name-date h2")
var bio = document.querySelector(".bio p")
var createdDate = document.querySelector("#p-info .name-date p")
var username = document.querySelector(".username a")
var repos = document.querySelector(".repo p")
var followers = document.querySelector(".follower p")
var following = document.querySelector(".following p")
var userLocation = document.querySelector(".location p")
var website = document.querySelector(".site a")
var social = document.querySelector(".social a")
var org = document.querySelector(".org p")
var hireBtn = document.querySelector("#hireButton span")
var inputBtn = document.querySelector(".search-container input")


function isLight(){
    wrapper.style.backgroundColor = "black"
    container.style.backgroundColor = "rgba(31, 29, 29, 0.397)"
    container.style.color = "white"
    searchContainer.style.backgroundColor = "white"
    btn.textContent = "LIGHT"
    searchContainerInput.style.color = "black"
}

function isDark(){
    wrapper.style.backgroundColor = "white"
    container.style.backgroundColor = "rgba(205, 215, 224, 0.74)"
    container.style.color = "black"
    searchContainer.style.backgroundColor = "black"
    btn.textContent = "DARK"
    searchContainerInput.style.color = "white"
}

themeBtn.addEventListener("click", ()=>{
    if(light == true){
        isLight();
        light = false
    }
    else{
        isDark();
        light = true
    }
})

function getData(url){
    fetch(url)
    .then((response)=>{
        return response.json()
    })
    .then((response)=>{
        console.log(response);
        profileImg.src = response.avatar_url
        repos.innerHTML = response.public_repos
        profileName.innerHTML = response.name
        bio.innerHTML = response.bio
        followers.innerHTML = response.followers
        createdDate.innerHTML = response.created_at
        username.href = response.html_url
        username.innerHTML = "@" + response.login
        following.innerHTML = response.following
        userLocation.innerHTML = response.location
        website.href = response.html_url
        social.innerHTML = response.twitter_username
        org.innerHTML = response.company

        if(response.hireable == null){
            hireBtn.style.color = "red"
            hireBtn.innerText = "false"
        }
        else{
            hireBtn.innerHTML = response.hireable
        }

    })
}


function init(url){
    getData(url+'suleman9580'); 
}
init(url)

inputBtn.addEventListener("keydown", (e)=>{
    if(e.key == 'Enter'){
        if(inputBtn.value != ""){
            getData(url+inputBtn.value)
        }
    }
})

