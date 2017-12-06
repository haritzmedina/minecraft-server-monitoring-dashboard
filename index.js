let createGraph = (svg, xDimension, yDimension, data) => {
    // For players graphics
    let margin = {top: 20, right: 20, bottom: 30, left: 50},
        width = +svg.attr("width") - margin.left - margin.right,
        height = +svg.attr("height") - margin.top - margin.bottom,
        g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    let x = d3.scaleTime()
        .rangeRound([0, width]);

    let y = d3.scaleLinear()
        .rangeRound([height, 0]);

    let line = d3.line()
        .x(function(d) { return x(d[xDimension]); })
        .y(function(d) { return y(d[yDimension]); });

    x.domain(d3.extent(data, function(d) { return d[xDimension]; }));
    y.domain(d3.extent(data, function(d) { return d[yDimension]; }));

    g.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x))
        .select(".domain")
        .remove();

    g.append("g")
        .call(d3.axisLeft(y))
        .append("text")
        .attr("fill", "#000")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", "0.71em")
        .attr("text-anchor", "end")
        .text(yDimension);

    g.append("path")
        .datum(data)
        .attr("fill", "none")
        .attr("stroke", "steelblue")
        .attr("stroke-linejoin", "round")
        .attr("stroke-linecap", "round")
        .attr("stroke-width", 1.5)
        .attr("d", line);
};

d3.tsv("data.tsv", function(d) {
    d.date = d3.isoParse(d.date); // Parse to date
    d.ping = +d.ping; // Parse to float
    d.players = +d.players; // Parse to int
    return d;
}, function(error, data) {
    if (error) {
        throw error
    }
    createGraph(d3.select('#ping'), 'date', 'ping', data)
    createGraph(d3.select('#players'), 'date', 'players', data)
});