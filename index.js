const submit = document.querySelector(".button1");
const reset = document.querySelector(".button2");
let Html;
let x = 0;
submit.addEventListener("click",()=>{
    x++;
    const Name = document.querySelector("#Name");
    const Mail = document.querySelector("#Mail");
    const Website = document.querySelector("#Website");
    const img = document.querySelector("#imagelink");
    const gen1 = document.querySelector("#gender");
    const gen2 = document.querySelector("#gender2");
    const js  = document.querySelector("#js");
    const html  = document.querySelector("#html");
    const css  = document.querySelector("#css");
    const enr = document.querySelector(".enrolled");
    const src = document.querySelector("#imglink");
    let gender;
    if(gen1.checked){
      gender = document.querySelector("#male").innerHTML;
    }
    if(gen2.checked){
        gender = document.querySelector("#female").innerHTML;
    }
    let skills;
    if(js.checked){
        skills = document.querySelector("#cb1").innerHTML;
    }
    if(html.checked){
        skills += document.querySelector("#cb2").innerHTML;
    }
    if(css.checked){
        skills += document.querySelector("#cb3").innerHTML;
    }
    if(Html==undefined){
        Html = `<div class="card">
        <div class="img">
            <img src="${src.value}" alt="" srcset="" height="150px" width="150px">
        </div>
    <div class="description">
    <h2>Description</h2>
    <p class="desName mar">${Name.value}</p>
    <p class="desMail mar">${Mail.value}</p>
    <p class="desWebsite mar">${Website.value}</p>
    <p class="desGender mar">${gender}</p>
    <p class="desSkills mar">${skills}</p>
</div>
</div>`
    }
    else{
    Html += `<div class="empty"></div>
    <div class="card">
    <div class="img">
        <img src="${src.value}" alt="" srcset="" height="150px" width="150px">
    </div>
<div class="description">
<h2>Description</h2>
<p class="desName mar">${Name.value}</p>
<p class="desMail mar">${Mail.value}</p>
<p class="desWebsite mar">${Website.value}</p>
<p class="desGender mar">${gender}</p>
<p class="desSkills mar">${skills}</p>
</div>
</div>`
}
enr.innerHTML = Html;
}) 
reset.addEventListener("click",()=>{
    const ask = window.confirm("Clicking reset will delete all your enrolled students data.Do you still want to continue?");
    if(ask){
        document.querySelector(".enrolled").innerHTML = `    <div class="card">
        <div class="img">
            <img src="./image-preview-icon-picture-placeholder-vector-31284806.png" alt="" srcset="" height="150px" width="150px">
        </div>
    <div class="description">
    <h2>Description</h2>
    <p class="desName mar">Sample Name</p>
    <p class="desMail mar">Sample Mail ID</p>
    <p class="desWebsite mar">Sample Website</p>
    <p class="desGender mar">Male</p>
    <p class="desSkills mar">JavaScript HTML CSS</p>
</div>
</div>`;
    }
    Html = undefined;
    x=0;
})