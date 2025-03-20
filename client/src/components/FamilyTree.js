import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const FamilyTree = ({ data }) => {
  const d3Container = useRef(null);

  useEffect(() => {
    if (data && d3Container.current) {
      const width = 3900; // Increase width for wider layout
      const height = 1500; // Increase height if needed

      // Clear previous SVG to avoid duplicates
      d3.select(d3Container.current).select("svg").remove();

      // Create SVG container
      const svg = d3
        .select(d3Container.current)
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", "translate(50, 50)");

      // Create tree layout (VERTICAL but WIDER)
      const treeLayout = d3.tree().size([width - 200, height - 150]); // Increase horizontal size

      // Convert JSON data to D3 hierarchy
      const root = d3.hierarchy(data);

      // Generate tree structure from data
      treeLayout(root);

      // Draw links (lines)
      svg
        .selectAll(".link")
        .data(root.links())
        .enter()
        .append("line")
        .attr("class", "link")
        .attr("x1", (d) => d.source.x)
        .attr("y1", (d) => d.source.y)
        .attr("x2", (d) => d.target.x)
        .attr("y2", (d) => d.target.y)
        .attr("stroke", "#ccc")
        .attr("stroke-width", 2);

      // Draw nodes (circles + text)
      const node = svg
        .selectAll(".node")
        .data(root.descendants())
        .enter()
        .append("g")
        .attr("class", "node")
        .attr("transform", (d) => `translate(${d.x}, ${d.y})`);

      // Draw circle for each node
      node
        .append("circle")
        .attr("r", 10)
        .attr("fill", "#4CAF50");

      // Add text to each node
      node
        .append("text")
        .attr("dy", 20)
        .attr("text-anchor", "middle")
        .text((d) => d.data.name);
    }
  }, [data]);

  return (
    <div
      ref={d3Container}
      style={{
        overflowX: "auto",
        width: "100%",
        margin: "0 auto",
      }}
    ></div>
  );
};

export default FamilyTree;
