const { getUserRepos } = require("./github");

// TODO: Enter your GitHub username
const gitHubUser = "bracej97";

getUserRepos(gitHubUser).then((repos) => {
  console.log(repos);
});
