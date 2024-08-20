import { supabase } from "@/utils/supabase/server";

interface Languages {
  id: string;
  title: string;
  imgTitle: string;
}

async function Technologies() {
  const { data: technologies, error } = await supabase
    .from('technologies')
    .select()
    .order('id', { ascending: true }); 

  return (
    <section className="text-white pt-24" id="technologies">
      <h2 className="text-center text-4xl font-bold text-white mb-4">
        Technologies and Tools
      </h2>

      <p className="text-center text-slate-400 text-base sm:text-lg mb-14 lg:text-xl">
        Here are some of the tools and technologies that I use
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 gap-2 sm:gap-4 2xl:gap-6 justify-items-center">
        {technologies?.map((tech: Languages) => (
          <div
            key={tech.id}
            className="flex flex-col items-center gap-3 rounded-lg w-24 sm:w-36 md:w-48 p-4 border border-white hover:bg-slate-500 transition-all duration-300 ease-in-out hover:bg-opacity-25"
          >
            <div className="bg-secondary rounded-full items-center justify-center">
              <img
                className="w-14 sm:w-16"
                src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${tech.imgTitle}/${tech.imgTitle}-original.svg`}
                alt={tech.imgTitle}
              />
            </div>
            <p className="text-base sm:text-xl font-medium text-center">{tech.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
