import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ isAuthenticated, setIsAuthenticated }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/logout", {
        method: "POST",
        credentials: "include", // Include cookies in the request
      });
      if (response.ok) {
        setIsAuthenticated(false);
        navigate("/login");
      }
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 shadow-lg backdrop-blur-sm bg-opacity-90">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold font-sans hover:text-gray-200 transition duration-300">
          MyApp
        </Link>
        <div>
          {isAuthenticated ? (
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition duration-300 transform hover:scale-105 shadow-md"
            >
              Logout
            </button>
          ) : (
            <div className="flex gap-6">
              <Link
                to="/login"
                className="text-white hover:text-gray-200 text-lg font-medium transition duration-300"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="text-white hover:text-gray-200 text-lg font-medium transition duration-300"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;