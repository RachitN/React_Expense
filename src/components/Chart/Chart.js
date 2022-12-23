import "./Chart.css";
import ChartBar from "./ChartBar";
const Chart = (props) => {
   let  dataPointValues = props.dataPoints.map(dataPoint=> dataPoint.value);
   let  maxValue = Math.max(...dataPointValues)
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
