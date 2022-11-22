import { TiSocialTwitterCircular as Twitter,TiSocialLinkedinCircular as LinkEdIn ,TiSocialGithubCircular as GitHub} from "react-icons/ti";

function Footer() {
  return (
    <footer>
      <h3>My social networks</h3>
      <a href="https://twitter.com/Cesar_Quint_" target='blank'><Twitter/></a>
      <a href="https://www.linkedin.com/in/cesar-quintero-267764209/" target='blank'><LinkEdIn/></a>
      <a href="https://github.com/CesarQuint" target='blank'><GitHub/></a>
    </footer>
  )
}

export default Footer