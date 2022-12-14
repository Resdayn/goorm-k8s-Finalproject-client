import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import styles from "../styles/css/Chart.module.css";

const Chart = () => {
  const chartData = require('../assets/chartData.json');
  
  const options = {
    chart: {
      zoomType: "x",
    },
    title: {
      text: "TEST CHART",
    },
    subtitle: {
      text:
        document.ontouchstart === undefined
          ? "Click and drag in the plot area to zoom in"
          : "Pinch the chart to zoom in",
    },
    xAxis: {
      type: "datetime",
    },
    yAxis: {
      title: {
        text: "Exchange rate",
      },
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      area: {
        fillColor: {
          linearGradient: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1,
          },
          stops: [
            [0, Highcharts.getOptions().colors[0]],
            [
              1,
              Highcharts.color(Highcharts.getOptions().colors[0])
                .setOpacity(0)
                .get("rgba"),
            ],
          ],
        },
        marker: {
          radius: 2,
        },
        lineWidth: 1,
        states: {
          hover: {
            lineWidth: 1,
          },
        },
        threshold: null,
      },
    },
    series: [
      {
        type: "area",
        name: "USD to EUR",
        data: chartData,
      },
    ],
  };

  return (
    <section className={styles.chartContainer}>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </section>
  );
};

export default Chart;
