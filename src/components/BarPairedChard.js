import React, {useState} from 'react';
import Highcharts from 'highcharts/highcharts';
import HighchartsReact from 'highcharts-react-official';

const BarPairedChart = (props) => {
    const [type, setType] = useState('bar');

    const getChartData = (type) => {
        return {
            chart: {
                type: type,
                animation: false,
                reflow: true
            },
            title: {
                text: ''
            },
            xAxis: {
                categories: props.chartData.categories,
                reversed: false,
                title: {
                    text: null
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Budget',
                    align: 'high'
                },
                labels: {
                    formatter(data) {
                        return data.value + '$';
                    }
                }
            },
            tooltip: {
                valueSuffix: ' ',
                valuePrefix: ' '
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true,
                    }
                },
                column: {
                    dataLabels: {
                        enabled: true,
                    }
                },
                series: {
                    animation: false
                }
            },
            legend: {
                layout: 'vertical',
                align: 'center',
                verticalAlign: 'bottom',
                x: 0,
                y: 0,
            },
            credits: {
                enabled: false
            },
            series: props.chartData.series
        };
    };

    return (
        <div>
            <p className='change-chart' onClick={()=>{setType('bar')}}>Bar</p>
            <p className='change-chart' onClick={()=>{setType('column')}}>Column</p>
            <HighchartsReact
                highcharts={Highcharts}
                options={getChartData(type)}
            />
        </div>


    );
};

export default BarPairedChart;
