import React from "react";
import "../scss/components/Pakage.scss";
import "../scss/libs/variables.scss";
import cat from "../assets/Cat.png";
import { useState } from "react";

export default function Package(props) {
  const { name, type, amount, weight, activity, available, comment } = props;

  const [selected, setSelected] = useState(activity);
  const [hover, setHover] = useState("Сказочное заморское яство");
  const changeСolorFon = () => {
    return available ? "not-active-color" : "not-available-color ";
  };

  const hoverLeave = () => {
    selected && setHover("Котэ не одобряет?");
  };

  return (
    <div className="item">
      <section
        className={
          available && selected
            ? "item__border active-color"
            : `item__border ${changeСolorFon()}`
        }
        onClick={() => setSelected(!selected)}
      >
        <div
          className="item__blok"
          onMouseLeave={() => hoverLeave()}
          onMouseEnter={() => setHover("Сказочное заморское яство")}
        >
          <div
            className={
              available
                ? "item__text__blok"
                : "item__text__blok text__not-available-color text-opacity"
            }
          >
            <p className={"item__titl-description"} id="description-hover">
              {hover}
            </p>

            <h2 className="item__titl">{name}</h2>
            <p className="item__taste">{type}</p>
            <p className="item__description css-fix">{amount}</p>
          </div>
          <img
            src={cat}
            alt="fg"
            className={available ? "item__img" : "item__img opacity"}
          />
          <div
            className={
              available && selected
                ? "item__circle active-color"
                : `item__circle ${changeСolorFon()}`
            }
          >
            <div cllasName="item__text-weight">
              <p className="item__weight">{weight}</p>
              <p className="item__weight-number">кг</p>
            </div>
          </div>
        </div>
      </section>
      <div>
        {available && !selected && (
          <p className="item__agitation">
            Чего сидишь? Порадуй котэ,{" "}
            <button
              className="item__buy"
              onClick={() => setSelected(!selected)}
            >
              купи.
            </button>
          </p>
        )}
        {available && selected && <p className="item__agitation">{comment}</p>}
        {!available && (
          <p className="item__agitation agitation-not-available">
            Печалька, {type} закончился.
          </p>
        )}
      </div>
    </div>
  );
}
