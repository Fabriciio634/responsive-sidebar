const body = document.querySelection("body")        
    sidebar = body.querySelection(".sidebar")
    toggle = body.querySelection(".toggle")
    searchBtn = body.querySelection(".search-box")
    modeSwitch = body.querySelection("toggle-switch")
    modeText = body.querySelection("mode-text")
    
    toggle.addEventListener("click",() =>{
        body.classList.toggle("close")
    });

    searchBtn.addEventListener("click",() =>{
        body.classList.remove("close")
    });
    
    modeSwitch.addEventListener("click",() =>{
        body.classList.toggle("dark");

        if(body.classList.contains("dark")){
            modeText.innerText = "Light Mode"    
        }
        else{
            modeText.innerText = "Dark Mode" 
        }
    });