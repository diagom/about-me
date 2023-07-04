import { scaleLinear } from "d3-scale";

function Dots({ width, height, nodes, links }: any) {
  const xScale = scaleLinear()
    .domain([0, 100])
    .range([0, width]);
  const yScale = scaleLinear()
    .domain([0, 100])
    .range([0, height]);

  return (
    <div id="map" style={{ position: "relative", height: "100%" }}>
      <svg style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, width: "100%", height: "100%" }}>
        {links.map((link: any, i: any) => (
          <line
            key={i + "- line"}
            x1={xScale(nodes[link.s].x)}
            x2={xScale(nodes[link.d].x)}
            y1={yScale(nodes[link.s].y)}
            y2={yScale(nodes[link.d].y)}
            strokeWidth={8}
            strokeDasharray={nodes[link.s].done && nodes[link.d].done ? "10 0" : "10 6"}
            stroke={"grey"}
          />
        ))}
        {nodes.map((node: any, i: any) => (
          <circle key={i + "- circle"} cx={xScale(node.x)} cy={yScale(node.y)} r="20" fill={"rgba(204, 0, 0, 0.5)"} />
        ))}
      </svg>
    </div>
  );
}

export default Dots;
