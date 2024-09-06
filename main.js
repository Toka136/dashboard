let delete_button=document.getElementById("dele");
let date = document.getElementById("date");
let spans = document.querySelectorAll(".prog span");
let table=document.getElementById("table");
let light=document.getElementById("light");
let dark=document.getElementById("dark");
let main_page=document.getElementById("main");
let divs =document.querySelectorAll(".grid-divs .div1");
let divs_text =document.querySelectorAll(".grid-divs .div1 .text p");
let h2=document.getElementById("h2");
let h22=document.getElementById("h22");
let dat=document.getElementById("dat");
let dash=document.getElementById("navbar");
let icons=document.querySelectorAll(".navbar1 .icon");
let name_user=document.getElementById("name");
let pos=document.getElementById("pos");
let recent =document.getElementById("recent");
let sales =document.getElementById("sales");
let red=document.getElementById("red");
let black_head=document.getElementById("black-head");
let change_icon=document.getElementById("changeicon");
let none_a=document.querySelectorAll(".none");
let wel=document.getElementById("wel");
let nav_icon=document.querySelectorAll(".main-page .navbar1 > div i");
let m=0;
let counter=setInterval(function(){
    if(window.outerWidth<600&&!m)
        {
            m=1;
            change_icon.innerHTML="<i class='fa-solid fa-bars'></i>";
            dash.style.cssText="display: none"
            none_a.forEach(value=>{
    value.style.cssText=" display: none"
    
})
        }
        else if(window.outerWidth>600)
        {
            m=0;
            change_icon.innerHTML=` <img src="images/course2-03.jpg" alt="">
                <span>Dash</span>`;
                dash.style.cssText="display: block"
                none_a.forEach(value=>{
        value.style.cssText=" display: block"
        
    })
        }
            
},100)
let f=0,d=0,l=0,x=0;
change_icon.onclick=function()
{
    if(m){
        if(!x)
        {
            change_icon.innerHTML=` <i class="fa-solid fa-xmark" id="dele"></i>`;
            x=1;
        }
        else{
            change_icon.innerHTML="<i class='fa-solid fa-bars'></i>";
            x=0;
        }
    if(!f)
    {
        if(d){
            dash.style.cssText="display: flex; position: absolute;width: 60%;z-index:3;flex-direction:column;background:black";
        nav_icon.forEach(value=>value.style.cssText=" color:#BF9A78")
        }
        else
        {
            dash.style.cssText="display: flex; position: absolute;width: 60%;z-index:3;flex-direction:column;background:#eee"
        }
        none_a.forEach(value=>{
            value.style.cssText=" display: block"
            
        })
        f=1;
    }
    else
    {
        dash.style.cssText="display: none"
        none_a.forEach(value=>{
            value.style.cssText=" display: none"
            
        })
        f=0;
    }
}


    // dash.style.cssText=" "
}
delete_button.onclick =function()
{
    date.value="";
}
dark.onclick=function(){
    d=1;
    l=0;
    change_icon.style.cssText="color:#04BFBF";
    dark.style.cssText="background-color:#04BFBF;color: white";
    light.style.cssText="background-color:#eee;color: black";
    divs.forEach(value=>
        value.style.cssText="background:#025159;color:#BF9A78; box-shadow: 0 4px 8px rgba(255, 255, 255, 0.3)"
    )
    divs_text.forEach(value=>
        value.style.cssText="color:#BF9A78"
    )
    sales.style.cssText="background:#025159;color:#BF9A78; box-shadow: 0 4px 8px rgba(255, 255, 255, 0.3)"
    recent.style.cssText="background:#025159;color:#BF9A78; box-shadow: 0 4px 8px rgba(255, 255, 255, 0.3)"
    main_page.style.cssText="background:black";
    dash.style.cssText="background:black";
    black_head.style.cssText="background:black";
    table.style.cssText="background:black";
    wel.style.cssText="background:black";
    h2.style.cssText="color: #04BFBF";
    h22.style.cssText="color: #04BFBF";
    dat.style.cssText="background:#BF9A78";
    icons.forEach(value=>
        value.style.cssText="color:white"
    )
    pos.style.cssText="color:#04BFBF";
    name_user.style.cssText="color:#04BFBF";
    red.style.cssText="color:#ed4d1b"
}
light.onclick=function(){
    l=1;
    d=0;
    light.style.cssText="background-color:#04BFBF;color: white";
    change_icon.style.cssText="color:#04BFBF";
    dark.style.cssText="background-color:#eee;;color: black";
    sales.style.cssText="background-color: white; box-shadow: 0 1rem 3rem rgba(0, 0, 0, .175)"
    recent.style.cssText="background-color: white; box-shadow: 0 1rem 3rem rgba(0, 0, 0, .175)"
    divs.forEach(value=>
        value.style.cssText="background-color: white; box-shadow: 0 1rem 3rem rgba(0, 0, 0, .175)"
    )
    divs_text.forEach(value=>
        value.style.cssText="color:black"
    )
    main_page.style.cssText="background:#eee";
    dash.style.cssText="background:#eee";
    wel.style.cssText="background:#eee";
    table.style.cssText="background:white";
    h2.style.cssText="color: blck";
    h22.style.cssText="color: black";
    black_head.style.cssText="background:#eee";
    dat.style.cssText="background:#bf9a7824";
    icons.forEach(value=>
        value.style.cssText="color:black"
    )
    pos.style.cssText="background:white";
    name_user.style.cssText="background:white";
}

spans.forEach(value=>{
    
    let start =1;
    let end=value.getAttribute("data-value");
    let par=value.parentElement;
    let count=setInterval(function(){
    value.innerHTML=start + "%";
    par.style.background=`conic-gradient(#038C8C ${start * 3.6}deg, white 0deg)`
    if(start==end)
        clearInterval(count);
    start+=1;
},50)
});