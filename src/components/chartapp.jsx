import React, { Component } from 'react';
import ChartistGraph from "react-chartist";
import { BiBarChartAlt2 } from "react-icons/bi";
import Chartist from "chartist";
// import Header from "./header";
// import { PieChart } from "react-minimal-pie-chart";

class Chartap extends Component {
    state={
        lab:[],
        ser:[],
        lab1:[],
        ser1:[]
    }
    componentDidMount(){
        fetch("http://localhost:8000/chartdata1").then(w=>{
            w.json().then(n=>{
                // console.log(n)
                this.setState({
                    lab1:n[0].labels,
                    ser1:n[0].series
                })
            })
        })
        fetch("http://localhost:8000/chartdata").then((a)=>{
            a.json().then((b)=>{
                // console.log(b[0].series[0])
                this.setState({
                    lab:b[0].labels,
                    ser:b[0].series,
                })
            })
        })
    }
    render() {
        // console.log(this.state.ser1)
        var delays = 80,durations = 500;
        var delays2 = 80,durations2 = 500;

const salesChart = {
  data: {
    labels: this.state.lab,
    series: this.state.ser
    // labels: ["M", "T", "W", "T", "F", "S", "S"],
    // series: [[12, 17, 7, 17, 23, 18, 38],[11, 27, 10, 15, 43, 8, 30]]
  },
  options: {
    lineSmooth: Chartist.Interpolation.cardinal({
      tension: 0
    }),
    low: 0,
    high:60,
    chartPadding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  },
  animation: {
    draw: function(data) {
      if (data.type === "line" || data.type === "area") {
        data.element.animate({
          d: {
            begin: 600,
            dur: 700,
            from: data.path
              .clone()
              .scale(1, 0)
              .translate(0, data.chartRect.height())
              .stringify(),
            to: data.path.clone().stringify(),
            easing: Chartist.Svg.Easing.easeOutQuint
          }
        });
      } else if (data.type === "point") {
        data.element.animate({
          opacity: {
            begin: (data.index + 1) * delays,
            dur: durations,
            from: 0,
            to: 1,
            easing: "ease"
          }
        });
      }
    }
  }
};

const salesChart1 = {
    data: {
      labels: this.state.lab1,
      series: this.state.ser1
      // labels: ["M", "T", "W", "T", "F", "S", "S"],
      // series: [[12, 17, 7, 17, 23, 18, 38],[11, 27, 10, 15, 43, 8, 30]]
    },
    options: {
      lineSmooth: Chartist.Interpolation.cardinal({
        tension: 0
      }),
      low: 0,
      high:600,
      chartPadding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }
    },
    animation: {
      draw: function(data) {
        if (data.type === "line" || data.type === "area") {
          data.element.animate({
            d: {
              begin: 600,
              dur: 700,
              from: data.path
                .clone()
                .scale(1, 0)
                .translate(0, data.chartRect.height())
                .stringify(),
              to: data.path.clone().stringify(),
              easing: Chartist.Svg.Easing.easeOutQuint
            }
          });
        } else if (data.type === "point") {
          data.element.animate({
            opacity: {
              begin: (data.index + 1) * delays,
              dur: durations,
              from: 0,
              to: 1,
              easing: "ease"
            }
          });
        }
      }
    }
  };

const subscriptionChart = {
  data: {
    labels: this.state.lab,
    series: this.state.ser
  },
  options: {
    axisX: {
      showGrid: false
    },
    low: 0,
    high: 100,
    chartPadding: {
      top: 0,
      right: 5,
      bottom: 0,
      left: 0
    }
  },
  responsiveOptions: [
    [
      "screen and (max-width: 1200px)",
      {
        seriesBarDistance: 6,
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
            begin: (data.index + 1) * delays2,
            dur: durations2,
            from: 0,
            to: 1,
            easing: "ease"
          }
        });
      }
    }
  }
}

const subscriptionChart1 = {
    data: {
      labels: this.state.lab1,
      series: this.state.ser1
    },
    options: {
      axisX: {
        showGrid: false
      },
      low: 0,
      high: 600,
      chartPadding: {
        top: 0,
        right: 5,
        bottom: 0,
        left: 0
      }
    },
    responsiveOptions: [
      [
        "screen and (max-width: 1200px)",
        {
          seriesBarDistance: 12,
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
              begin: (data.index + 1) * delays2,
              dur: durations2,
              from: 0,
              to: 1,
              easing: "ease"
            }
          });
        }
      }
    }
  }

        return (
            <>
            {/* <Header /> */}
            <div>
            <div className="ap-c">
                <div className="ap-ch br">
                    <div className="barro"><span> <BiBarChartAlt2 /> </span> Two bar chart</div>
                    <ChartistGraph
                    data={subscriptionChart.data}
                    type="Bar"
                    options={subscriptionChart.options}
                    responsiveOptions={subscriptionChart.responsiveOptions}
                    listener={subscriptionChart.animation}
                    />
                </div>
            </div>
            <div className="ap-c">
                <div className="ap-ch">
                    <div className="barro"><span> <BiBarChartAlt2 /> </span> Two line chart</div>
                    <ChartistGraph 
                    listener={salesChart.animation} 
                    data={salesChart.data} 
                    options={salesChart.options} 
                    type="Line" />
                </div>
            </div>
            <div className="ap-c">
                <div className="ap-ch">
                    <div className="barro"><span> <BiBarChartAlt2 /> </span> Three line chart</div>
                    <ChartistGraph 
                    listener={salesChart1.animation} 
                    data={salesChart1.data} 
                    options={salesChart1.options} 
                    type="Line" />
                </div>
            </div>
            <div className="ap-c">
                <div className="ap-ch br">
                    <div className="barro"><span> <BiBarChartAlt2 /> </span> Three bar chart</div>
                    <ChartistGraph
                    data={subscriptionChart1.data}
                    type="Bar"
                    options={subscriptionChart1.options}
                    responsiveOptions={subscriptionChart1.responsiveOptions}
                    listener={subscriptionChart1.animation}
                    />
                </div>
            </div>
            </div>
            </>
        );
    }
}

export default Chartap