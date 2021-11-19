const add = document.querySelector('.add');
const body = document.querySelector('.body');
const updateData=()=>{
  const data=document.querySelectorAll('textarea');
     const notes=[];
     data.forEach((note)=>{
       return notes.push(note.value);
     });
     localStorage.setItem('notes',JSON.stringify(notes)); 
}
const addNote = (text = "") => {
  const note = document.createElement('div');
  note.classList.add('taskBox');
  const htmlData = ` <div class="tb-header">
  <div class="delete">X</div>
 <div class="edit">E</div>
</div>
<div class="main ${text ? "" : "hidden"}"></div>
<textarea name="data" id="txt" cols="30" rows="10" class="${text ? "hidden" : ""}"></textarea>
  `;
  note.insertAdjacentHTML('afterbegin', htmlData);
  body.appendChild(note);
  const del = note.querySelector('.delete');
  const edit = note.querySelector('.edit');
  const mained = note.querySelector('.main');
  const textarea = note.querySelector('textarea');
  textarea.value = text;
  mained.innerHTML = text;
  del.addEventListener('click', () => {
    note.remove();
    updateData();
  });
  edit.addEventListener('click', () => {
    mained.classList.toggle('hidden');
    textarea.classList.toggle('hidden');
  });
  textarea.addEventListener('change', (event) => {
    const value = event.target.value;
    mained.innerHTML = value;
    updateData();
  })
}
add.addEventListener('click', () => addNote());

const notes=JSON.parse(localStorage.getItem('notes'));
if (notes) {
  notes.forEach((note)=>addNote(note));
}