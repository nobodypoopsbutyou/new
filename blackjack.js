
- name: Setup Node.js environment
  uses: actions/setup-node@v2.1.5
  with:
    # Set always-auth in npmrc
    always-auth: # optional, default is false
    # Version Spec of the version to use.  Examples: 12.x, 10.15.1, >=10.15.0
    node-version: # optional
    # Target architecture for Node to use. Examples: x86, x64. Will use system architecture by default.
    architecture: # optional
    # Set this option if you want the action to check for the latest available version that satisfies the version spec
    check-latest: # optional
    # Optional registry to set up for auth. Will set the registry in a project level .npmrc and .yarnrc file, and set up auth to read in from env.NODE_AUTH_TOKEN
    registry-url: # optional
    # Optional scope for authenticating against scoped registries
    scope: # optional
    # Used to pull node distributions from node-versions.  Since there's a default, this is typically not supplied by the user.
    token: # optional, default is ${{ github.token }}
    # Deprecated. Use node-version instead. Will not be supported after October 1, 2019
    version: # optional
const playerNum = Math.floor((Math.random() * 11) + 1);
const playerNumTwo = Math.floor((Math.random() * 11) + 1);
const comNum = Math.floor((Math.random() * 11) + 1);


const blackJack = {
	const playerCardOne = playerNum;
	const playerCardTwo = playerNumTwo;
	
	const comCardOne = comNum;
	const comCardTwo = comNum;
    let playerHand = playerCardOne + playerCardTwo;
	let comHand = comCardOne + comCardTwo;
	let comCardTotal = comCardOne + comCardTwo;
    let playerCardTotal = playerCardOne + playerCardTwo;

	let showPlayerHand = (playerCardOne + ', ' + playerCardTwo);
    let showComHand = (comCardOne + ', ' + comCardTwo);

console.log(showPlayerHand);
console.log(playerCardTotal);
console.log(showComHand);
console.log(comCardTotal);
};
