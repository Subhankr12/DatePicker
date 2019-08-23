import React, { Component } from "react"
import DatePicker from "react-native-datepicker"
import { Platform, StyleSheet, Text, View } from "react-native"

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
})

export default class App extends Component {
  state = {
    date: ""
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Scrollable Date Picker</Text>
        <DatePicker
          style={{ width: 200 }}
          date={this.state.date}
          mode="date"
          androidMode="spinner"
          placeholder="select date"
          format="YYYY-MM-DD"
          minDate="1980-05-01"
          maxDate="2025-06-01"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: "absolute",
              left: 0,
              top: 4,
              marginLeft: 0
            },
            dateInput: {
              width: 100,
              marginLeft: 36
            },
            dateText: {
              borderRadius: 30,
              backgroundColor: "#62c4ac"
            }
          }}
          onDateChange={date => {
            this.setState({ date: date })
          }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
})
