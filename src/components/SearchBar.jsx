import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import { Link, useLocation } from "react-router-dom";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);

  const [visible, setVisible] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (
      location.pathname.includes("about") ||
      location.pathname.includes("contact")
    ) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  }, [location]);

  return showSearch && visible ? (
    <div className=" bg-gray-50 text-center ">
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 mx-3 my-3 rounded-full w-3/4 sm:w-1/2">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 outline-none bg-inherit text-sm"
          type="text"
          placeholder="Search"
        />
        <Link to="/collection">
          <img className="w-4" src={assets.search_icon} alt="" />
        </Link>
      </div>
      <img
        onClick={() => setShowSearch(false)}
        className="inline w-3 cursor-pointer"
        src={assets.cross_icon}
        alt=""
      />
    </div>
  ) : null;
};

export default SearchBar;
