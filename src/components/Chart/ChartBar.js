import './ChartBar.css'
const ChartBar = props=>{
let barFillHeight = '0%';
if(props.maxValue>0)
    barFillHeight = Math.round((props.value/props.maxValue)*100)+'%'
let barValue = 0;
const checkAmount = ()=>{
barValue = 'Rs'+ props.value;
console.log(barValue)
}
return <div className="chart-bar">
    <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{height:barFillHeight}} onTouchMove={checkAmount}></div>
    </div>
    <div className="chart-bar__label">{props.label}</div>

</div>
}

export default ChartBar