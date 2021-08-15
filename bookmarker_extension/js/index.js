
let urlArray=[]
const b=document.getElementById("addURL")
const c=document.getElementById("delURL")
const d=document.getElementById("tabURL")
let e=document.getElementById("exampleFormControlInput1")
let listEl=document.getElementById("listEl")

const urlFromStorage= JSON.parse(localStorage.getItem("urlArray"))
if(urlFromStorage)
{
    urlArray=urlFromStorage
    renderCustom()
}

d.addEventListener("click", function(){
    chrome.tabs.query({active: true, lastFocusedWindow: true}, function(tabs) 
      {
        urlArray.push(tabs[0].url)
        localStorage.setItem("urlArray",JSON.stringify(urlArray))
        renderCurrent()
              
      })
  })



b.addEventListener
("click",function()
    {
        addUrl()
    }
)
e.addEventListener("keyup", function(event) {
    if (event.key=== 'Enter')
    {
        addUrl()
    }
  });

c.addEventListener
("click",function()
    {
        localStorage.clear()
        urlArray=[]
        renderCustom()
    }
)

function addUrl()
{
    if(exampleFormControlInput1.value==="")
    {
        alert("Enter URL!")
    }
    else
    urlArray.push(exampleFormControlInput1.value)
    exampleFormControlInput1.value=" "
    localStorage.setItem("urlArray",JSON.stringify(urlArray))
    renderCustom() 

}

function renderCustom()
{
   let list=" "
    for(let i=0;i<urlArray.length;i++)
    {
        list+="<li><a href='https://"+urlArray[i]+"'target=_blank''>"+urlArray[i]+"</a></li>"
    }
    listEl.innerHTML=list
}

function renderCurrent()
{
    let list=" "
    for(let i=0;i<urlArray.length;i++)
    {
        list+="<li><a href='"+urlArray[i]+"'target=_blank''>"+urlArray[i]+"</a></li>"
    }
    listEl.innerHTML=list

}