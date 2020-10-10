option = {
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['A','B','C','D','E']
    },
    series : [
        {
            name: 'Name',
            type: 'pie',
//          radius : '55%',
//          center: ['50%', '60%'],
            data:[
                {value:335, name:'A'},
                {value:310, name:'B'},
                {value:234, name:'C'},
                {value:135, name:'D'},
                {value:1548, name:'E'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};var pieCharts = echarts.init(document.getElementById('pie-echarts'));
pieCharts.setOption(option);