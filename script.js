const body = document.querySelector("body");
const noteInput = document.getElementById("input");
const row = document.getElementById("row");
const popup = document.getElementById("popup");
const popupTitle = document.getElementById("popup-title");
const popupBody = document.getElementById("popup-body");
const blurTarget = document.getElementById("blur");
const addBtn = document.getElementById("add");
const notes = [];
let vdBtn, closeCardBtn, noteTitle, noteBody, inputStr, removeBtn;
let i = 0;

popup.style.display = "none";

addBtn.addEventListener("click", () => {
  if (noteInput.value != "") {
    inputStr =
      noteInput.value.length > 50
        ? `${noteInput.value.substring(0, 50)}...`
        : noteInput.value;
    row.innerHTML += `<div class="col-lg-6" id="note-card-${i}">
                        <div class="card mb-4">
                          <div class="card-body">
                            <h5 class="card-title d-inline-block" id="note-title-${i}">Note ${
      i + 1
    }</h5>
                            <button class="rm-card"
           style="background-color: transparent; border: none; float: right"
         >
           <img src="media/trash.png" alt="" width="20" />
         </button>
                            <p class="card-text" id="note-body-${i}">
                              ${inputStr}
                            </p>
                            <button href="#" class="btn btn-primary vd">View Detail</button>
                          </div>
                        </div>
                      </div>`;
    notes[i] = {
      title: document.getElementById(`note-title-${i}`).textContent,
      body: noteInput.value,
    };
    vdBtn = document.querySelectorAll(".vd");
    removeBtn = document.querySelectorAll(".rm-card");
    vdBtn.forEach((e, ind) => {
      e.addEventListener("click", () => {
        blurTarget.classList.add("opacity-25");
        popupTitle.textContent = notes[ind].title;
        popupBody.textContent = notes[ind].body;
        popup.style.display = "block";
        closeCardBtn = document.getElementById("close-card");
        closeCardBtn.addEventListener("click", () => {
          popup.style.display = "none";
          blurTarget.classList.remove("opacity-25");
        });
      });
    });
    removeBtn.forEach((e, ind) => {
      e.addEventListener("click", () => {
        document.getElementById(`note-card-${ind}`).remove();
        i--;
      });
    });
    i++;
    noteInput.value = "";
  }
});
