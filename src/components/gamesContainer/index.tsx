import React, { useEffect, useState } from "react";
import * as SVG from "../../assets/svgs/svgRoutes";
import prideOfPersiaEmpireTreasures from "../../assets/images/gpas_etpop_pop.webp.webp";
import sugarRush from "../../assets/images/Group 70.webp";
import bigBadWold from "../../assets/images/Group 72.webp";
import shoalinCrew from "../../assets/images/Group 75.webp";
import bookOfEgypt from "../../assets/images/Group 83.webp";
import piratesPower from "../../assets/images/Group 84.webp";
import crocodileBlitzXtremeFb from "../../assets/images/Group 85.webp";
import anacondaWild2PowerPlayJackpot from "../../assets/images/Group 86.webp";
import mayaJackpot from "../../assets/images/Group 87.webp";
import beachLife from "../../assets/images/Group 88.webp";
import aztecaBonusLinesPowerPlayJackpot from "../../assets/images/Group 94.webp";
import incaJackpot from "../../assets/images/sw_ijp.webp.webp";
import "./index.css";

interface IconTextProps {
  iconUrl: any;
  text: string;
  className: string;
  isActive: boolean;
  onClick(): any;
  currentClassName: string;
  key: number;
}
const gamesArr = [
  {
    text: "START",
    icon: SVG.fireSvg,
    className: "startCont",
    category: "Start",
  },
  {
    text: "NEW",
    icon: SVG.newSvg,
    className: "newCont",
    category: "New",
  },
  {
    text: "SLOTS",
    icon: SVG.slotSvg,
    className: "slotCont",
    category: "Slots",
  },
  {
    text: "LIVE",
    icon: SVG.liveSvg,
    className: "liveCont",
    category: "Live",
  },
  {
    text: "JACKPOTS",
    icon: SVG.jackpotSvg,
    className: "jackpotCont",
    category: "Jackpot",
  },
  {
    text: "TABLE GAMES",
    icon: SVG.tableGamesSvg,
    className: "tableGamesCont",
    category: "Table",
  },
  {
    text: "BINGO",
    icon: SVG.bingoSvg,
    className: "bingoCont",
    category: "Bingo",
  },
  {
    text: "OTHERS",
    icon: SVG.otherSvg,
    className: "otherCont",
    category: "Others",
  },
];

const GamesContainer = ({
  openProviderHandler,
  providers,
  isFavoritesOpen,
}) => {
  const [isActive, setIsActive] = useState(false);
  const [currentClassName, setCurrentClassName] = useState("startCont");
  const [currentCategory, setCurrentCategory] = useState("Start");
  const [searchInput, setSearchInput] = useState("");
  const [gameData, setGameData] = useState<any>([]);
  const [favoriteArr, setFavoriteArr] = useState<string[]>([]);
  const onClickHandler = () => {
    setIsActive((prev) => !prev);
  };
  const categoryClickHandler = (className: string, text: string) => {
    setCurrentCategory(text);
    setCurrentClassName(className);
  };
  useEffect(() => {
    getGames();
  }, []);
  const getGames = async () => {
    const games = [
      {
        name: "Pride Of Persia Empire Treasures 1",
        img: prideOfPersiaEmpireTreasures,
        category: "Others",
        provider: "everyMatrix",
      },
      {
        name: "Pride Of Persia Empire Treasures 2",
        img: prideOfPersiaEmpireTreasures,
        category: "Others",
        provider: "evolution",
      },
      {
        name: "Pride Of Persia Empire Treasures 3",
        img: prideOfPersiaEmpireTreasures,
        category: "Others",
        provider: "expanse",
      },
      {
        name: "Sugar Rush 1",
        img: sugarRush,
        category: "New",
        provider: "ezugi",
      },
      {
        name: "Sugar Rush 2",
        img: sugarRush,
        category: "Jackpot",
        provider: "gameArt",
      },
      {
        name: "Sugar Rush 3",
        img: sugarRush,
        category: "Others",
        provider: "habenero",
      },
      {
        name: "Big Bad World 1",
        img: bigBadWold,
        category: "Live",
        provider: "hacksaw",
      },
      {
        name: "Big Bad World 2",
        img: bigBadWold,
        category: "Others",

        provider: "inbet",
      },
      {
        name: "Big Bad World 3",
        img: bigBadWold,
        category: "Live",
        provider: "mPlay",
      },
      {
        name: "Shoalin Crew 1",
        img: shoalinCrew,
        category: "Table",
        provider: "netEnt",
      },
      {
        name: "Shoalin Crew 2",
        img: shoalinCrew,
        category: "Others",
        provider: "pg",
      },
      {
        name: "Shoalin Crew 3",
        img: shoalinCrew,
        category: "JackPot",
        provider: "playNGo",
      },
      {
        name: "Book Of Egypt 1",
        img: bookOfEgypt,
        category: "Slots",
        provider: "pragmaticPlay",
      },
      {
        name: "Book Of Egypt 2",
        img: bookOfEgypt,
        category: "Live",
        provider: "pragmayicPlay2",
      },
      {
        name: "Book Of Egypt 3",
        img: bookOfEgypt,
        category: "Jackpot",
        provider: "playson",
      },
      {
        name: "Pirates Power 1",
        img: piratesPower,
        category: "New",
        provider: "playTech",
      },
      {
        name: "Pirates Power 2",
        img: piratesPower,
        category: "Table",
        provider: "redTiger",
      },
      {
        name: "Pirates Power 3",
        img: piratesPower,
        category: "Bingo",
        provider: "relaxGaming",
      },
      {
        name: "Crocodile Blitz Xtreme FB 1",
        img: crocodileBlitzXtremeFb,
        category: "Others",
      },
      {
        name: "Crocodile Blitz Xtreme FB 2",
        img: crocodileBlitzXtremeFb,
        category: "Slots",
      },
      {
        name: "Crocodile Blitz Xtreme FB 3",
        img: crocodileBlitzXtremeFb,
        category: "New",
      },
      {
        name: "Anaconda Wild 2 Power Play Jackpot 1",
        img: anacondaWild2PowerPlayJackpot,
        category: "Slots",
      },
      {
        name: "Anaconda Wild 2 Power Play Jackpot 2",
        img: anacondaWild2PowerPlayJackpot,
        category: "Others",
      },
      {
        name: "Anaconda Wild 2 Power Play Jackpot 3",
        img: anacondaWild2PowerPlayJackpot,
        category: "Slots",
      },
      { name: "Maya Jackpot 1", img: mayaJackpot, category: "Live" },
      { name: "Maya Jackpot 2", img: mayaJackpot, category: "New" },
      { name: "Maya Jackpot 3", img: mayaJackpot, category: "Bingo" },
      { name: "Beach Life 1", img: beachLife, category: "Table" },
      { name: "Beach Life 2", img: beachLife, category: "Bingo" },
      { name: "Beach Life 3", img: beachLife, category: "Others" },
      {
        name: "Azteca Bonus Lines Power Play Jackpot 1",
        img: aztecaBonusLinesPowerPlayJackpot,
        category: "Live",
      },
      {
        name: "Azteca Bonus Lines Power Play Jackpot 2",
        img: aztecaBonusLinesPowerPlayJackpot,
        category: "Bingo",
      },
      {
        name: "Azteca Bonus Lines Power Play Jackpot 3",
        img: aztecaBonusLinesPowerPlayJackpot,
        category: "Live",
      },
      { name: "Inca Jackpot 1", img: incaJackpot, category: "Slots" },
      { name: "Inca Jackpot 2", img: incaJackpot, category: "Others" },
      { name: "Inca Jackpot 3", img: incaJackpot, category: "New" },
    ];
    return await new Promise((resolve) => {
      setTimeout(() => {
        resolve(games);
        setGameData(games);
      }, 3000);
    });
  };
  const GameCard = ({ imgUrl, index, name }) => {
    return (
      <div className="gameCardCont" key={index}>
        <img className="gameCardImage" src={imgUrl} />
        <div className="favoriteCont">
          <button
            className="favoriteButton"
            onClick={() => {
              setFavoriteArr((prev) => {
                if (prev.includes(name)) {
                  return prev.filter((item) => item !== name);
                } else return [...prev, name];
              });
            }}
          >
            {SVG.favoriteMask}
            {favoriteArr.includes(name)
              ? SVG.favoriteStarActive
              : SVG.favoriteStar}
          </button>
        </div>
      </div>
    );
  };

  const IconText: React.FC<IconTextProps> = ({
    iconUrl,
    text,
    className,
    onClick,
    isActive,
    currentClassName,
    key,
  }) => {
    const isCurrentTab = currentClassName === className;
    return (
      <div
        key={key}
        className={`iconText ${className} ${
          isActive || isCurrentTab ? "active" : ""
        }`}
        onClick={onClick}
      >
        {iconUrl}
        <div
          className={`textCont ${className} ${
            isActive || isCurrentTab ? "active" : ""
          }`}
        >
          {text}
        </div>
      </div>
    );
  };
  const regex = new RegExp(searchInput, "i");
  return (
    <>
      <div className="gameBarCont">
        <IconText
          className="searchCont"
          iconUrl={SVG.searchSvg}
          text="SEARCH"
          onClick={onClickHandler}
          isActive={isActive}
          currentClassName={""}
          key={1}
        />
        <div className="categoryCont">
          {gamesArr.map((item, index) => {
            return (
              <IconText
                key={index}
                className={item.className}
                iconUrl={item.icon}
                text={item.text}
                onClick={() =>
                  categoryClickHandler(item.className, item.category)
                }
                isActive={false}
                currentClassName={currentClassName}
              />
            );
          })}
        </div>
      </div>
      {isActive && (
        <div className="searchBarDrawer">
          <input
            type="text"
            className="searchInput"
            placeholder="Search Games"
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <div className="svgCont">{SVG.searchSvg}</div>
          <button className="providerButton" onClick={openProviderHandler}>
            {SVG.providerSvg}
          </button>
        </div>
      )}
      <div className="gameSelectionCont">
        {gameData.length
          ? gameData.map((item, index) => {
              if (
                currentCategory !== "Start" &&
                item.category !== currentCategory
              ) {
                return null;
              }
              if (searchInput && !regex.test(item.name)) {
                return null;
              }
              if (providers.length && !providers.includes(item.provider)) {
                return;
              }
              if (
                favoriteArr.length &&
                isFavoritesOpen &&
                !favoriteArr.includes(item.name)
              ) {
                return;
              }
              return (
                <GameCard imgUrl={item.img} index={index} name={item.name} />
              );
            })
          : ""}
      </div>
    </>
  );
};
export default GamesContainer;
