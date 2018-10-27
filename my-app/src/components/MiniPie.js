import React from "react";
import * as d3 from "d3";

export default class MiniPie extends React.Component {
  componentDidMount() {
    this.draw();
  }

  componentWillUpdate() {
    this.draw();
  }

  draw = () => {
    let data = [...this.props.data];
    data.sort((a, b) => a.value - b.value);

    let svg = d3.select(this.svg);
    let margin = { top: 10, right: 10, bottom: 10, left: 10 };
    let width = svg.attr("width") - margin.left - margin.right;
    let height = svg.attr("height") - margin.top - margin.bottom;

    svg.selectAll("*").remove();

    // text in legend
    svg
      .selectAll(".text-legend")
      .data(data)
      .enter()
      .append("text")
      .attr("dominant-baseline", "central")
      .attr("class", "text-legend")
      .style("font-size", "16px")
      .style("font-weight", "normal")
      .attr("x", d => 30)
      .attr("y", (d, i) => 32 + i * 32)
      .attr("fill", "white")
      .text(d => d.text)
      .each(wrapText);

    svg
      .selectAll(".text-legend")
      .transition()
      .duration(2500)
      .attr("fill", "black");

    // color in legend
    svg
      .selectAll(".rect-legend")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "rect-legend")
      .attr("fill", d => d.color)
      .attr("x", 10)
      .attr("y", (d, i) => 24 + i * 32)
      .attr("height", d => 16);

    svg
      .selectAll(".rect-legend")
      .transition()
      .duration(500)
      .attr("width", d => 16);

    // pie
    let r = Math.min(width / 3, height / 2);
    // for value % calc
    let sum = d3.sum(data, d => d.value);

    let g = svg
      .append("g")
      .attr("transform", "translate(" + (width - r) + "," + r + ")");

    let arc = d3
      .arc()
      .outerRadius(r - 10)
      .innerRadius(0);

    let arcs = d3.pie()(data.map(d => d.value));

    let label = d3
      .arc()
      .outerRadius(r - 45)
      .innerRadius(r - 45);

    g
      .selectAll("path")
      .data(arcs)
      .enter()
      .append("path")
      .style("fill", (d, i) => data[i].color)
      .style("stroke", "white")
      //.attr("d", arc)
      .transition()
      // .delay(500)
      // http://bl.ocks.org/nadinesk/99393098950665c471e035ac517c2224
      .attrTween("d", function(d) {
        var i = d3.interpolate(d.startAngle + 0.1, d.endAngle);
        return function(t) {
          d.endAngle = i(t);
          return arc(d);
        };
      });

    g
      .selectAll("text")
      .data(arcs)
      .enter()
      .append("text")
      .attr("transform", function(d) {
        return "translate(" + label.centroid(d) + ")";
      })
      .attr("dy", "0.35em")
      .attr("fill", "white")

      .text(d => `${(d.value/sum*100).toFixed(2)}% (${d.value})`)
      .attr("text-anchor", "middle");

    // https://stackoverflow.com/questions/9241315/trimming-text-to-a-given-pixel-width-in-svg/24120935
    function wrapText() {
      var self = d3.select(this),
        textLength = self.node().getComputedTextLength(),
        text = self.text();
      while (textLength > width / 3 && text.length > 0) {
        text = text.slice(0, -1);
        self.text(text + "...");
        textLength = self.node().getComputedTextLength();
      }
    }
  };

  render() {
    return (
      <svg
        width={this.props.width}
        height={this.props.height}
        ref={e => (this.svg = e)}
      />
    );
  }
}
