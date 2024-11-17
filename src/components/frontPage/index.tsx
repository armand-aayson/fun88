import React, { useState } from "react";
import "./index.css";
import TopBar from "../topBar/index.tsx";
import CarrouselBannr from "../../components/carrouselBanner/index.tsx";
import GamesContainer from "../gamesContainer/index.tsx";
import everyMatricImg from "../../assets/images/providers/EM.webp";
import evolutionImg from "../../assets/images/providers/EVO.webp";
import expanseImg from "../../assets/images/providers/EXPANSE.webp";
import ezugiImg from "../../assets/images/providers/EZG.webp";
import gameArtImg from "../../assets/images/providers/GAMEART.webp";
import habaneroImg from "../../assets/images/providers/HAB.webp";
import hacksawImg from "../../assets/images/providers/HACKSAW.webp";
import inbetImg from "../../assets/images/providers/INBET.webp";
import netNetImg from "../../assets/images/providers/NETENT (1).webp";
import pgImg from "../../assets/images/providers/PGSOFT.webp";
import playNGoImg from "../../assets/images/providers/PNG.webp";
import pragmaticPlayImg from "../../assets/images/providers/PRAGMATICPLAY.webp";
import pragmaticPlay2Img from "../../assets/images/providers/PP.webp";
import playsonImg from "../../assets/images/providers/PS.webp";
import playTechImg from "../../assets/images/providers/PT.webp";
import redTigerImg from "../../assets/images/providers/REDTIGER.webp";
import relaxGamingImg from "../../assets/images/providers/RELAX.webp";
import mPlayImg from "../../assets/images/providers/MPLAY.webp";
import * as SVG from "../../assets/svgs/svgRoutes.js";

const providerArr = [
  {
    id: "everyMatrix",
    img: everyMatricImg,
  },
  {
    id: "evolution",
    img: evolutionImg,
  },
  {
    id: "expanse",
    img: expanseImg,
  },
  {
    id: "ezugi",
    img: ezugiImg,
  },
  {
    id: "gameArt",
    img: gameArtImg,
  },
  {
    id: "habenero",
    img: habaneroImg,
  },
  {
    id: "hacksaw",
    img: hacksawImg,
  },
  {
    id: "inbet",
    img: inbetImg,
  },
  {
    id: "mPlay",
    img: mPlayImg,
  },
  {
    id: "netEnt",
    img: netNetImg,
  },
  {
    id: "pg",
    img: pgImg,
  },
  {
    id: "playNGo",
    img: playNGoImg,
  },
  {
    id: "pragmaticPlay",
    img: pragmaticPlayImg,
  },
  {
    id: "pragmayicPlay2",
    img: pragmaticPlay2Img,
  },
  {
    id: "playson",
    img: playsonImg,
  },
  {
    id: "playTech",
    img: playTechImg,
  },
  {
    id: "redTiger",
    img: redTigerImg,
  },
  {
    id: "relaxGaming",
    img: relaxGamingImg,
  },
];

const FrontPage = () => {
  const [isProviderOpen, setIsProviderOpen] = useState(false);
  const [providers, setProviders] = useState<string[]>([]);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);
  const [currentFoot, setCurrentFoot] = useState("SPORTS");

  const openProviderHandler = () => {
    setIsProviderOpen(true);
  };
  const ImgComponent = ({ item }) => {
    const onClickHandler = () => {
      setProviders((prev: string[]): string[] => {
        if (prev.includes(item.id)) {
          return prev.filter((id) => id !== item.id);
        } else {
          return [...prev, item.id];
        }
      });
    };
    return (
      <img
        className={`cardImage ${providers.includes(item.id) ? "active" : ""}`}
        src={item.img}
        onClick={onClickHandler}
      />
    );
  };

  const FooterComponent = () => {
    const footerArr = [
      {
        text: "SPORTS",
        img: SVG.sportsSvg,
      },
      {
        text: "FAVORITES",
        img: SVG.favoriteSvg,
      },
      {
        text: "INVITE",
        img: SVG.inviteSvg,
      },
      {
        text: "CASINO LIVE",
        img: SVG.casinoSvg,
      },
      {
        text: "CASHIER",
        img: SVG.cashierSvg,
      },
    ];
    return (
      <div className="footerCont">
        {footerArr.map((item) => {
          return (
            <div
              className={`footItem ${
                currentFoot === item.text ? "active" : ""
              }`}
              onClick={() => {
                setCurrentFoot(item.text);
                if (item.text === "FAVORITES") {
                  setCurrentFoot(item.text);

                  setIsFavoritesOpen(true);
                } else {
                  setCurrentFoot(item.text);

                  setIsFavoritesOpen(false);
                }
              }}
            >
              {item.img}
              {item.text}
            </div>
          );
        })}
      </div>
    );
  };
  return (
    <>
      <div
        className="middleCont"
        style={{
          position: isProviderOpen ? "fixed" : "unset",
          height: "100%",
          width: "100%",
        }}
      >
        <TopBar />
        <CarrouselBannr />
        <GamesContainer
          openProviderHandler={openProviderHandler}
          providers={providers}
          isFavoritesOpen={isFavoritesOpen}
        />
      </div>

      {isProviderOpen && (
        <div className="providerCont">
          <div className="providerBar">
            <div className="innerProvider">
              {SVG.providerSvg}
              Game Provider
              <span className="providerCounter">{providerArr.length}</span>
            </div>
            <span
              style={{ marginBottom: "10px" }}
              onClick={() => setIsProviderOpen(false)}
            >
              X
            </span>
          </div>
          <div className="providerCards">
            {providerArr.map((item) => (
              <ImgComponent item={item} />
            ))}
          </div>
        </div>
      )}
      {isProviderOpen && <div id="backdrop" className="backdrop" />}
      <FooterComponent />
    </>
  );
};
export default FrontPage;
