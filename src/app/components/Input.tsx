import { BiSearch } from "react-icons/bi";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";

interface PropsFunc {
  searchRef: React.RefObject<HTMLDivElement>;
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
  setSearchIcon: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Search({
  searchRef,
  setSearchInput,
  setSearchIcon
}: PropsFunc) {
  const [inputText, setInputText] = useState<string>("");
  const path = usePathname();
  const router = useRouter();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!inputText) return;
    {
      path === "/" || path.slice(0, 7) === "/filmes"
        ? router.push(`/search?q=${inputText}`)
        : router.push(`/series/search?q=${inputText}`);
    }
    setSearchInput("hidden");
    setSearchIcon(false);
  }

  function handleIconClick(e: React.MouseEvent<HTMLDivElement>) {
    e.preventDefault();
    if (!inputText) return;
    router.push(`/search?q=${inputText}`);
    setSearchInput("hidden");
    setSearchIcon(false);
  }

  function handleInput(e: React.ChangeEvent<HTMLInputElement>): void {
    setInputText(e.target.value);
  }

  return (
    <div
      ref={searchRef}
      className="w-full h-[60px] rounded-lg  p-3 flex items-center mb:rounded-br-none top-16 right-0 bg-primary"
    >
      <div onClick={handleIconClick} className="w-max h-max cursor-pointer">
        <BiSearch className="text-white hover:text-gray-400" size={26} />
      </div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={e => handleInput(e)}
          className="w-full h-full pl-3 bg-primary outline-0 text-white text-base "
          type="text"
          placeholder="Buscar filme"
        />
      </form>
    </div>
  );
}
