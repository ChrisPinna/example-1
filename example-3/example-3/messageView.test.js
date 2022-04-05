/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const MessageView = require('./messageView');

describe('MessageView', () => {
  it('clicks the button', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new MessageView();

    const inputEl = document.querySelector('#message-input')
    inputEl.value = 'Hi'

    const buttonEl = document.querySelector('#show-message-button');
    buttonEl.click();

    const messageEl = document.querySelector('#message')

    expect(messageEl.innerText).toBe('Hi');
  });
  it('clicks the button', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    const view = new MessageView();

    const generateButtonEl = document.querySelector('#show-message-button');
    generateButtonEl.click();

    const hideButtonEl = document.querySelector('#hide-button')
    hideButtonEl.click();

    expect(document.querySelector('#message')).toHaveProperty('hidden', true);
  });
});