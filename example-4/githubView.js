class GithubView {
  constructor(model, api) {
    this.model = model;
    this.api = api;

    const submitButtonEl = document.querySelector('#submit-button');
    const repoInputEl = document.querySelector('#repo-name-input');

    submitButtonEl.addEventListener('click', () => {
      const repoName = repoInputEl.value;
      this.api.getRepoInfo(repoName, this.display);
    });
  }

  display(repoData) {
    document.querySelector('#repo-name').innerText = repoData.full_name;
    document.querySelector('#repo-description').innerText = repoData.description;
    document.querySelector('#repo-image').src = repoData.organization.avatar_url;


    


  }
}

module.exports = GithubView;