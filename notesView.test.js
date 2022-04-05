/**
 * @jest-environment jsdom
 */


const NotesView = require('./notesView')
const fs = require('fs');
const NotesModel = require('./notesModel');
jest.mock('./notesModel');

describe('noresViews', () => {
  let notesView;
  let notesModel;
  beforeEach(() => {
    NotesModel.mockImplementation(() => {
      return {
        getNotes: () => {
          return ['get milk', 'got to the gym']
        }
      }
    })
    notesModel = new NotesModel;
    notesView = new NotesView(notesModel);
    document.body.innerHTML = fs.readFileSync('./index.html');
  });
  
  test('#displayNotes- gets a list of notes from the model', () => {
    notesView.displayNotes();
    expect(document.querySelectorAll('div.note').length).toBe(2);
  });
});