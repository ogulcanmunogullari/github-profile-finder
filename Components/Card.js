import Hero from './heroContainer.js';
import Information from './informationComponent.js';
import Repos from './reposContainer.js';

function Card(user) {
 return `
 <div class="card">
    ${Hero(user.image, user.name)}
  <div>
    ${Information(user)}
    ${Repos(user.repos)}
    </div>
 </div>
`;
}
export default Card;
