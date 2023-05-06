function Repos(repos) {
 return `<div id="reposContainer">${repos
  .map((repo) => {
   return `<span>
    <a href="${repo.repoUrl}" target="_blank">${repo.repoName}</a>
   </span>`;
  })
  .join('')}</div>`;
}
export default Repos;
