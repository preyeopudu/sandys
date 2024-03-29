import logo from "../assets/logo.png";
import shop from "../assets/shop.png";
import account from "../assets/account.png";
import logout from "../assets/Logout.png";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 bg-opacity-70 p-4">
      <div className=" mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <img src={logo} alt="Logo" className="h-8" />
          </div>
          {/* Navigation links */}
          <div className="hidden lg:block">
            <ul className="flex space-x-4">
              <li>
                <a
                  href="#"
                  className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Menu
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Blog
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="flex gap-x-9 items-center justify-end text-sm">
            <div className=" gap-x-4 hidden md:flex">
              <button className=" rounded-3xl border border-sandy-green text-sandy-green px-6 h-10">
                Login
              </button>
              <button className=" rounded-3xl border border-sandy-green bg-sandy-green px-6 h-10">
                Register
              </button>
            </div>

            <div className="flex gap-x-4 items-center justify-end text-sm md:hidden">
              <button className="rounded-lg  border border-sandy-green text-sandy-green flex items-center justify-center w-9 h-9">
                <img src={logout} alt="Login" className=" w-4 h-5" />
              </button>
              <button className=" rounded-lg border border-sandy-green bg-sandy-green flex items-center justify-center  w-9 h-9">
                <img src={account} alt="Register" className=" w-6 h-6" />
              </button>
            </div>
            <img src={shop} alt="shop" className=" h-" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
