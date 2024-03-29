// let slider = document.querySelector('.slider .list');
// let items = document.querySelectorAll('.slider .list .item');
// let next = document.getElementById('next');
// let prev = document.getElementById('prev');
// let dots = document.querySelectorAll('.slider .dots li');

// let lengthItems = items.length - 1;
// let active = 0;
// next.onclick = function(){
//     active = active + 1 <= lengthItems ? active + 1 : 0;
//     reloadSlider();
// }
// prev.onclick = function(){
//     active = active - 1 >= 0 ? active - 1 : lengthItems;
//     reloadSlider();
// }
// let refreshInterval = setInterval(()=> {next.click()}, 3000);
// function reloadSlider(){
//     slider.style.left = -items[active].offsetLeft + 'px';
//     // 
//     let last_active_dot = document.querySelector('.slider .dots li.active');
//     last_active_dot.classList.remove('active');
//     dots[active].classList.add('active');

//     clearInterval(refreshInterval);
//     refreshInterval = setInterval(()=> {next.click()}, 3000);

    
// }

// dots.forEach((li, key) => {
//     li.addEventListener('click', ()=>{
//          active = key;
//          reloadSlider();
//     })
// })
// window.onresize = function(event) {
//     reloadSlider();
// };


// setCookie = (cName, cValue, expDays)=>{
//     let date = new Date();
//     date.setTime(date.getTime() + (expDays * 24* 60*60*1000));
//     const expires = "expires = "+ date.toUTCString();
//     document.cookie = cName + "=" + cValue + ";" + expires + "; path=/ "
// }
// document.querySelector(".cta").addEventListener("click",()=>{
//     document.querySelector(".cookies-card").style.display="none";
//     setCookie("cookie", true, 30);
// })



// Function to set a cookie
// function setCookie(cName, cValue, expDays) {
//     let date = new Date();
//     date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
//     const expires = "expires=" + date.toUTCString();
//     document.cookie = cName + "=" + cValue + ";" + expires + ";path=/";
// }

// // Function to hide the cookie banner
// function hideCookieBanner() {
//     document.querySelector('.cookies-card').style.display = "none";
// }

// // Event listener for the "Accept all" button
// document.querySelector('.cta').addEventListener('click', function() {
//     // Hide the cookie banner
//     hideCookieBanner();
//     // Set the cookie
//     setCookie("cookiesAccepted", "true", 30);
// });



// Function to set a cookie
function setCookie(cName, cValue, expDays) {
    let date = new Date();
    date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = cName + "=" + cValue + ";" + expires + ";path=/";
}

// Function to get a cookie
function getCookie(cName) {
    const name = cName + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');
    for (let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i];
        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) == 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }
    return "";
}

// Function to hide the cookie banner
function hideCookieBanner() {
    document.querySelector('.cookies-card').classList.add('hidden');
}

// Function to show the cookie banner
function showCookieBanner() {
    document.querySelector('.cookies-card').classList.remove('hidden');
}

// Event listener for the "Accept all" button
document.querySelector('.cta').addEventListener('click', function() {
    // Hide the cookie banner
    hideCookieBanner();
    // Set the cookie
    setCookie("cookiesAccepted", "true", 30);
});

// Check if the user has accepted cookies on page load
document.addEventListener("DOMContentLoaded", function() {
    const cookiesAccepted = getCookie("cookiesAccepted");
    if (!cookiesAccepted) {
        // If cookies are not accepted, show the cookies banner
        showCookieBanner();
    }
});

