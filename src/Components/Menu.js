import React, { useEffect } from 'react'
import '../Style/Left.css'

function Menu({title , menuObject}) {

    useEffect(() => {
        const allLi = document
          .querySelector(".MenuContainer ul")
          .querySelectorAll("li");
        
    
        function changeMenuActive() {
          allLi.forEach((n) => n.classList.remove("active"));
          this.classList.add("active");
        }
        // console.log(allLi);
        allLi.forEach((n) => n.addEventListener("click", changeMenuActive));
      }, []);

  return (
    <div className="MenuContainer">
        <p className="tittle">{title}</p>
        <ul>
            {
                menuObject && menuObject.map((li) =>(
                    <li key={li.id}>
                      <a href="#">
                        <i>{li.icon}</i>
                        <span>{li.name}</span>
                      </a>
                    </li>
                  ))
            }
        </ul>
    </div>
  )
}

export {Menu};