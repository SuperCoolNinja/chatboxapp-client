export const UsersConnected = ({getAllUsers}) => {
  return (
    <div className="w-full xl:w-3/12 bg-[#658fff] text-[#ffffff] lg:rounded-t-none rounded-t-2xl xl:rounded-l-2xl p-2 xl:h-[35rem] border-r-2 border-[#0000000c] shadow-xl">
      <h3 className="font-bold  text-[1.7rem]">Users Connected</h3>
      <div className="w-full bg-[#0000001c] rounded-full mb-5 my-2"></div>
      <ul className="flex flex-col items-start justify-center gap-5">
        {getAllUsers.map((v) => {
          return (
            v.pseudo !== "unknown" && (
              <li
                className="flex items-center justify-center gap-2 pl-5"
                key={v.id}
              >
                <div className="w-[0.6rem] h-[0.6rem] rounded-full bg-[#38c53f]"></div>
                <div className="font-semibold capitalize text-[1rem] text-start">
                  {v.pseudo}
                </div>
              </li>
            )
          );
        })}
      </ul>
    </div>
  );
};
