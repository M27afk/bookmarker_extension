let urlArray=[]
let titleArray=[]
const b=document.getElementById("addURL")
const c=document.getElementById("delURL")
const d=document.getElementById("tabURL")
let e=document.getElementById("exampleFormControlInput1")
let listEl=document.getElementById("listEl")

const urlFromStorage=JSON.parse(localStorage.getItem("urlArray"))   
const titleFromStorage=JSON.parse(localStorage.getItem("titleArray"))
if(urlFromStorage,titleFromStorage)
{
    urlArray=urlFromStorage
    titleArray=titleFromStorage
    renderCustom()
}

d.addEventListener("click", function(){
    chrome.tabs.query({active: true, lastFocusedWindow: true}, function(tabs) 
      {
       
        urlArray.push(tabs[0].url)
        titleArray.push(tabs[0].title)
        localStorage.setItem("urlArray",JSON.stringify(urlArray))
        localStorage.setItem("titleArray",JSON.stringify(titleArray))
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
    let question=confirm("Are you sure you want to delete all the bookmarks?")
    if(question===true)
    {
        delURL()
    }
}
)

function addUrl()
{
    if(exampleFormControlInput1.value==="")
    {
        alert("Enter URL!")
    }
    else
    {
    urlArray.push('https://'+exampleFormControlInput1.value)
    titleArray.push(exampleFormControlInput1.value)
    exampleFormControlInput1.value=""
    localStorage.setItem("urlArray",JSON.stringify(urlArray))
    localStorage.setItem("titleArray",JSON.stringify(titleArray))
    renderCustom() 

    }
}

function delURL()
{
    localStorage.clear()
    urlArray=[]
    titleArray=[]
    renderCustom()
}

function renderCustom()
{
   let list=" "
   for(let i=0;i<urlArray.length;i++)
    {
        list+="<li><a href='"+urlArray[i]+"'target=_blank''>"+titleArray[i]+"</a></li>"
    }
    listEl.innerHTML=list
}

function renderCurrent()
{
    let list=" "
    for(let i=0;i<urlArray.length;i++)
    {
        list+="<li><a href='"+urlArray[i]+"'target=_blank''>"+titleArray[i]+"</a></li>"
    }
    listEl.innerHTML=list

}