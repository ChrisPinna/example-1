class NotesView {
constructor(model) {
  this.model = model;
}
displayNotes() {
  const notes = this.model.getNotes();

  notes.forEach(note => {
    const newDiv = document.createElement('div');
    newDiv.className = 'note';
    const mainConstainerDiv = document.querySelector('#main-container')
    mainConstainerDiv.append(newDiv)
    newDiv.innerHTML = note;
  })
}
}

module.exports = NotesView;