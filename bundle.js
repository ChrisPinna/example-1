(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // notesModel.js
  var require_notesModel = __commonJS({
    "notesModel.js"(exports, module) {
      var NotesModel = class {
        constructor() {
          this.notes = [];
        }
        getNotes() {
          return this.notes;
        }
        addNote(note) {
          this.notes.push(note);
        }
        reset() {
          this.notes = [];
        }
      };
      module.exports = NotesModel;
    }
  });

  // notesView.js
  var require_notesView = __commonJS({
    "notesView.js"(exports, module) {
      var NotesView2 = class {
        constructor(model) {
          this.model = model;
          this.buttonEl = document.querySelector("#add-note");
          this.buttonEl.addEventListener("click", () => {
            this.addNote();
            this.displayNotes();
            document.querySelector("#input").value = "";
          });
        }
        displayNotes() {
          this.#clearDisplay();
          const notes2 = this.model.getNotes();
          notes2.forEach((note) => {
            const newDiv = document.createElement("div");
            newDiv.className = "note";
            const mainConstainerDiv = document.querySelector("#main-container");
            mainConstainerDiv.append(newDiv);
            newDiv.innerHTML = note;
          });
        }
        addNote() {
          const inputEl = document.querySelector("#input");
          const inputText = inputEl.value;
          this.model.addNote(inputText);
        }
        #clearDisplay() {
          document.querySelectorAll("div.note").forEach((note) => note.remove());
        }
      };
      module.exports = NotesView2;
    }
  });

  // index.js
  var NoteModel = require_notesModel();
  var NotesView = require_notesView();
  var notes = new NoteModel();
  var notesViews = new NotesView(notes);
  notesViews.displayNotes();
  console.log("the notes app is running");
  console.log(notes.getNotes());
})();
