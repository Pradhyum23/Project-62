import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import AppHeader from './components/AppHeader';
import HomeScreen from './screens/HomeScreen';
import SummaryScreen from './screens/SummaryScreen';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

export db from './config.js';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppHeader />
        <AppContainer />
      </View>
    );
  }
}
var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  SummaryScreen: SummaryScreen,
});

const AppContainer = createAppContainer(AppNavigator);
