import { Link } from "react-router";

const FooterClient = () => {
  return (
    <footer className="footer footer-center bg-black text-white rounded p-10">
      <nav className="grid grid-flow-col gap-4">
        <a className="link link-hover text-white hover:text-gray-300">About us</a>
        <a className="link link-hover text-white hover:text-gray-300">Contact</a>
        <a className="link link-hover text-white hover:text-gray-300">Jobs</a>
        <a className="link link-hover text-white hover:text-gray-300">Press kit</a>
      </nav>

      <nav>
        <div className="grid grid-flow-col gap-4">
          <a className="hover:text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-white">
              <path d="M24 4.557c-..."></path>
            </svg>
          </a>
          <a className="hover:text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-white">
              <path d="M19.615 3.184c-..."></path>
            </svg>
          </a>
          <a className="hover:text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-white">
              <path d="M9 8h-3v4h3v12h5v..."></path>
            </svg>
          </a>
        </div>
      </nav>

      <aside className="mt-4">
        <p className="text-sm text-gray-400">Copyright © {new Date().getFullYear()} - All rights reserved by ACME Industries Ltd</p>
      </aside>
    </footer>
  );
};

export default FooterClient;
