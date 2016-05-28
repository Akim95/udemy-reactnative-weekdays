import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

// Component
class DayItem extends Component {
    render() {
       return <Text style={this.style()}>
            {this.props.day}
        </Text>     
    }
    
   style() {
    return {
      color: this.color(),
      fontWeight: this.fontWeight(),
      fontSize: this.fontSize(),
      lineHeight: this.lineHeight()
    }
  }

  color() {
    var opacity = this.props.daysUntil == 0 ? 1 : 1 / (this.props.daysUntil + 1);
    return 'rgba(0, 0, 0, '+ opacity + ')';
  }

  fontWeight() {
    var weight = 7 - this.props.daysUntil;
    return weight * 100 + '';
  }

  fontSize() {
    return 60 - 6 * this.props.daysUntil;
  }

  lineHeight() {
    return 70 - 4 * this.props.daysUntil;
  }
}

// Export
module.exports = DayItem;