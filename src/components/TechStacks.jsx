import { FRONTEND } from "../data/techStack_data.js";
import { BACKEND } from "../data/techStack_data.js";
import { DATABASE } from "../data/techStack_data.js";
import { TOOLS } from "../data/techStack_data.js";

import TechStack from "./TeckStack.jsx";

export default function TechStacks() {
  return <>
    <section>
      <div id="frontend">
        <div>FRONTEND</div>
        <div className="grid grid-cols-4">
          {FRONTEND.map( (frontendItem) => (
            <TechStack 
              key={frontendItem.title}
              {...frontendItem} 
            />
          ))}
        </div>
      </div>
      <div id="backend">
        <div>BACKEND</div>
        <div className="grid grid-cols-4">
          {BACKEND.map( (backendItem) => (
            <TechStack 
              key={backendItem.title}
              {...backendItem} 
            />
          ))}
        </div>
      </div>
      <div id="database">
        <div>Database</div>
        <div className="grid grid-cols-4">
          {DATABASE.map( (databaseItem) => (
            <TechStack 
              key={databaseItem.title}
              {...databaseItem} 
            />
          ))}
        </div>
      </div>
      <div id="tools">
        <div>TOOLS</div>
        <div className="grid grid-cols-4">
          {TOOLS.map( (toolItem) => (
            <TechStack 
              key={toolItem.title}
              {...toolItem} 
            />
          ))}
        </div>
      </div>
    </section>
  </>
}