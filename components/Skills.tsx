import { skills } from "@/data"

function Skills() {
  return (
    <div className="py-20" id="skills">
        <h1 className="heading">
                A Small Selection of{" "}
                <span className="text-purple">My Skills</span>
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center mt-10">
            {skills.map(({name,img}) => (
                <div key={name} className="flex items-center justify-center ">
                    <div className="flex items-center justify-center border cursor-pointer border-white/[0.2] rounded-lg bg-black-200 w-40 h-40 hover:shadow-md hover:shadow-gray-300 duration-200">
                    <img src={img} alt={name} className=" p-2 w-[70%] object-cover" />
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Skills
