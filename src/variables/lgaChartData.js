
const lgaChartData = {
    data: {
      labels: [
        "BSc",
        "BEng",
        "HND",
        "ND",
        "NCE",
        "WAEC",
        "PRIMARY SCHOOL",
        "MASTERS",
        "PHD",
      ],
      series: [[20, 43, 32, 80, 55, 53, 32, 34, 68]]
    },
    options: {
      axisX: {
        showGrid: false
      },
      low: 0,
      high: 200,
      chartPadding: {
        top: 0,
        right: 5,
        bottom: 0,
        left: 0
      }
    },
    responsiveOptions: [
      [
        "screen and (max-width: 640px)",
        {
          seriesBarDistance: 5,
          axisX: {
            labelInterpolationFnc: function(value) {
              return value[0];
            }
          }
        }
      ]
    ],
    animation: {
      draw: function(data) {
        if (data.type === "bar") {
          data.element.animate({
            opacity: {
              begin: (data.index + 1) * 80,
              dur: 500,
              from: 0,
              to: 1,
              easing: "ease"
            }
          });
        }
      }
    }
  };
  
  export default lgaChartData