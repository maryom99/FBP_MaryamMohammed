const linkHome = document.getElementById("link-home");
const linkAbout = document.getElementById("link-about");
const root = document.getElementById("root");

linkHome.onclick = function (event){
    event.preventDefault();
    root.textContent = "Welcome to Home";
    history.pushState(null, "", event.target.href);
};

linkAbout.onclick = function (event){
    event.preventDefault();
    root.textContent = "Welcome to About";
    history.pushState(null, "", event.target.href);
};

if (location.hash == "#about") {
    root.textContent = "Welcome to About";
} else if (location.hash == "#home") {
    root.textContent = "Welcome to Home";
}