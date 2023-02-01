//메인 VDI 신청 통계 원형그래프
var context = document
    .getElementById('myChart')
    .getContext('2d');

var myChart = new Chart(context, {
    type: 'pie', // 차트의 형태
    data: { // 차트에 들어갈 데이터
        labels: [
            //x 축
            'VDI 생성(신규)',
            'VDI 변결',
            'VDI 초기화',
            'VDI 반납',
            '사용자 변경',
            '재택근무 신청',
            '프로그램 설치 신청'
        ],
        datasets: [
            { //데이터
                label: 'VDI 신청 통계', //차트 제목
                fill: false, // line 형태일 때, 선 안쪽을 채우는지 안채우는지
                data: [
                    40,
                    20,
                    15,
                    10,
                    10,
                    10,
                    5 //x축 label에 대응되는 데이터 값
                ],
                backgroundColor: [
                    //색상
                    'rgba(77, 109, 229)',
                    'rgba(241, 110, 52)',
                    'rgba(244, 218, 40)',
                    'rgba(183, 170, 134)',
                    'rgba(90, 197, 43)',
                    'rgba(67, 118, 13)',
                    'rgba(37, 28, 229)'
                ],
                borderWidth: 0 //경계선 굵기
            }
        ]
    },
    options: {
        maintainAspectRatio: false,
        plugins: {
            legend: { // 범례 스타일링
                // position: 'right',
                display: false,
                // labels: {     usePointStyle: false,     fontFamily: "'NanumSquare',
                // 'sans-serif'",     fontColor: '#fff',     fontSize:18,     boxWidth: 12,
                // padding:12 }
            }
        },
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true
                    }
                }
            ]
        }
    }
});

//메인 최근장애(Event)현황 막대그래프 
var context = document
    .getElementById('barChart')
    .getContext('2d');

var myChart = new Chart(context, {
    type: 'bar', // 차트의 형태
    data: { // 차트에 들어갈 데이터
        labels: [
            //x 축
            '1월',
            '2월',
            '3월',
            '4월',
            '5월',
            '6월',
            '7월',
            '8월',
            '9월',
            '10월',
            '11월',
            '12월'
        ],
        datasets: [
            { //데이터
                barPercentage: 0.4,
                label: '최근장애(Event)현황', //차트 제목
                fill: false, // line 형태일 때, 선 안쪽을 채우는지 안채우는지
                data: [
                    30,
                    20,
                    15,
                    10,
                    10,
                    10,
                    5,
                    10,
                    5,
                    5,
                    0,
                    5 //x축 label에 대응되는 데이터 값
                ],
                backgroundColor: [//색상
                    'rgba(17, 82, 249 , 0.1)'],
                borderWidth: 2, //경계선 굵기
                borderColor: ['rgba(31, 67, 142)']
            }
        ]
    },
    options: {
        // responsive: true,
         maintainAspectRatio: false,
        plugins: {
            legend: { // 범례 스타일링
                display: false,
            }
            , 
        },
        scales: {
           xAxis: [{
                ticks: {
                // autoSkip: true,
                   barThickness: 10,
                    font: {
                        size: 16,
                        defaultFontColor:'#adb2cf'
                    }
                },
            }],
            yAxis: [{
                gridLines: {
                    drawBorder:false
                },
               ticks: {
                    // beginAtZero:true,
                   autoSkip:false,
                    min: 0,//y축 최소 값
                    max: 1000,//y축 최대값
                    font: {
                        size: 16,
                        defaultFontColor:'#adb2cf'
                    }
                }
            }]
        }
    }
});



