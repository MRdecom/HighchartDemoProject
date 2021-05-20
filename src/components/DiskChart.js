import React from 'react';
import Highcharts from 'highcharts/highcharts';
import variablepie from 'highcharts/modules/variable-pie';
import HighchartsReact from "highcharts-react-official";

variablepie(Highcharts);

const DiskChart = (props) => {
    const options = {
        chart: {
            type: 'variablepie',
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            animation: false,
        },
        title: {
            text: props.scenarioName
        },
        tooltip: {
            headerFormat: '',
        },

        plotOptions: {
            pie: {
                size: 120,
                animation: false,
                allowPointSelect: true,
                cursor: 'pointer',
            },
        },
        series:[{
            minPointSize: 60,
            innerSize: '20%',
            zMin: 60,
            dataLabels: {
                enabled: false,
            },
            data: props.data,
            showInLegend: true
        }]
    };


    return <div>
        <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
}

export default DiskChart;