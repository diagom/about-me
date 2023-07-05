import react, { useEffect, useState } from "react";
import { scaleLinear } from "d3-scale";
import style from "components/Dots/Dots.style";

function Dots({ width, height, nodes, links }: any) {
  const reqElement = react.useRef(null);

  useEffect(() => {
    const square = reqElement.current! as Element;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          square.setAttribute("style", "animation-name: mapGrowUp");
          return;
        }

        square.removeAttribute("style");
      });
    });

    observer.observe(square);
  }, [window.scrollX]);

  const xScale = scaleLinear()
    .domain([0, 100])
    .range([0, width]);
  const yScale = scaleLinear()
    .domain([0, 100])
    .range([0, height]);

  return (
    <style.dotMapContainer ref={reqElement}>
      <style.dotMapSvg>
        {links.map((link: any, i: any) => (
          <line
            key={i + "- line"}
            x1={xScale(nodes[link.s].x)}
            x2={xScale(nodes[link.d].x)}
            y1={yScale(nodes[link.s].y)}
            y2={yScale(nodes[link.d].y)}
            strokeWidth={5}
            strokeDasharray="10 6"
            stroke="rgba(114, 0, 0, 0.8)"
          />
        ))}
        {nodes.map((node: any, i: any) => (
          <circle key={i + "- circle"} cx={xScale(node.x)} cy={yScale(node.y)} r="20" fill="rgba(114, 0, 0, 1)" />
        ))}
      </style.dotMapSvg>
    </style.dotMapContainer>
  );
}

export default Dots;
