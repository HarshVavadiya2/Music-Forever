import React from "react";
import Artist from "../img/artist.jpg";
import Tick from "../img/check.png";
import { FaEllipsisH, FaHeadphones, FaCheck } from "react-icons/fa";

function Banner() {
  return (
    <div className="Banner">


      <img src={Artist} className="BannerImg" />


      <div className="Content">

        <div className="BreadCrump">
          <p>
            Home <span>/Popolar Artist</span>
          </p>
          <i>
            <FaEllipsisH />
          </i>
        </div>


        <div className="Artist">


          <div className="ArtistLeft">


            <div className="Name">
              <h2>A-Ha</h2>
              <img src={Tick} />
            </div>

            <p>
              <i>
                <FaHeadphones />
              </i>
              11,184,1811 <span>Monthly listener</span>
            </p>

          </div>


          <div className="ArtistRight">

            <a href="#">Play</a>
            <a href="#">
              <i>
                <FaCheck />
              </i>
              Following
            </a>

          </div>

        </div>



      </div>

      <div className="BottomLayer"></div>
    </div>
  );
}

export { Banner };
