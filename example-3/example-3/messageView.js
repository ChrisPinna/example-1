class MessageView {
  constructor() {
    this.buttonEl = document.querySelector('#show-message-button');

    this.buttonEl.addEventListener('click', () => {
       this.displayMessage();
    });

    this.hideButtonEl = document.querySelector('#hide-button');

    this.hideButtonEl.addEventListener('click', () => {
       this.hideMessage();
    });
  }

  displayMessage() {
    const divEl = document.querySelector('#main-container');
    const newDiv = document.createElement('div');
    newDiv.id = 'message';
    newDiv.innerText = "Where's the sauce?"
    divEl.append(newDiv);
  }

  hideMessage() {
    const messageEls = document.querySelectorAll('#message');
    messageEls.forEach(message => message.hidden = true);
  }
}

module.exports = MessageView;