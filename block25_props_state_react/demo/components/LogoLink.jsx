// props = {link: string, logo: string}
function LogoLink({ link, logo, altText }) {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <img src={logo} className="logo" alt={altText} />
    </a>
  );
}

export default LogoLink;
