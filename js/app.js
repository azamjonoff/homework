const projects = [
  {
    title: "snap",
    githubLink: "https://github.com/azamjonoff/snap",
    vercelLink: "https://snap-bice-nu.vercel.app/",
  },
  {
    title: "Chanel",
    githubLink: "https://github.com/azamjonoff/Chanel-card-component",
    vercelLink: "https://chanel-card-component.vercel.app/",
  },
];

const template = document.querySelector("template");
const worksList = document.querySelector(".works__list");

projects.forEach((project) => {
  const clone = template.content.cloneNode(true);

  const title = clone.querySelector(".works__list__title");
  const linkGithub = clone.querySelector(".works__list__link__github");
  const linkVercel = clone.querySelector(".works__list__link__vercel");

  title.textContent = project.title;
  linkGithub.href = project.githubLink;
  linkVercel.href = project.vercelLink;

  worksList.appendChild(clone);
});
