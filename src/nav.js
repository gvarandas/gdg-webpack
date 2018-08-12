const makeNav = (navTitle) => {
  const nav = document.createElement('nav');
  const title = document.createElement('h1');
  title.innerText = navTitle;
  nav.appendChild(title);
  return nav;
};

export default makeNav;
