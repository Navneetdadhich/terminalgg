
const app = document.querySelector(".mainn");
const delay = ms => new Promise(res => setTimeout(res, ms));
    
const asciiArt = `


███╗░░██╗░█████╗░██╗░░░██╗███╗░░██╗███████╗███████╗████████╗  ██████╗░░█████╗░██████╗░██╗░░██╗██╗░█████╗░██╗░░██╗
████╗░██║██╔══██╗██║░░░██║████╗░██║██╔════╝██╔════╝╚══██╔══╝  ██╔══██╗██╔══██╗██╔══██╗██║░░██║██║██╔══██╗██║░░██║
██╔██╗██║███████║╚██╗░██╔╝██╔██╗██║█████╗░░█████╗░░░░░██║░░░  ██║░░██║███████║██║░░██║███████║██║██║░░╚═╝███████║
██║╚████║██╔══██║░╚████╔╝░██║╚████║██╔══╝░░██╔══╝░░░░░██║░░░  ██║░░██║██╔══██║██║░░██║██╔══██║██║██║░░██╗██╔══██║
██║░╚███║██║░░██║░░╚██╔╝░░██║░╚███║███████╗███████╗░░░██║░░░  ██████╔╝██║░░██║██████╔╝██║░░██║██║╚█████╔╝██║░░██║
╚═╝░░╚══╝╚═╝░░╚═╝░░░╚═╝░░░╚═╝░░╚══╝╚══════╝╚══════╝░░░╚═╝░░░  ╚═════╝░╚═╝░░╚═╝╚═════╝░╚═╝░░╚═╝╚═╝░╚════╝░╚═╝░░╚═╝
                                                                                                        
`;

const imageart = `░░░░░░░░░░░░▒░░░░░▒▒▒▒░░░░░░░░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▒▒▒▒
░░░░░░░░░░░░░░▒▒▒▒▒▒▒▒░░░░░░░░░░░▒▒░░░▒▒▒▒▒▒▒▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▒▒▒▒▒░░
░░░░░░░░░░░░░░░▒▒▒▒▒▒▒░░░░░░░░░░░░░░░░░░░▒▒▒▒▒▒▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▒▒▒▒▒░░░░░
░░░░░░░░░░░░░░░░▒▒▒▒▒▒░░░░░░░░░░░░░░░░▒▒▒░▒▒▒▒▒▒▒▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░▒▒▒▒▒░░░░░░░░
░░░░░░░░░░░░░░░░░░░▒▒▒▒░░░░░░░░░░░▒▒▒▒▒▓▓▓▓▓▓▓▓▒▒▒▒▒▒░░░░░░░░░░░░░░░░░░░░░▒▒▒▒░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░▒▒░░░▒▒▒▒▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒░░░░░░░░░░░░░░░░▒▒▒▒░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒░░░░░░░░░░▒▒▒░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░▒▒▒▒▓▓▓▓▓█████████████████████████▓▓▓▓▓▓▓▓▒▒▒▒░░░░░░▒▒░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░▒░░▒▒▒▒▓▓▓▓███████████████████████████████▓▓▓▓▓▓▓▒▒▒▒▒▒▒▒░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░▒▒▒███████████████████████████████████████▓▓▓▓▓▓▒▒▒▒░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░▒▒▓▓███████████████████████████████████████▓▓▓▓▓▓▒▒▒▒░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░▒▒▒▓███████████████████████████▓▓▓▓▓▓▓█▓██▓▓▓▓▓▓▓▓▒▒▒▒░░░░░░░░░░░░░░░░░░░░
░░░░░░░▒▒▒░░░░░░▒▒▓▓██████████████████████████▓▓▓▒▒▒▒▓▓▓████▓▓▓▓▓▓▓▒▒░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░▒▒▓▓████████████████████████▓▓▓▓▓▒▒▒▓▓▓▓▓██████▓▓▓▓▓▒░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░▒▓██████▓▓▓▓▓▓▓▓▓▓██████▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█████▓▓▓▓▓▓▒░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░▒▓▓████▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒░░░▒▒▒▓▓▓███▓▓▓▓▓▓▓▒░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░▒██████▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▒░░░░░░░░░░░░░░░░░▒▓▓
░░░░░░░░░░░░░░░░░▒██████▓▓▓▓▓██████▓▓▓▓▓▓▓▓▓▓██████████▓▓▓▓▓███▓▓▓▓▒▓▒░░░░░░░░░░░░░░░░░▓▓▒
░░░░░░░░░░░░░░░░░░▓█████▓████████████▓▓▓▓▓▓▓██████████████▓██▓▓▓▓▓▓▓▒░░░░░░░░░░░░░░░░░▒▓▓▒
░░░░░░░░░░░░░░░░░░▒████████████████████████████████████▓▓▓▓▓▓▓██▓▓▓▒░░░░░░░░░░░░▒▒▒░░░▒▓▓▒
░░░░░░░░░░░░░░░░░░░▓████▓▓▓▓████████████▓▓▓██████████████▓▓▓▓▓███▓▓▒░░░░░░░▒▒▒▓▓▓▓▒░░░▓▓▒▒
░░░░░░░░░░░░░░░░░░▓█▓▒▓▓▓▓▓████████████▒▒░░▓██████████▓██▓▓▓▓▒█▓█▓▒░░░░▒▒▓▓▒▒▒▒▓▓▓░░░▒▓▓▒▒
░░░░░░░░░░░░░░░░░░░▒▓▒▓▓▓▓███▓▓███████▓▒▒░░░▓▓▓████▓▓▓▓▓▓▒▒▒▓▓██▓▓░░░░░▓▓▓▒▓▓▒▒▓▓▒░░░▒▓▓▓▓
░░░░░░░░░░░░░░░░░░░░▒▓▓▓▓▓▓▓▓███████▓█▓▒▒░░░░▓▓▓▓▓▓▓▒▒▒░░░░▒▓▓▓█▓▒░░░░▒▓▓▒▒▒▒▒░▒▓░░░░▓▓▓▓▓
░░░░░░░░░░░░░░░░░░░░░▓▒▓▓▓▓▓▓▓▓▓▓▓█▓█▓▓▓▓▒▒▒░▒▓▒▓▓▒▒▒▒▒▒▒▒▒▓▒▒▒▓░▒▒▒░░▓▒░▒░▒░▒▒▓▓░░░▒▓▓▓▓▒
░░░░░░░░░░░░░░░░░░░░░░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒▒▒▒░░░░▒▒▓▒▒▒▒▓▓▓▓▓░▒▓▒░░░▒░▒▒▓▒░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓██▓▓▓███▓▒▒▒▒▒▒▒▒▒▒▓▒▒▒▒▒▓▓▒▒▓▒▓▓▒▒▒▒▒░▒▒▓▒░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█▓▓▓▒░░▒▒▒▒▒▓▓▒▒▒▒▒▒▓▓▓▒▒▒▓▒▒▒▒▒▒▒▒▓▓░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓████████▓▓▓▓▒░░▒▒▓▒▒▒▒▒▒▒▒▓▓▒▒▒▒▓▒▓▓▓▓▓▓▒▒▒░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░▓▓▓▓▓▓▓▓▓▓▓█████████████▓▓▓▓▓▓▓▒▒▒▒▒▒▒▒▒▓▒▒▒░▒▒▒▒░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░▓▓▓▓▓▓▓▓▓███████▓▓▓▓▓▓▓▓▓█████▓▒▒▒▒▒▓▓▓▓▓▒▒░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░▒███▓▓▓▓██████████████████████▓▓▒▒▓▓▓▓▓▓▒░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░▓████▓███████▓▓▓███▓▓▓▓▓█████▓▓▓▓▓▓▓██▓▒░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░▓██████████▓▓▓▓███▓▓▓▓▓▓▓████▓▓▓▓████▓░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░▒███████████████████████▓███████████▓▒░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░▒█████████████████████████████████▓▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░▓█████████████████▓█▓▓█▓████████▓▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░▓████████████████████████████▓▓▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▓█████████████████████████▓▓░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▓██████████████████████▓▓▓▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▒▓▓████████████████████▓▓▓▓▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░▒▓▓▓▓▓████████████████▓▓▓▓▓▓▓▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░▒▒▒▒▒▒▒▓▓▓▓▓▓▓███████▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░▒▒▒▒▒▒▒▒▒▒▒▒▓▓██▓▓▓▓▓▓██████▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▓▓▓▓█▓▓▓▓████▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓█▓▓▓██████▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
▒▒▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓███████████▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
▒▒▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█████████▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
▓▓▓▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█████████▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓██████▓█▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓██████▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒░▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓███████▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒░▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓███████▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▓▒░▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓████████▓▓▓▓▓▓▓▓▒▒▒▒▒▒▒▓░▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓████████▓▓▓▓▓▓▓▒▒▒▒▒▒░▓░▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓████████▓▓▓▓▓▒▒▒▒▒▒▒░▒▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓██▓▓▓▓▒▒▒▓▒▒▒▒▒▒▒▒▒▒▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓░░░░░░░░░░░░░░░░░░░▒░░░░░░░░░░░░░░`;
document.getElementById('ascii-art').innerText = asciiArt;
    
app.addEventListener("keypress", async function(event){
  if(event.key === "Enter"){
    await delay(150);
   getInputValue();
   
    removeInput();
    await delay(150);
    new_line();
  }
});

app.addEventListener("click", function(event){
  const input = document.querySelector("input");
  input.focus();
})


async function open_terminal(){

  createText("Welcome ");
  await delay(700);
  createText("Starting the server...");
  await delay(1500);
  createText("write 'dank' to see the list of the command");
//   createCode("git", "Github Profile");
//   createCode("all", "This Commands Will Provide You All the Working Commands");
//   createCode("contact", "Email For Any Queries");
//   createCode("clear", "It Clears The Terminal");
  

  await delay(500);
  new_line();
}


function new_line(){
  
  const p = document.createElement("p");
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  p.setAttribute("class", "path")
  p.textContent = "#Navneet Dadhich's";
  span1.textContent = "";
  span2.textContent = " ~/portfolio";
  p.appendChild(span1);
  p.appendChild(span2);
  app.appendChild(p);
  const div = document.createElement("div");
  div.setAttribute("class", "type")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const input = document.createElement("input");
  div.appendChild(i);
  div.appendChild(input);
  app.appendChild(div);
  input.focus();
  
}

function removeInput(){
  const div = document.querySelector(".type");
  app.removeChild(div);
}

async function getInputValue(){
  
  const value = document.querySelector("input").value;
  if(value === "dank"){
    trueValue(value);
    createCode("Git","");
    createCode("Projects","");
    createCode("Contact","");
    createCode("Clear","");
    createCode("Image","");
    createCode("Skills","")
  }
  else if(value=== "Git"){
    trueValue(value);
    createText("Click here For project codes <a href='https://github.com/Nvntdad' target='_blank'>https://github.com/Nvntdad</a>")
  }
  else if(value === "Projects"){
    trueValue(value);
    createText("Here are some of my projects mentioned which i made earlier to the development journey.\n")
    createText("<a href='https://nvntdad.github.io/friend-s-website/' target='_blank'><i class='fab fa-wrench '></i> ~/ First Project\n")
    createText("#    The very first project on which i had worked, was the portfolio website which was made with only HTML-CSS-Vanilla Javascript. In this portfolio website i had worked also on UI-UX , which makes it eye soothing.")
    createText("<a href='https://nvntdad.github.io/clg-web/' target='_blank'><i class='fab fa-wrench '></i> ~/ Second Project")
    createText("#    The second project on which i had worked, was the college website which was made also with only HTML-CSS-Vanilla Javascript. In this college website i had intergrated an AI assitant which provides the basic details about the college. It is also made with UI-UX core principles which makes it easy to use.")
  }
  else if(value === "Contact"){
    trueValue(value);
    createText("Email : nvntdadhich@gmail.com");
    createText("<a href='https://www.linkedin.com/in/navneet-dadhich-6075772ab?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target='_blank'> Linked In : Navneet dadhich ")
   }
   else if (value === "Image"){
    trueValue(value);
    createText("Not Updated");
    // createText(`\n`);
   }
  else if(value === "Skills"){
    trueValue(value);
    createText(" Technologies and skills i have used?")
    createText(`| Reactjs | Nodejs | FirebaseDB | MongoDB | TailwindCss | ModuleCss | ReduxToolkit | Problem solving | HTML | CSS | Javascript | npm |\n`);
  }
  
  else if(value === "Clear"){
    document.querySelectorAll("p").forEach(e => e.parentNode.removeChild(e));
    document.querySelectorAll("section").forEach(e => e.parentNode.removeChild(e));
    createText("write 'dank' to see the list of the command");
  }
  else{
    falseValue(value);
    createText(`Naughty Hora ke bhindi`)
  }
}

function trueValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "sucess")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function falseValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone error")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "error")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function createText(text, classname){
  const p = document.createElement("p");
  
  p.innerHTML =
  text
  ;
  app.appendChild(p);
}

function createCode(code, text){
  const p = document.createElement("p");
  p.setAttribute("class", "code");
  p.innerHTML =
 `${code} <br/><span class='text'> ${text} </span>`;
  app.appendChild(p);
}

open_terminal();