import React, { useState } from "react";
import Pannel from "./Pannel";

export default function Accordian() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div>
      <h1 className="text-4xl m-4">Almaty, Kazakhstan</h1>
      <Pannel isActive={activeIndex === 0} onShow={() => setActiveIndex(0)}>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam sit
          cupiditate tenetur quod dignissimos optio tempora molestias recusandae
          odit minus quia ex blanditiis amet ipsam maiores nisi, repellendus
          adipisci omnis.lorem Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Nam quam dolorum, vitae numquam voluptates itaque
          accusantium enim. Iure itaque, a similique accusamus magni sed.
          Pariatur fugiat cum incidunt eveniet neque? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Odio doloremque ex provident? Repellat,
          dolorum. Ullam sunt aut modi tenetur architecto hic ea autem vero,
          laboriosam aliquam, eaque incidunt nisi nobis.
        </p>
      </Pannel>
      <Pannel isActive={activeIndex === 1} onShow={() => setActiveIndex(1)}>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam sit
          cupiditate tenetur quod dignissimos optio tempora molestias recusandae
          odit minus quia ex blanditiis amet ipsam maiores nisi, repellendus
          adipisci omnis. Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Officia quam recusandae quibusdam quisquam sapiente odit velit
          nemo, nam ipsa, cum sint reprehenderit corporis voluptate. Voluptatum
          explicabo corporis ut ad perferendis. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Nulla maxime officia quisquam quas
          fugiat repudiandae minus aspernatur placeat corporis! Amet architecto
          quam rem odio labore dolore non fugit nisi libero.
        </p>
      </Pannel>
    </div>
  );
}
