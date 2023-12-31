const Header = () => {
    return (
      <header className="header-style mx-auto flex">
        <nav className="mx-auto flex flex-col lg:flex-row items-center justify-between p-6 lg:px-8 animate-fade-in" aria-label="Global">
          <div className="flex flex-col lg:flex-row items-center">
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900 text-white mb-4 lg:mb-0 lg:mr-10 hover-a">Home</a>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900 text-white mb-4 lg:mb-0 lg:mr-10 hover-a">Services</a>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900 text-white mb-4 lg:mb-0 lg:mr-10 hover-a">Contact Us</a>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900 text-white mb-4 lg:mb-0 lg:mr-10 hover-a">About Us</a>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900 text-white mb-4 lg:mb-0 lg:mr-10 hover-a">Switch: Client</a>
          </div>
        </nav>
      </header>
    );
  };
  
  export default Header;