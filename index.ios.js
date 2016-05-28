/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

// Import moment
import Moment from 'moment';

// Import day item component
import DayItem from './src/day-item';

// Create a react component
class weekdays extends Component {
    
  render() {
    return <View style={styles.container}>
            {this.days()}
        </View>
  }
    
  days() {
      var daysItems = [];
      
      for(var i = 0;i < 7;i++) {
        var day = Moment().add(i, 'days').format('dddd');
          
          daysItems.push(
            <DayItem day={day} daysUntil={i} key={i} />
          )
      }
      
      return daysItems;
  }
    
}

// Style the React component
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

// Show the react component on the screen
AppRegistry.registerComponent('weekdays', () => weekdays);
