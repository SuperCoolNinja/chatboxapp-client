import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { socket } from "../../socket";

export const SignIn = () => {
  const [pseudo, setPseudo] = useState("");

  const onSubmit = (data) => {
    const newPseudo = data.pseudo;
    socket.emit("changePseudo", newPseudo);
  };

  useEffect(() => {
    socket.on("onChangePseudo", (newPseudo) => setPseudo(newPseudo));
    return () => socket.off("onChangePseudo");
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="flex flex-col lg:gap-10 lg:flex-row justify-center items-center lg:mt-[20rem]">
      {/* Title project */}
      <section>
        <h3 className="text-[#298ff6] font-bold text-[3rem] mt-32 lg:mt-0 text-center lg:text-start">
          ChatboxApp
        </h3>
        <p className="text-[#303030] font-semibold text-center lg:w-full mx-auto w-2/3 xl:text-left">
          Join a public group chat with the ChatboxApp in just one click.
        </p>
      </section>

      {/* Form party */}
      <section className="xl:w-3/12 flex justify-center items-center">
        <form
          className="flex 
                    flex-col 
                    justify-center
                    items-center
                    h-auto
                    gap-2
                    shadow-xl
                    rounded-xl
                    mt-16
                    p-4
                    w-10/12
                    bg-[#fff]
                    "
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            {...register("pseudo", { required: true })}
            type="text"
            placeholder="Pseudo"
            className="border-[0.1rem] p-2 rounded w-full m-2"
          />
          {errors.pseudo && (
            <p className="text-[#FF0000] self-start pl-1">
              Pseudo is required.
            </p>
          )}
          <p>{pseudo}</p>
          <button
            type="submit"
            onClick={handleSubmit}
            className="border-[0.1rem] p-2 rounded-xl bg-[#298ff6] text-[white] hover:bg-[#5ba6f1] w-full m-2"
          >
            Join the session
          </button>
        </form>
      </section>
    </div>
  );
};
