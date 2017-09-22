var start_val1 = 0,
    duration1 = 5000,
    end_val1 = [250];

var qSVG = d3.select("#d31").append("svg");

qSVG.selectAll(".txt")
    .data(end_val1)
    .enter()
    .append('text')
    .text(start_val1)
    .attr("class", "txt")
    .attr("x", 100)
    .attr("y", function (d, i) {
        return 50 + i * 30
    })
    .transition()
    .duration(3000)
    .tween("text", function (d) {
        var i = d3.interpolate(this.textContent, d),
            prec = (d + "").split("."),
            round = (prec.length > 1) ? Math.pow(10, prec[1].length) : 1;

        return function (t) {
            this.textContent = Math.round(i(t) * round) / round;
        };
    });


var start_val2 = 0,
    duration2 = 5000,
    end_val2 = [5785];

var qSVG = d3.select("#d32").append("svg");

qSVG.selectAll(".txt")
    .data(end_val2)
    .enter()
    .append("text")
    .text(start_val2)
    .attr("class", "txt")
    .attr("x", 80)
    .attr("y", function (d, i) {
        return 50 + i * 30
    })
    .transition()
    .duration(3000)
    .tween("text", function (d) {
        var i = d3.interpolate(this.textContent, d),
            prec = (d + "").split("."),
            round = (prec.length > 1) ? Math.pow(10, prec[1].length) : 1;

        return function (t) {
            this.textContent = Math.round(i(t) * round) / round;
        };
    });


var start_val3 = 0,
    duration3 = 5000,
    end_val3 = [35];

var qSVG = d3.select("#d33").append("svg");

qSVG.selectAll(".txt")
    .data(end_val3)
    .enter()
    .append("text")
    .text(start_val3)
    .attr("class", "txt")
    .attr("x", 115)
    .attr("y", function (d, i) {
        return 50 + i * 30
    })
    .transition()
    .duration(3000)
    .tween("text", function (d) {
        var i = d3.interpolate(this.textContent, d),
            prec = (d + "").split("."),
            round = (prec.length > 1) ? Math.pow(10, prec[1].length) : 1;

        return function (t) {
            this.textContent = Math.round(i(t) * round) / round;
        };
    });
