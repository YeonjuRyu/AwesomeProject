import React, { Component } from 'react';
import { View, Button, Stylesheet } from 'react-native';

export default class AlignItemsBasics extends Component {
  render() {
    return (
      // Try setting `alignItems` to 'flex-start'
      // Try setting `justifyContent` to `flex-end`.
      // Try setting `flexDirection` to `row`.
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around', //상하
        alignItems: 'center', //좌우
        alignContent: 'space-around'
      }}>
        <View style={{alignSelf: 'flex-end', width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{alignSelf: 'flex-start', width: 100, height: 100, backgroundColor: 'skyblue'}} />
        <View style={{alignSelf: 'center', width: 150, height: 150, backgroundColor: 'steelblue'}} />
        <View style={{
            flex: 1,
            flexWrap: 'wrap',
            flexDirection: 'column',
            position: 'relative',
            justifyContent: 'space-around', //상하
            alignContent: 'stretch'
        }}>
            <View style={{width: 50, height: 50, backgroundColor: 'red'}} />
            <View style={{width: 50, height: 50, backgroundColor: 'red'}} />
            <View style={{width: 50, height: 50, backgroundColor: 'red'}} />
            <View style={{width: 50, height: 50, backgroundColor: 'red'}} />

        
        </View>

      </View>
    );
  }
};
