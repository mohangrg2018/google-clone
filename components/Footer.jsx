import CurrentAddress from "./CurrentAddress";

const Footer = () => {
  return (
    <footer className="w-full absolute bottom  bg-[#F2F2F2] text-sm">
      <CurrentAddress />
      <section className="flex flex-col gap-3 sm:flex-row justify-between items-center border-t border-gray-300 px-4 py-3">
        <ul className="flex gap-5">
          <li className="link">About</li>
          <li className="link">Advertising</li>
          <li className="link">Business</li>
          <li className="link">How Search Works</li>
        </ul>
        <ul className="flex gap-5">
          <li className="link">Privacy</li>
          <li className="link">Terms</li>
          <li className="link">Settings</li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
