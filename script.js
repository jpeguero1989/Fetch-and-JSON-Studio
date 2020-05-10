// TODO: add code here

function init()
{
    let divAstronaut = document.getElementById("container");
fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){

response.json().then(function(json){
//console.log(json);
//divAstronaut.addEventListener("click",builtDivFromJSON)

divAstronaut.innerHTML = String(builtDivFromJSON(json));
})
})
}

function builtDivFromJSON(jsonObject)
{

    //console.log(jsonObject);
let returnObject="";
    for (let i = 0; i<jsonObject.length;i++)
    {
returnObject += `<div class="astronaut">
<div class="bio">
   <h3>${i+1} - ${jsonObject[i].firstName} ${jsonObject[i].lastName}</h3>
   <ul>
      <li>Hours in space: ${jsonObject[i].hoursInSpace}</li>
      <li id= "${jsonObject[i].active}">Active: ${jsonObject[i].active}</li>
      <li>Skills: ${getSkill(jsonObject[i].skills)}</li>
   </ul>
</div>
<img class="avatar" src="${jsonObject[i].picture}">
</div>`
    }
    return returnObject;
}

function getSkill(skillArray)
{
let skills="";
for (let i=0;i<skillArray.length;i++)
{
    if (skills == "")
    {
        skills = skillArray[i];
    }else {
        skills = skillArray[i] + ", " + skills;
    }

    return skills;
}
}
window.onload = init;
