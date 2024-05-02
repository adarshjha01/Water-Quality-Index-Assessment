import React, { useState } from "react";
import "../searchbar/Searchbar.css";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";
import { NavLink,useNavigate  } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
// import e from "express";
import { set } from "firebase/database";

const SearchBar = ({ user ,setUser, setLoader}) => {
  const [term, setTerm] = useState("");
  const [input, setInput] = useState("");

  const fetchData =(value)=> {
    fetch('https://jsonplaceholder.typicode.com/users').then();
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value)
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    // Perform search using the term state
    console.log(term);
  };

  const navigate = useNavigate();
  const logout = async () => {
    const auth = getAuth();

    try {
      await signOut(auth);
      setUser(null);
      setLoader(false);
      console.log('user signout successfully!')
      navigate('/')
      
    } catch (err) {
      console.log('Error occured in signout')
    }
      
  };

  return (
    <>
      <div className="search">
        <Link>
          <img src="./logo.png" style={{ height: "4rem", width: "7rem" }} />
        </Link>
        <div className="searchbarInput">
          <input type="text" placeholder="Search River" value={input} onChange={(e) => handleChange(e.target.value)}/>
          
          <CiLocationOn className="icon" />
        </div>
        <button type="submit">
          {user ? (
            <div type="submit" onClick={logout}>
              Logout
            </div>
          ) : (
            <Link
              to="/login"
              style={{
                textDecoration: "none",
                color: "black",
                fontSize: "17px",
              }}
            >
              Sign In
            </Link>
          )}
        </button>
      </div>
    </>
  );
};
export default SearchBar;
