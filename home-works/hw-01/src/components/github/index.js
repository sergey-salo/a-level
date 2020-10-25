import githubLogo from "../../images/github.png";

const GITHUB_URL = "https://github.com/sergey-salo/a-level/tree/master/home-works/hw-01";

function GithubLogo() {
  return (
    <div id="githubLogo">
        <a href={GITHUB_URL}>
          <img src={githubLogo}/>
        </a>
    </div>
  )
}

export default GithubLogo