import React, { FC } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FormattedCocktailItem } from "../slice/models";
import "./Content.scss";

interface Props {
  data?: FormattedCocktailItem;
}
export const Content: FC<Props> = ({ data }) => {
  return (
    <div className={"contentWrapper"}>
      <div className={"imgWrapper"}>
        <LazyLoadImage
          style={{ maxWidth: "100%" }}
          alt={"cocktail"}
          effect="blur"
          loading={"lazy"}
          src={data?.strDrinkThumb}
        />
      </div>
      <h1>{data?.strDrink}</h1>
      <div>
        <i>{data?.strCategory}</i>
      </div>
      <div>
        <i>{data?.strAlcoholic}</i>
      </div>
      <div>
        <i>{data?.strGlass}</i>
      </div>
      <h2>Instructions:</h2>
      <p>{data?.strInstructions}</p>
      <h2>List of ingredients:</h2>
      {data?.listOfIngredients.map(([measure, ingredients]) => (
        <div key={`${measure}-${ingredients}`}>
          <span>{measure}</span>
          <span>{ingredients}</span>
        </div>
      ))}
    </div>
  );
};
