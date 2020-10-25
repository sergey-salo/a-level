import React from "react";
import Header from "../header";
import { Footer } from '../footer';
import Profile from "../profile";
import GithubLogo from "../github";

function PageContent(props) {
  return (
    <div id="content">
      <Header userNames={props.userNames}/>
      <Profile userNames={props.userNames}/>
      <GithubLogo />
      {/* <a href={GITHUB_URL}><img id="githubLogo" src={githubLogo}/></a> */}
      <Footer />
    </div>
  )
}

export default PageContent