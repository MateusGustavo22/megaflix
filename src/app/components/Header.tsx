"use client";
import { BiSearch } from "react-icons/bi";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import MenuMobile from "./MenuMoblie";
import Search from "./Input";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [menuMobile, setMenuMobile] = useState<string>("none");

  function showMenu() {
    if (menuMobile === "none") {
      setMenuMobile("block");
    } else {
      setMenuMobile("none");
    }
  }

  const [searchInput, setSearchInput] = useState<string>("hidden");
  const [searchIcon, setSearchIcon] = useState(false);
  const searchButtonRef = useRef<HTMLButtonElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function hideMenuMobile() {
      if (menuMobile === "block") {
        setMenuMobile("none");
      }
    }
    document.addEventListener("click", hideMenuMobile);

    return () => {
      document.removeEventListener("click", hideMenuMobile);
    };
  }, [menuMobile]);

  useEffect(() => {
    function showSearchInput(event: MouseEvent) {
      if (
        searchButtonRef.current &&
        searchButtonRef.current.contains(event.target as Node)
      ) {
        if (searchInput === "hidden") {
          setSearchInput("flex");
          setSearchIcon(true);
        } else {
          setSearchInput("hidden");
          setSearchIcon(false);
        }
      } else if (
        searchRef.current &&
        searchRef.current.contains(event?.target as Node)
      ) {
        return;
      } else {
        setSearchInput("hidden");
        setSearchIcon(false);
      }
    }

    document.body.addEventListener("click", showSearchInput);

    return () => {
      document.body.removeEventListener("click", showSearchInput);
    };
  }, [searchInput]);

  return (
    <div className="w-full h-16 pl-8 pr-8 mb:pl-4 mb:pr-4 z-50 sticky top-0 bg-primary">
      <div className="max-w-[1920px] h-full relative m-auto flex items-center justify-between">
        <a href="/" className="font-black text-3xl text-white">
          MegaFlix
        </a>
        <div className="w-max lg:w-max justify-items-end h-16 flex items-center">
          <div className="w-max h-full space-x-10 flex items-center">
            <a
              href="/"
              className="font-medium h-16 border-b-2 border-primary hover:border-button flex items-center mb:hidden text-white text-mb cursor-pointer"
            >
              Filmes
            </a>
            <a
              href="/series"
              className="font-medium h-16 border-b-2 border-primary hover:border-button flex items-center mb:hidden text-white text-mb cursor-pointer"
            >
              Series
            </a>
            <a className="font-medium h-16 border-b-2 border-primary hover:border-button flex items-center mb:hidden text-white text-mb cursor-pointer">
              Minha lista
            </a>
            <button
              ref={searchButtonRef}
              className="w-max h-max z-50 p-2 flex items-center justify-center"
            >
              {searchIcon === false ? (
                <BiSearch
                  className={`text-white hover:text-gray-400`}
                  size={26}
                />
              ) : (
                <AiOutlineClose
                  className={`text-white hover:text-gray-400 `}
                  size={26}
                />
              )}
            </button>
          </div>
          <div onClick={showMenu} className="w-max h-max ml-8 flex mb2:hidden">
            <AiOutlineMenu color="white" size={26} />
          </div>
        </div>
        <div
          className={`max-w-[600px] w-full ${searchInput} absolute top-[66px] border-2 rounded-lg border-white mb:right-[-16px] right-0 h-max`}
        >
          <Search
            searchRef={searchRef}
            setSearchInput={setSearchInput}
            setSearchIcon={setSearchIcon}
          />
        </div>
      </div>
      <MenuMobile display={menuMobile} />
    </div>
  );
}
