class NotesView {
    constructor(model) {
    this.model = model;
    this.buttonEl = document.querySelector('#add-note');
    this.buttonEl.addEventListener('click', () => {
      this.addNote();
      this.displayNotes();
      document.querySelector('#input').value = '';
  })
}
  displayNotes() {
    this.#clearDisplay();
    const notes = this.model.getNotes();
    notes.forEach(note => {
      const newDiv = document.createElement('div');
      newDiv.className = 'note';
      const mainConstainerDiv = document.querySelector('#main-container')
      mainConstainerDiv.append(newDiv)
      newDiv.innerHTML = note;
    })
  }

  addNote() {
    const inputEl = document.querySelector('#input');
    const inputText = inputEl.value;
    this.model.addNote(inputText);
  }

  #clearDisplay() {
    document.querySelectorAll('div.note').forEach(note => note.remove());
  }
}



module.exports = NotesView;