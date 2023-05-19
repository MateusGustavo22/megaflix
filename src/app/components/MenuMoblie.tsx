interface Props {
  display: string;
}

export default function MenuMobile(props: Props) {
  return (
    <div
      style={{ display: props.display }}
      className="w-[200px] h-max flex items-center p-4 m-1 border-2 rounded-lg border-white absolute z-10 space-y-8 right-0  bg-primary"
    >
      <div className="flex flex-col space-y-8 items-center justify-end ">
        <a
          href="/"
          className="text-gray-300 border-transparent border-b-2 pt-1 pb-1  hover:border-button font-regular"
        >
          Filmes
        </a>
        <a
          href="/series"
          className="text-gray-300 border-transparent border-b-2 pt-1 pb-1  hover:border-button font-regular"
        >
          Series
        </a>
        <a className="text-gray-300 border-transparent border-b-2 pt-1 pb-1  hover:border-button font-regular">
          Minha lista
        </a>
        <a
          href="/login"
          className="w-max pr-4 pl-4 pt-2 pb-2 border-2 border-white hover:border-button text-right text-mb text-white font-regular"
        >
          Entrar
        </a>
      </div>
    </div>
  );
}
