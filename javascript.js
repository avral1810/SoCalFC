window.onload = function()
{
    const vids = document.getElementsByTagName("video")
    for (let i = 0; i < vids.length; i++)
    {
        vids[i].addEventListener( "mouseover", function(e) {
            vids[i].play()
        })
        vids[i].addEventListener( "mouseout", function(e) {
        vids[i].pause()
   })
    }

}


function makeVideoBig(x)
{

    x.style.width = "60%";
    x.style.top = "20%";
    x.style.left = "20%";

    document.getElementById("leftbox1").style.width = "0%";
    document.getElementById("leftbox2").style.width = "0%";
    document.getElementById("rightbox1").style.width = "0%";
    document.getElementById("rightbox2").style.width = "0%";
    document.getElementById("head").style.opacity = "0.0";
}

function makeVideoSmall(x)
{
    x.style.width = "30%";
    x.style.top = "25%";
    x.style.left = "35%";

    document.getElementById("leftbox1").style.width = "10%";
    document.getElementById("leftbox2").style.width = "10%";
    document.getElementById("rightbox1").style.width = "10%";
    document.getElementById("rightbox2").style.width = "10%";
    document.getElementById("head").style.opacity = "0.66";
}

function makeMeBig(x)
{
    x.style.width = "20%";
    let y = document.getElementsByClassName("boxes");
    for(let i = 0; i < y.length; i++)
    {
        if (y[i] != x)
            y[i].style.opacity = "0.0";
        else
            y[i].style.width = "15%";
    }
    document.getElementById("videoHolder").style.opacity = "0.5";
}

function makeMeSmall(x)
{
    x.style.width = "10%";
    let y = document.getElementsByClassName("boxes");
    for(let i = 0; i < y.length; i++)
    {
        y[i].style.opacity = "1.0";

    }
    document.getElementById("videoHolder").style.opacity = "1.0";
}

