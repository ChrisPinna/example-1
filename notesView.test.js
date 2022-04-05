/**
 * @jest-environment jsdom
 */


const NotesView = require('./notesView')
const fs = require('fs');
const NotesModel = require('./notesModel');

describe('notesViews', () => {
  let notesView;
  let notesModel;
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    notesModel = new NotesModel;
    notesView = new NotesView(notesModel);
  });
  
  test('#displayNotes- gets a list of notes from the model', () => {
    notesModel.addNote('note 1');
    notesModel.addNote('note 2');
    notesView.displayNotes();
    expect(document.querySelectorAll('div.note').length).toBe(2);
  });

  test('addNote# adds notes to the model', () => {

    const inputEl = document.querySelector('#input');
    const buttonEl = document.querySelector('#add-note');

    inputEl.value = 'new note';
    buttonEl.click();
    notesView.displayNotes();
    const newNote = document.querySelector('div.note');
    expect(newNote.innerHTML).toBe('new note')
  });

  test('#displayNotes- gets a list of notes from the model', () => {
    notesModel.addNote('note 1');
    notesModel.addNote('note 2');
    notesView.displayNotes();
    notesView.displayNotes();
    expect(document.querySelectorAll('div.note').length).toBe(2);
  });
});