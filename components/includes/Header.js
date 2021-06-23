import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Header(props) {
  const router = useRouter();
  const [checked, setChecked] = useState(true);
  const [searchVal, setSearchVal] = useState("");
  const searchValHandler = (e) => {
    setSearchVal(e.target.value);
  };

  const submitSearch = () => {
    router.push(`/search?search_query=${searchVal}`);
  };

  if (typeof window === "object") {
    var input = document.getElementById("main__layout-header-top-input");
    input.addEventListener("keypress", function (e) {
      if (e.which === 13) {
        submitSearch();
      }
    });
  }

  const setTheme = () => {
    console.log(checked);
    setChecked((prev) => !prev);
    if (typeof window === "object") {
      if (checked) {
        localStorage.setItem("theme", "dark");
        document.documentElement.setAttribute("data-color-scheme", "dark");
      } else {
        document.documentElement.setAttribute("data-color-scheme", "light"); // or just empty " "
        localStorage.setItem("theme", "light");
      }
    }
  };
  useEffect(() => {
    if (typeof window === "object") {
      let theme = localStorage.getItem("theme");
      if (theme === "dark") {
        setTheme();
      } else {
      }
    }
  }, []);

  return (
    <header className="main__layout-header">
      <div className="main__layout-header-top">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="512"
          height="512"
          viewBox="0 0 512 512"
          className="main__layout-header-top-input-icon"
          onClick={() => submitSearch()}
        >
          <title>ionicons-v5-f</title>
          <path d="M456.69,421.39,362.6,327.3a173.81,173.81,0,0,0,34.84-104.58C397.44,126.38,319.06,48,222.72,48S48,126.38,48,222.72s78.38,174.72,174.72,174.72A173.81,173.81,0,0,0,327.3,362.6l94.09,94.09a25,25,0,0,0,35.3-35.3ZM97.92,222.72a124.8,124.8,0,1,1,124.8,124.8A124.95,124.95,0,0,1,97.92,222.72Z" />
        </svg>
        <input
          className="main__layout-header-top-input"
          id="main__layout-header-top-input"
          type="text"
          value={searchVal}
          onChange={(e) => searchValHandler(e)}
        ></input>
        <input
          type="button"
          // checked={checked}
          className="main__layout-header-top-toggle"
          id="toggle"
          // onClick={() => setTheme()}
          onClick={(e) => setTheme(e)}
        />
        <label for="toggle">
          {checked ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="main__layout-header-top-text"
              viewBox="0 0 512 512"
            >
              <title>Moon</title>
              <path d="M152.62 126.77c0-33 4.85-66.35 17.23-94.77C87.54 67.83 32 151.89 32 247.38 32 375.85 136.15 480 264.62 480c95.49 0 179.55-55.54 215.38-137.85-28.42 12.38-61.8 17.23-94.77 17.23-128.47 0-232.61-104.14-232.61-232.61z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="main__layout-header-top-text"
              viewBox="0 0 512 512"
            >
              <title>Sunny</title>
              <path d="M234 26h44v92h-44zM234 394h44v92h-44zM338.025 142.857l65.054-65.054 31.113 31.113-65.054 65.054zM77.815 403.074l65.054-65.054 31.113 31.113-65.054 65.054zM394 234h92v44h-92zM26 234h92v44H26zM338.029 369.14l31.112-31.113 65.054 65.054-31.112 31.112zM77.802 108.92l31.113-31.113 65.054 65.054-31.113 31.112zM256 358a102 102 0 11102-102 102.12 102.12 0 01-102 102z" />
            </svg>
          )}
        </label>
      </div>
      {props.children}
    </header>
  );
}
