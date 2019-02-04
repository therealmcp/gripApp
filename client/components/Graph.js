import React from 'react'
import { ScrollView, StatusBar, Dimensions, Text } from 'react-native'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph
} from 'react-native-chart-kit'
import moment from 'moment';
import { weight, totalWeightMove } from './data'
import 'babel-polyfill'
import API from '../utils/API.js';


// in Expo - swipe left to see the following styling, or create your own
const chartConfigs = [
  {
    backgroundColor: '#000000',
    backgroundGradientFrom: '#1E2923',
    backgroundGradientTo: '#08130D',
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    style: {
      borderRadius: 16
    }
  },
//   {
//     backgroundColor: '#022173',
//     backgroundGradientFrom: '#022173',
//     backgroundGradientTo: '#1b3fa0',
//     color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
//     style: {
//       borderRadius: 16
//     }
//   },
//   {
//     backgroundColor: '#ffffff',
//     backgroundGradientFrom: '#ffffff',
//     backgroundGradientTo: '#ffffff',
//     color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`
//   },
//   {
//     backgroundColor: '#26872a',
//     backgroundGradientFrom: '#43a047',
//     backgroundGradientTo: '#66bb6a',
//     color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
//     style: {
//       borderRadius: 16
//     }
//   },
//   {
//     backgroundColor: '#000000',
//     backgroundGradientFrom: '#000000',
//     backgroundGradientTo: '#000000',
//     color: (opacity = 1) => `rgba(${255}, ${255}, ${255}, ${opacity})`
//   }, {
//     backgroundColor: '#0091EA',
//     backgroundGradientFrom: '#0091EA',
//     backgroundGradientTo: '#0091EA',
//     color: (opacity = 1) => `rgba(${255}, ${255}, ${255}, ${opacity})`
//   },
//   {
//     backgroundColor: '#e26a00',
//     backgroundGradientFrom: '#fb8c00',
//     backgroundGradientTo: '#ffa726',
//     color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
//     style: {
//       borderRadius: 16
//     }
//   },
//   {
//     backgroundColor: '#b90602',
//     backgroundGradientFrom: '#e53935',
//     backgroundGradientTo: '#ef5350',
//     color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
//     style: {
//       borderRadius: 16
//     }
//   },
//   {
//     backgroundColor: '#ff3e03',
//     backgroundGradientFrom: '#ff3e03',
//     backgroundGradientTo: '#ff3e03',
//     color: (opacity = 1) => `rgba(${0}, ${0}, ${0}, ${opacity})`
//   }
]

export default class Graph extends React.Component {
  renderTabBar() {
    return <StatusBar hidden/>
  };

  // constructor(props) {
  //   super(props);
  //     this.state = {
  //       clientID: '',
  //       sessionID:'',
  //       weight: {},
  //     }
  // }
  state= {
    clientID: '',
    sessionID: '',
    weight: {},

  }

  componentDidMount(){
    console.log("this.props.navigation.state.params.data: ", this.props.navigation.state.params.data)

      const clientID =this.props.navigation.params.data;
      console.log("CLIENTID: ", clientID);
      // const clientID = ""

      API.getClient(clientID)
       /*.then (res => {
        console.warn(res.data.dbSession);
        let weight = { labels: [],
          datasets: [{
            data: [], // weight.datasets[0].data => push into this from the array below
         }]
       }
        let preProcData = res.data.dbSession.sessions;
        //array.foreach ( item => { access weight field and push into a new array})
        let labelsArr = [];
        let weightArr = [];

        res.data.dbSession.sessions.foreach(function (element) {
            labelsArr.push(element.date);
            weightArr.push(element.weight)
        })

        // this.setState({ weight: res.data.dbSession }); 

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

      sthis.setState({weight})


  }) */
          .then(function (response) {
            //console.log(response);

            let labelsArr = [];
            let weightArr = [];

            response.data.dbSession.sessions.forEach(function (element) {
                labelsArr.push(formattedDate(element.date));
                weightArr.push(element.weight)
            })
            console.log(labelsArr);
            console.log(weightArr);
            let weightData = { labels: labelsArr,
                datasets: [{
                  data: weightArr,
              }]
            }
            console.log(weightData);
          
          this.setState({weight: weightData})
            
        })
        .catch(err => 
            console.log(err));
  }

  formattedDate = (date) => {
    return moment(date).format("MMM Do YY")}

  render() {
    const width = Dimensions.get('window').width
    const height = 220
    return (
      <ScrollableTabView renderTabBar={this.renderTabBar}>
        {chartConfigs.map(chartConfig => {
          const labelStyle = {
            color: chartConfig.color(),
            marginVertical: 10,
            textAlign: 'center',
            fontSize: 12
          }
          const graphStyle = {
            marginVertical: 8,
            ...chartConfig.style
          }

          return (
            <ScrollView
              key={Math.random()}
              style={{
                backgroundColor: chartConfig.backgroundColor
              }}
            >
              <Text style={labelStyle}>Weight</Text>
              <LineChart
                // data={this.state.weight}
                data={weight}
                width={width}
                height={height}
                chartConfig={chartConfig}
                // bezier
                style={graphStyle}
              />

              <Text style={labelStyle}>Total Weight Moved</Text>
              {/* <LineChart
                data={totalWeightMove}
                width={width}
                height={height}
                chartConfig={chartConfig}
                style={graphStyle}
              /> */}
              {/* <Text style={labelStyle}>Contribution Graph</Text>
              <ContributionGraph
                values={contributionData}
                width={width}
                height={height}
                endDate={new Date('2016-05-01')}
                numDays={105}
                chartConfig={chartConfig}
                style={graphStyle}
              /> */}
            </ScrollView>
          )
        })}
      </ScrollableTabView>
    )
  }
}
