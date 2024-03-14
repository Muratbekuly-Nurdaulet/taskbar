const inputElement = document.getElementById("title");
const createBtn = document.getElementById("create");
const listElement = document.getElementById("list");

const notes = [
  {
    title: "записать блок про массивы",
    completed: false,
  },
  {
    title: "рассказать теорию объектов",
    completed: true,
  },
];

function render() {
  // for (let i = 0; i < notes.lenght; i++) {
  //   listElement.insertAdjacentHTML("beforeend", getNoteTemplate(notes[i]));
  // }

  for (let note of notes) {
    listElement.insertAdjacentHTML("beforeend", getNoteTemplate(note));
  }
}

render();

createBtn.onclick = function () {
  if (inputElement.value.lenght == 0) {
    return;
  }
  const newNote = {
    title: inputElement.value,
    completed: false,
  };
  listElement.insertAdjacentHTML("beforeend", getNoteTemplate(newNote));
  inputElement.value = "";
};

function getNoteTemplate(note) {
  console.log(note.completed);
  return ` 
  <li 
    class="list-group-item d-flex justify-content-between  
      align-items-center" 
  > 
    <span class='${note.completed ? "text-decoration-line-through" : ""}'>${
    note.title
  }</span> 
    <span> 
      <span class="btn btn-small btn-${
        note.completed ? "warning" : "success"
      }">&check;</span> 
      <span class="btn btn-small btn-danger">&times;</span> 
    </span> 
  </li>`;
}
