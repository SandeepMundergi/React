import React, { Component } from "react";
import style from "./main.module.css";
export default class Mainbody extends Component {
  render() {
    return (
      <section id={style.mainsection}>
        <article>
          <h1>Welcome to React JS</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
            omnis ullam illum labore accusantium eius magnam nesciunt et id
            exercitationem. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Pariatur maxime deleniti inventore vero suscipit. Adipisci
            repellat perferendis enim voluptatem aperiam? Illo, id! Harum sequi
            similique eveniet rerum possimus asperiores doloribus.
          </p>
          <button>Go Ahead</button>
        </article>
      </section>
    );
  }
}
