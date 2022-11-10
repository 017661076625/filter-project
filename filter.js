let saturate = document.getElementById("saturate");
let contrast = document.getElementById("contrast");
let brightness = document.getElementById("brightness");
let sepia = document.getElementById("sepia");
let grayscale = document.getElementById("grayscale");
let blur = document.getElementById("blur");
let hueRotate = document.getElementById("hue-rotate");

let abload = document.getElementById("abload");
let download = document.getElementById("download");
let img = document.getElementById("img");

let reset = document.querySelector("span");
let imgBox = document.querySelector(".img-box");

const canvas = document.getElementById("canvas");/*canvas element becommen*/
const ctx = canvas.getContext("2d");/*context(ctx) element becommen*/

function resetValue(){
    img.style.filter = "none";
    saturate.value = "100";
    contrast.value = "100";
    brightness.value = "100";
    sepia.value = "0";
    grayscale.value = "0";
    blur.value = "0";
    hueRotate.value = "0";
}

/* start loading*/
window.onload = function(){
    download.style.display = "none";
    reset.style.display = "none";
    imgBox.style.display = "none"
} 
/* end loading*/
/*start onchange foto*/
upload.onchange = function(){
    resetValue();
    download.style.display = "block";
    reset.style.display = "block";
    imgBox.style.display = "block";

    /*start lest file*/
    let file = new FileReader();
    file.readAsDataURL(upload.files[0]);
    /* start file lest aber nach onload*/
    file.onload = function(){
        img.src = file.result;
    }
    /* end file lest aber nach onload*/
    /*end lest file*/

    /*start canvas macht*/
    img.onload = function(){
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0,canvas.width, canvas.height);
        img.style.display = 'none';/*brauchen wir nicht jetzt*/
    }/*end canvas macht*/
}
/*end onchange foto*/
/*saturate.addEventListener("input",function(){
    img.style.filter = `saturate(${saturate.value}%)`;
})
contrast.addEventListener("input",function(){
    img.style.filter = `contrast(${contrast.value}%)`;
})*/
let filters = document.querySelectorAll("ul li input");
filters.forEach( filter => {
    filter.addEventListener('input',function (){
        /*img.style.filter*/ctx.filter = `
            saturate(${saturate.value}%)
            contrast(${contrast.value}%)
            brightness(${brightness.value}%)
            sepia(${sepia.value}%)
            grayscale(${grayscale.value})
            blur(${blur.value}px)
            hue-rotate(${hueRotate.value}deg)
        `
        ctx.drawImage(img, 0, 0,canvas.width, canvas.height);/*um filter auf dem canvas zu machen*/
    })
    
})
/*
download.onclick = function(){
    download.href = img.src;
}
*/
download.onclick = function(){
    download.href = /*img.src*/canvas.toDataURL();
}
