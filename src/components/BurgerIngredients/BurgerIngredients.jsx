import React, { useCallback, useRef } from "react";
import s from "./burgerIngredients.module.scss";
import BurgerIngredientsContainer from "./BurgerIngredientsContainer/BurgerIngredientsContainer";
import Tabs from "../Tabs/Tabs";

import { useSelector } from "../../services/hooks";

const BurgerIngredients = () => {
  const [current, setCurrent] = React.useState("bun");

  const containerRef = useRef(null);
  const bunRef = useRef(null);
  const mainRef = useRef(null);
  const sauceRef = useRef(null);

  const { ingredients } = useSelector((state) => state.ingredients);

  const handleClickTab = useCallback((item) => {
    setCurrent(item);
  }, []);

  const handleScroll = () => {
    let bunPos = 0;
    let mainPos = 0;
    let saucePos = 0;
    let containerPos = 0;

    if (containerRef && containerRef.current) {
      containerPos = Math.trunc(
        containerRef.current.getBoundingClientRect().top
      );
    }
    if (bunRef && bunRef.current) {
      bunPos = Math.trunc(bunRef.current.getBoundingClientRect().top);
    }
    if (mainRef && mainRef.current) {
      mainPos = Math.trunc(mainRef.current.getBoundingClientRect().top);
    }
    if (sauceRef && sauceRef.current) {
      saucePos = Math.trunc(sauceRef.current.getBoundingClientRect().top);
    }
    let initValue = [
      {
        value: "bun",
        pos: bunPos,
      },
      { value: "sauce", pos: saucePos },
      {
        value: "main",
        pos: mainPos,
      },
    ];
    const checkPos = (
      initValue,
      containerPos
    ) => {
      let minCount = {
        value: "",
        min: 999999,
      };

      initValue.forEach((item) => {
        if (minCount.min) {
          const minRes = Math.abs(containerPos - item.pos);

          if (minRes < minCount.min) {
            minCount = {
              value: item.value,
              min: minRes,
            };
          }
        }
      });

      return minCount.value;
    };
    setCurrent(checkPos(initValue, containerPos));
  };

  return (
    <div className={s.root}>
      <Tabs current={current} setCurrent={handleClickTab} />
      <div
        onScroll={handleScroll}
        ref={containerRef}
        className={s.ingredientsList}
      >
        <BurgerIngredientsContainer
          customRef={bunRef}
          title="Булки"
          data={ingredients.bun}
        />
        <BurgerIngredientsContainer
          customRef={sauceRef}
          title="Соусы"
          data={ingredients.sauce}
        />
        <BurgerIngredientsContainer
          customRef={mainRef}
          title="Начинки"
          data={ingredients.main}
        />
      </div>
    </div>
  );
};

export default BurgerIngredients;
