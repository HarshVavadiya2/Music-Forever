import React,{useEffect} from "react";
import { FaUsers } from "react-icons/fa";
import "../Style/Middle.css";
import { Banner } from "./Banner";
import { AudioList } from "./AudioList";

function Middle() {


  useEffect(() => {
    const allLi = document
      .querySelector(".MenuList")
      .querySelectorAll("li");
    

    function changeMenuActive() {
      allLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }
    // console.log(allLi);
    allLi.forEach((n) => n.addEventListener("click", changeMenuActive));
  }, []);






  return (
    <div className="MiddleContainer">
      <Banner />
      <div className="MenuList">
        <ul>
          <li>
            <a href="#">Popular</a>
          </li>
          <li>
            <a href="#">Albums</a>
          </li>
          <li>
            <a href="#">Songs</a>
          </li>
          <li>
            <a href="#">Fans</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>

        <p>
          <i>
            <FaUsers />
          </i>
          21.69M<span>Followers</span>
        </p>
      </div>

      <AudioList />
    </div>
  );
}

export { Middle };
