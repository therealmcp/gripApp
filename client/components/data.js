// Mock data object used for LineChart and BarChart

const weight = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
      data: [
        150,
        140,
        130,
        170,
        180,
        190,
        200,
        130,
        150,
        188,
        190,
        180
      ]
    }]
  }

  const totalWeightMove = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
      data: [
        1000,
        1200,
        1500,
        1100,
        1010,
        1020,
        1450,
        1200,
        1300,
        1400,
        1500,
        1600
      ]
    }]
  }
      // color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})` // optional
    // },{
    //   data: [
    //     20,
    //     10,
    //     4,
    //     56,
    //     87,
    //     90
    //   ]
    // },{
    //   data: [
    //     30,
    //     90,
    //     67,
    //     54,
    //     10,
    //     2
  //     // ]
  //   }]
  // }

  // Mock data object used for Contribution Graph

  // const contributionData = [
  //   { date: '2016-01-02', count: 1 },
  //   { date: '2016-01-03', count: 2 },
  //   { date: '2016-01-04', count: 3 },
  //   { date: '2016-01-05', count: 4 },
  //   { date: '2016-01-06', count: 5 },
  //   { date: '2016-01-30', count: 2 },
  //   { date: '2016-01-31', count: 3 },
  //   { date: '2016-03-01', count: 2 },
  //   { date: '2016-04-02', count: 4 },
  //   { date: '2016-03-05', count: 2 },
  //   { date: '2016-02-30', count: 4 }
  // ]

  // Mock data object for Pie Chart

  // const pieChartData = [
  //   { name: 'Seoul', population: 21500000, color: 'rgba(131, 167, 234, 1)', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  //   { name: 'Toronto', population: 2800000, color: '#F00', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  //   { name: 'Beijing', population: 527612, color: 'red', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  //   { name: 'New York', population: 8538000, color: '#ffffff', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  //   { name: 'Moscow', population: 11920000, color: 'rgb(0, 0, 255)', legendFontColor: '#7F7F7F', legendFontSize: 15 }
  // ]

  // Mock data object for Progress

  // const progressChartData = [0.4, 0.6, 0.8]

  export { weight, totalWeightMove }
