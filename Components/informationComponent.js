function Information({ name, bio, followers, following, reposCount }) {
 return `<div id="informationContainer">
 <h1>${name != null ? name : 'Nameless User'}</h1>
 <p>${bio != null ? bio : 'User without any history'}</p>
 <div id="numbers"> <span>${followers} Followers</span><span>${following} Following</span><span>${reposCount} Repos</span> </div>
 </div>`;
}
export default Information;
