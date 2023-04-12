/*const text = document.querySelector(".title");

const changeColor = document.querySelector(".changeColor");

//text.classList.add("change");

changeColor.addEventListener("click", function () {
  //text.classList.add("change");
  text.classList.toggle("change");
});*/

const userList = document.querySelector(".name-list");
const listInput = document.querySelector(".list-input");
const addListBtn = document.querySelector(".addListBtn");

addListBtn.addEventListener("click", function () {
  //Create Li
  const newLi = document.createElement("LI");
  const liContent = document.createTextNode(listInput.value);

  //Add the input value to Li
  newLi.appendChild(liContent);
  //Attaching li to user list
  userList.appendChild(newLi);
});

/*for (user of userList) {
  user.addEventListener("click", function () {
    this.style.color = "red";
  });
}

console.log(listInput.value);*/
