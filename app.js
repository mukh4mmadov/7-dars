const form = document.getElementById("form");
const todo = document.getElementById("todo");
const moon = document.getElementById("moon");
const moonLogo = document.getElementById("moon-logo");
const checkbox = document.getElementById("checkbox");
const text = document.getElementById("text");
const list = document.getElementById("ul");
const itemsLogo = document.getElementsByClassName("items-logo");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  list.innerHTML += `
  <li
    class="py-5 px-6 bg-white rounded flex justify-between items-center"
    >
    <div class="flex items-center gap-6">
        <i class="items-logo fa-regular fa-circle text-[20px] opacity-50"></i>
        <span id="text">${todo.value}</span>
    </div>
        <i id="close" class="fa-solid fa-xmark"></i>
   </li>`;
});

moonLogo.onclick = () => {
  document.body.classList.toggle("night");

  if (document.body.classList.contains("night")) {
    moonLogo.innerHTML = `
    <i
    id="moon-logo"
    class="fa-solid fa-sun text-[#fff] text-[25px] my-[11px] transition-all"
    ></i>`;
  } else {
    moonLogo.innerHTML = `
      <i
      id="moon-logo"
      class="fa-solid fa-moon text-[#fff] text-[25px] my-[11px] transition-all"
      ></i>`;
  }

  //   SHU OYIM KETMAYAPTI HAMMA NARSA QILDIM
};

checkbox.onclick = () => {
  text.classList.toggle("line-through");

  if (text.classList.contains("line-through")) {
    checkbox.innerHTML = `
      <i
          class="fa-solid fa-check bg-gradient-to-r from-blue-500 to-violet-400 text-[18px] rounded-[60%] py-1 px-1 text-white"
      ></i>`;
  } else {
  }
};

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("items-logo")) {
    text.classList.add("line-through");
    itemsLogo.innerHTML = `<i
    class="fa-solid fa-check bg-gradient-to-r from-blue-500 to-violet-400 text-[18px] rounded-[60%] py-1 px-1 text-white"></i>`;
  }
});

document.addEventListener("click", () => {
  if (e.target.id == "close") {
    list.children.remove();
  }
});
