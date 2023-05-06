import API_URL from './utils/env.js';
import User from './utils/userModel.js';
import Card from './Components/Card.js';
import NotFound from './Components/NotFound.js';

let githubUser;

async function getUser(username) {
 const USER_RESPONSE = await fetch(`${API_URL}${username}`);
 if (USER_RESPONSE.status === 404) {
  card404();
 } else {
  const USER_DATA = await USER_RESPONSE.json();
  const REPOS_RESPONSE = await fetch(
   `${API_URL}${username}/repos?sort=created&per_page=5`,
  );
  const REPOS_DATA = await REPOS_RESPONSE.json();
  const JUST_REPO_NAMES = REPOS_DATA.map((repo) => {
   return { repoName: repo.name, repoUrl: repo.html_url };
  });
  githubUser = new User(
   USER_DATA.name,
   USER_DATA.avatar_url,
   USER_DATA.bio,
   USER_DATA.html_url,
   USER_DATA.public_repos,
   USER_DATA.followers,
   USER_DATA.following,
   JUST_REPO_NAMES,
  );
  screenLoad();
 }
}

form.addEventListener('submit', (e) => {
 e.preventDefault();
 const username = search.value;
 if (username) {
  getUser(username);
  form.reset();
 } else {
  alert('Please enter a username');
  form.reset();
 }
});
function screenLoad() {
 cardContainer.innerHTML = Card(githubUser);
}
function card404() {
 cardContainer.innerHTML = NotFound();
}
