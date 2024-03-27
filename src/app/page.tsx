"use client"

import { useState } from "react";

interface Project {
  id: number,
}

export default function HomePage() {
  const [projects, setProjects] = useState<Project[]>([
    {
      id: 1
    },
    {
      id: 2
    },
    {
      id: 3
    },
    {
      id: 4
    },
    {
      id: 5
    },
  ] as Project[])

  // const handleClick = () => {
  //   while(true) {}
  // }

  return (
    <main className="flex min-h-screen flex-col items-center text-black">
      <div className="flex justify-between items-center w-[100%] mt-1">
        <div>
          <h1 className="text-5xl p-0 m-0 font-extrabold tracking-tight text-black">
            Citizen Projects
          </h1>
          <h2 className="text-3xl p-0 m-0 font-extrabold tracking-tight text-black">
            {"designs -> reality"}
          </h2>
        </div>
        <div className="flex flex-col justify-center">
          <img src="https://placehold.co/50" className="rounded-full" />
          <div>{"USERNAME"}</div>
        </div>
      </div>
      <section className="w-[100%]">
        <div className="grid grid-rows-[10%_90%] grid-cols-[25%_75%]">
          <div className="border border-black border-r-2 border-b-2 border-l-0 border-t-0">participate</div>
          <div className="flex justify-around border border-black border-r-0 border-b-2 border-l-0 border-t-0">
            <div>completed</div>
            <div>about</div>
          </div>
          <div className="flex flex-col gap-4 border border-black border-r-2 border-b-0 border-l-0 border-t-0">
            <div className="mt-2">
              <input type="text" placeholder="search" className="border border-black w-[90%]"/>
            </div>
            <div>Grid or List</div> 
            <div>
              <input type="checkbox" id="vegan" />
              <label htmlFor="vegan"> vegan-specific</label>
            </div>
            <div className="flex flex-col">
              <div>categories</div>
              <div>
                <input type="checkbox" id="science" />
                <label htmlFor="science"> science</label>
              </div>
              <div>
                <input type="checkbox" id="health" />
                <label htmlFor="health"> health</label>
              </div>
              <div>
                <input type="checkbox" id="wildlife" />
                <label htmlFor="wildlife"> wildlife</label>
              </div>
            </div>
            <div>
              <div>types</div>
              <div>
                <input type="checkbox" id="databases" />
                <label htmlFor="databases"> databases</label>
              </div>
              <div>
                <input type="checkbox" id="events" />
                <label htmlFor="events"> events</label>
              </div>
            </div>
            <div>
              <div>stage</div>
              <div>role</div>
            </div>
            

            {/* <button onClick={handleClick} className="border border-black w-[90%]">Back to desktop</button> */}
          </div>
          <div className="flex flex-col mt-2 ml-2">
            <div>
              <button className="border border-black w-[175px]">create a new project</button>
            </div>
            <div>
              <div>my projects:</div>
              <div className="flex gap-2">
                {projects.map((project) => {
                  return <div key={project.id} className="flex flex-col w-14">
                    <img src="https://placehold.co/50" />
                    <div>descr</div>
                  </div>
                })} 
              </div>
            </div>
            <div>
              <div>all:</div>
              <div className="flex gap-2">
                {projects.map((project) => {
                  return <div key={project.id} className="flex flex-col w-14">
                    <img src="https://placehold.co/50" />
                    <div>descr</div>
                  </div>
                })} 
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
