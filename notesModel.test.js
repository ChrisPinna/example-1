const NotesModel = require('./notesmodel');


describe('notesModel', () => {
  let notepad;
  beforeEach(() => {
    notepad = new NotesModel
  });

  test('#getNotes - starts with an empty array', () => {
    expect(notepad.getNotes()).toEqual([]);
  })
  test('#addNote - adds 1 item to the notepad', () => {
    expect(() => {
      notepad.addNote('Buy Milk');
    }).not.toThrow();
  })
  test('#getNotes - returns items in the notepad ', () => {
    notepad.addNote('Buy Milk');
    notepad.addNote('Go to the gym');
    expect(notepad.getNotes()).toEqual(['Buy Milk', 'Go to the gym']);
  })
  test('#reset - resets the notepad' , () => {
    notepad.addNote('Buy Milk');
    notepad.reset();
    expect(notepad.getNotes()).toEqual([]);
  });
})