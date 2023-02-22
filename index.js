const root = document.getElementById("root");

function Link(props){
    const link = document.createElement("a");
    link.href = props.href;
    link.textContent = props.label;
    link.onclick = function (event){
        event.preventDefault();
        const component = props.Component();
        root.innerHTML = "";
        root.append(component);
        history.pushState(null, "", event.target.href);
    };

    return link;
}

function Navbar(){
       const linkHome = Link({ 
        herf: "#home", 
        label: "Home", 
        Component: HomeScreen,
    });

    const linkAbout = Link({ 
        herf: "#about", 
        label: "About", 
        Component: AboutScreen,
    });

    const div = document.createElement("p");
    div.append(linkHome);
    div.append(linkAbout);

    return div;
};

function AboutScreen(){
    const linkHome = Link({ 
        herf: "#home", 
        label: "Back to Home", 
        Component: HomeScreen,
    });

    const text = document.createElement("p");
    text.textContent = "Welcome to About";

    const div = document.createElement("div");
    div.append(linkHome);
    div.append(text);
    
    return text;
}

function HomeScreen(){
    const navbar = Navbar();

    const textPreview = document.createElement("p");

    const input = document.createElement("input");
    input.oninput = function(event){
      textPreview.textContent = event.target.value;
    };
    input.placeholder = "Enter your name";

    const div = document.createElement("div");
    div.append(navbar);
    div.append(input);
    div.append(textPreview);

    return div;
}

if (location.hash == "#about") {
    const aboutScreen = AboutScreen();
    root.innerHTML = "";
    root.append(aboutScreen)    
} else if (location.hash == "#home") {
    const homeScreen = HomeScreen();
    root.innerHTML = "";
    root.append(homeScreen)
};
