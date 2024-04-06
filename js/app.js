const projects = [
  {
    title: "Snap",
    githubLink: "https://github.com/azamjonoff/snap",
    vercelLink: "https://snap-bice-nu.vercel.app/",
  },
  {
    title: "Chanel",
    githubLink: "https://github.com/azamjonoff/Chanel-card-component",
    vercelLink: "https://chanel-card-component.vercel.app/",
  },
  {
    title: "Blog Preview Card",
    githubLink: "https://github.com/azamjonoff/blog-preview-card",
    vercelLink: "https://blog-preview-card-nine-phi.vercel.app/",
  },
  {
    title: "My Card",
    githubLink: "https://github.com/azamjonoff/my-card",
    vercelLink: "https://vercel.com/abdullohs-projects-f68d1567/my-card",
  },
  {
    title: "Qr-code",
    githubLink: "https://github.com/azamjonoff/Qr-code",
    vercelLink: "https://qr-code-eight-flax.vercel.app/",
  },
  {
    title: "Pixer",
    githubLink: "https://github.com/azamjonoff/Pixer-project",
    vercelLink: "https://pixer-project-beta.vercel.app/",
  },
  {
    title: "Uzbekistan-regions",
    githubLink: "https://github.com/azamjonoff/uzbekistan-regions",
    vercelLink: "https://uzbekistan-regions-q184.vercel.app/",
  },
  {
    title: "Akademnashr",
    githubLink: "https://github.com/azamjonoff/akademnashr",
    vercelLink: "https://vercel.com/abdullohs-projects-f68d1567/akademnashr",
  },
  {
    title: "Football-backround-image",
    githubLink: "https://github.com/azamjonoff/football-backround-image",
    vercelLink: "https://football-backround-image.vercel.app/",
  },
  {
    title: "Ansormed",
    githubLink: "https://github.com/azamjonoff/ansormed",
    vercelLink: "https://ansormed-kappa.vercel.app/",
  },
  {
    title: "Usa",
    githubLink: "https://github.com/azamjonoff/usa",
    vercelLink: "https://vercel.com/abdullohs-projects-f68d1567/usa",
  },
  {
    title: "Tip-calculator",
    githubLink: "https://github.com/azamjonoff/tip-calculator",
    vercelLink: "https://tip-calculator-sepia-rho.vercel.app/",
  },
  {
    title: "Type-goals",
    githubLink: "https://github.com/azamjonoff/backround-video",
    vercelLink: "https://backround-video.vercel.app/",
  },
  {
    title: "Castaway",
    githubLink: "https://github.com/azamjonoff/Castaway",
    vercelLink: "https://castaway-fawn.vercel.app/",
  },
  {
    title: "Create-x",
    githubLink: "https://github.com/azamjonoff/create-x",
    vercelLink: "https://create-x-gilt.vercel.app/",
  },
  {
    title: "Crowdfund",
    githubLink: "https://github.com/azamjonoff/crowdfund",
    vercelLink: "https://crowdfund-taupe-iota.vercel.app/",
  }
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
