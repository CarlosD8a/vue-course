import "./style.css";
import heroImg from "./assets/hero.png";
import typescriptLogo from "./assets/typescript.svg";
import viteLogo from "./assets/vite.svg";
// import "./bases/01-const-let"
// import "./bases/02-objects";
// import "./bases/03-arrays";
// import "./bases/04-functions";
// import "./bases/05-deses-obj";
// import "./bases/06-deses-arr";
// import "./bases/07-imp-exp";
// import "./bases/08-promess";
// import "./bases/09-fetch-api";
// import "./bases/10-axios";
import "./bases/11-async-await";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<section id="center">
  <div class="hero">
    <img src="${heroImg}" class="base" width="170" height="179">
    <img src="${typescriptLogo}" class="framework" alt="TypeScript logo"/>
    <img src="${viteLogo}" class="vite" alt="Vite logo" />
  </div>
</section>

`;
