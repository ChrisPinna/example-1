const NotesApi = require('./notesApi');

require('jest-fetch-mock').enableMocks();
describe('NotesApi', () => {
  test('leadNotes# returns the notes', async () => {
    const api = new NotesApi;
    fetch.mockResponseOnce(JSON.stringify({
      note: 'get milk'
    }));
    api.loadNotes((notesJson) => {
      console.log(notesJson);
      expect(notesJson.note).toBe('get milk');
    });
  });
});