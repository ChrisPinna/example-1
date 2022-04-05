const NoteModel = require('./notesModel');
const NotesView = require('./notesView')

const notes = new NoteModel();
const notesViews = new NotesView(notes);

notesViews.displayNotes();
console.log('the notes app is running');
console.log(notes.getNotes());
