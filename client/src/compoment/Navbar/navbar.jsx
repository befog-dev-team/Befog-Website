import { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import logo from "../../assets/befog_logo.svg";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Mobile navbar toggle
  // const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Dropdown toggle
  // const [selectedCountry, setSelectedCountry] = useState({
  //   shortForm: "IN",
  //   name: "India",
  //   flag: "https://flagcdn.com/w320/in.png"
  // });

  // useEffect(() => {
  //   const savedCountry = localStorage.getItem("selectedCountry");
  //   if (savedCountry) {
  //     try {
  //       const parsedCountry = JSON.parse(savedCountry); // Ensure valid JSON format
  //       setSelectedCountry(parsedCountry);
  //     } catch (e) {
  //       console.error("Invalid JSON in localStorage for selectedCountry:", e);
  //       localStorage.removeItem("selectedCountry"); // Clear invalid data
  //     }
  //   }
  // }, []);

  // const countries = [
  //   { name: "Andorra", shortForm: "AD", flag: "https://flagcdn.com/w320/ad.png" },
  //   { name: "United Arab Emirates", shortForm: "AE", flag: "https://flagcdn.com/w320/ae.png" },
  //   { name: "Afghanistan", shortForm: "AF", flag: "https://flagcdn.com/w320/af.png" },
  //   { name: "Antigua and Barbuda", shortForm: "AG", flag: "https://flagcdn.com/w320/ag.png" },
  //   { name: "Anguilla", shortForm: "AI", flag: "https://flagcdn.com/w320/ai.png" },
  //   { name: "Albania", shortForm: "AL", flag: "https://flagcdn.com/w320/al.png" },
  //   { name: "Armenia", shortForm: "AM", flag: "https://flagcdn.com/w320/am.png" },
  //   { name: "Angola", shortForm: "AO", flag: "https://flagcdn.com/w320/ao.png" },
  //   { name: "Antarctica", shortForm: "AQ", flag: "https://flagcdn.com/w320/aq.png" },
  //   { name: "Argentina", shortForm: "AR", flag: "https://flagcdn.com/w320/ar.png" },
  //   { name: "American Samoa", shortForm: "AS", flag: "https://flagcdn.com/w320/as.png" },
  //   { name: "Austria", shortForm: "AT", flag: "https://flagcdn.com/w320/at.png" },
  //   { name: "Australia", shortForm: "AU", flag: "https://flagcdn.com/w320/au.png" },
  //   { name: "Aruba", shortForm: "AW", flag: "https://flagcdn.com/w320/aw.png" },
  //   { name: "Åland Islands", shortForm: "AX", flag: "https://flagcdn.com/w320/ax.png" },
  //   { name: "Azerbaijan", shortForm: "AZ", flag: "https://flagcdn.com/w320/az.png" },
  //   { name: "Bahamas", shortForm: "BS", flag: "https://flagcdn.com/w320/bs.png" },
  //   { name: "Bahrain", shortForm: "BH", flag: "https://flagcdn.com/w320/bh.png" },
  //   { name: "Bangladesh", shortForm: "BD", flag: "https://flagcdn.com/w320/bd.png" },
  //   { name: "Barbados", shortForm: "BB", flag: "https://flagcdn.com/w320/bb.png" },
  //   { name: "Belarus", shortForm: "BY", flag: "https://flagcdn.com/w320/by.png" },
  //   { name: "Belgium", shortForm: "BE", flag: "https://flagcdn.com/w320/be.png" },
  //   { name: "Belize", shortForm: "BZ", flag: "https://flagcdn.com/w320/bz.png" },
  //   { name: "Benin", shortForm: "BJ", flag: "https://flagcdn.com/w320/bj.png" },
  //   { name: "Bhutan", shortForm: "BT", flag: "https://flagcdn.com/w320/bt.png" },
  //   { name: "Bolivia", shortForm: "BO", flag: "https://flagcdn.com/w320/bo.png" },
  //   { name: "Bosnia and Herzegovina", shortForm: "BA", flag: "https://flagcdn.com/w320/ba.png" },
  //   { name: "Botswana", shortForm: "BW", flag: "https://flagcdn.com/w320/bw.png" },
  //   { name: "Brazil", shortForm: "BR", flag: "https://flagcdn.com/w320/br.png" },
  //   { name: "Brunei", shortForm: "BN", flag: "https://flagcdn.com/w320/bn.png" },
  //   { name: "Bulgaria", shortForm: "BG", flag: "https://flagcdn.com/w320/bg.png" },
  //   { name: "Burkina Faso", shortForm: "BF", flag: "https://flagcdn.com/w320/bf.png" },
  //   { name: "Burundi", shortForm: "BI", flag: "https://flagcdn.com/w320/bi.png" },
  //   { name: "Cabo Verde", shortForm: "CV", flag: "https://flagcdn.com/w320/cv.png" },
  //   { name: "Cambodia", shortForm: "KH", flag: "https://flagcdn.com/w320/kh.png" },
  //   { name: "Cameroon", shortForm: "CM", flag: "https://flagcdn.com/w320/cm.png" },
  //   { name: "Canada", shortForm: "CA", flag: "https://flagcdn.com/w320/ca.png" },
  //   { name: "Chile", shortForm: "CL", flag: "https://flagcdn.com/w320/cl.png" },
  //   { name: "China", shortForm: "CN", flag: "https://flagcdn.com/w320/cn.png" },
  //   { name: "Colombia", shortForm: "CO", flag: "https://flagcdn.com/w320/co.png" },
  //   { name: "Comoros", shortForm: "KM", flag: "https://flagcdn.com/w320/km.png" },
  //   { name: "Congo", shortForm: "CG", flag: "https://flagcdn.com/w320/cg.png" },
  //   { name: "Costa Rica", shortForm: "CR", flag: "https://flagcdn.com/w320/cr.png" },
  //   { name: "Croatia", shortForm: "HR", flag: "https://flagcdn.com/w320/hr.png" },
  //   { name: "Cuba", shortForm: "CU", flag: "https://flagcdn.com/w320/cu.png" },
  //   { name: "Cyprus", shortForm: "CY", flag: "https://flagcdn.com/w320/cy.png" },
  //   { name: "Czechia", shortForm: "CZ", flag: "https://flagcdn.com/w320/cz.png" },
  //   { name: "Denmark", shortForm: "DK", flag: "https://flagcdn.com/w320/dk.png" },
  //   { name: "Djibouti", shortForm: "DJ", flag: "https://flagcdn.com/w320/dj.png" },
  //   { name: "Dominica", shortForm: "DM", flag: "https://flagcdn.com/w320/dm.png" },
  //   { name: "Dominican Republic", shortForm: "DO", flag: "https://flagcdn.com/w320/do.png" },
  //   { name: "Ecuador", shortForm: "EC", flag: "https://flagcdn.com/w320/ec.png" },
  //   { name: "Egypt", shortForm: "EG", flag: "https://flagcdn.com/w320/eg.png" },
  //   { name: "El Salvador", shortForm: "SV", flag: "https://flagcdn.com/w320/sv.png" },
  //   { name: "Estonia", shortForm: "EE", flag: "https://flagcdn.com/w320/ee.png" },
  //   { name: "Eswatini", shortForm: "SZ", flag: "https://flagcdn.com/w320/sz.png" },
  //   { name: "Ethiopia", shortForm: "ET", flag: "https://flagcdn.com/w320/et.png" },
  //   { name: "Fiji", shortForm: "FJ", flag: "https://flagcdn.com/w320/fj.png" },
  //   { name: "Finland", shortForm: "FI", flag: "https://flagcdn.com/w320/fi.png" },
  //   { name: "France", shortForm: "FR", flag: "https://flagcdn.com/w320/fr.png" },
  //   { name: "Germany", shortForm: "DE", flag: "https://flagcdn.com/w320/de.png" },
  //   { name: "Gabon", shortForm: "GA", flag: "https://flagcdn.com/w320/ga.png" },
  //   { name: "Gambia", shortForm: "GM", flag: "https://flagcdn.com/w320/gm.png" },
  //   { name: "Georgia", shortForm: "GE", flag: "https://flagcdn.com/w320/ge.png" },
  //   { name: "Greece", shortForm: "GR", flag: "https://flagcdn.com/w320/gr.png" },
  //   { name: "Grenada", shortForm: "GD", flag: "https://flagcdn.com/w320/gd.png" },
  //   { name: "Guatemala", shortForm: "GT", flag: "https://flagcdn.com/w320/gt.png" },
  //   { name: "Guinea", shortForm: "GN", flag: "https://flagcdn.com/w320/gn.png" },
  //   { name: "Guinea-Bissau", shortForm: "GW", flag: "https://flagcdn.com/w320/gw.png" },
  //   { name: "Guyana", shortForm: "GY", flag: "https://flagcdn.com/w320/gy.png" },
  //   { name: "Haiti", shortForm: "HT", flag: "https://flagcdn.com/w320/ht.png" },
  //   { name: "Honduras", shortForm: "HN", flag: "https://flagcdn.com/w320/hn.png" },
  //   { name: "Hungary", shortForm: "HU", flag: "https://flagcdn.com/w320/hu.png" },
  //   { name: "Iceland", shortForm: "IS", flag: "https://flagcdn.com/w320/is.png" },
  //   { name: "India", shortForm: "IN", flag: "https://flagcdn.com/w320/in.png" },
  //   { name: "Indonesia", shortForm: "ID", flag: "https://flagcdn.com/w320/id.png" },
  //   { name: "Iran", shortForm: "IR", flag: "https://flagcdn.com/w320/ir.png" },
  //   { name: "Iraq", shortForm: "IQ", flag: "https://flagcdn.com/w320/iq.png" },
  //   { name: "Ireland", shortForm: "IE", flag: "https://flagcdn.com/w320/ie.png" },
  //   { name: "Israel", shortForm: "IL", flag: "https://flagcdn.com/w320/il.png" },
  //   { name: "Italy", shortForm: "IT", flag: "https://flagcdn.com/w320/it.png" }
  // ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // const toggleDropdown = () => {
  //   setIsDropdownOpen(!isDropdownOpen);
  // };

  // const handleCountrySelect = (country) => {
  //   setSelectedCountry(country);
  //   localStorage.setItem("selectedCountry", JSON.stringify(country));
  //   setIsDropdownOpen(false); // Close dropdown
  //   setIsOpen(false); // Close mobile navbar
  // };

  return (
    <nav className="navbar">
      <Link to="/">
        <div className="logo-container">
          <img src={logo} alt="Befog Logo" className="logo" />
        </div>
      </Link>

      <ul
        className={isOpen ? "nav-links open" : "nav-links"}
        onClick={() => isOpen && toggleMenu()} // Close navbar on link click
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>

      {/* Dropdown for country selection */}
      {/* <li
        className="dropdown"
        onMouseEnter={() => !isOpen && toggleDropdown()} // Prevent mobile dropdown hover conflict
        onMouseLeave={() => !isOpen && toggleDropdown()}
      >
        <button
          className="dropdown-toggle"
          onClick={toggleDropdown}
          aria-haspopup="true"
          aria-expanded={isDropdownOpen}
        >
          {selectedCountry.flag && (
            <img
              src={selectedCountry.flag}
              alt={selectedCountry.shortForm}
              className="flag-icon"
            />
          )}
          <span>{selectedCountry.shortForm}</span>
          <FaChevronDown className="dropdown-icon" />
        </button>
        {isDropdownOpen && (
          <ul className="dropdown-menu">
            {countries.map((country) => (
              <li
                key={country.shortForm}
                className="dropdown-item"
                onClick={() => handleCountrySelect(country)}
              >
                {country.flag && (
                  <img
                    src={country.flag}
                    alt={country.shortForm}
                    className="flag-icon"
                  />
                )}
                <span className="country-name">{country.name}</span>
              </li>
            ))}
          </ul>
        )}
      </li> */}

      <button
        className="menu-icon"
        onClick={toggleMenu}
        aria-label="Toggle navigation"
        aria-expanded={isOpen}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
    </nav>
  );
};

export default Navbar;
