import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.containerOne}>

      </View>
      <View style={styles.containerTwo}>

      </View>
      <View style={styles.containerThree}>
        <View style={styles.InnerOne}>
          
        </View>
        <View style={styles.InnerTwo}>

        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1 // 껍데기를 100%로 봤을 때, 자식 요소들이 그걸 얼마나 차지할지의 문제. 마치 유산 같군.
  },
  containerOne: {
    flex:1,
    backgroundColor:"red"
  },
  containerTwo:{
    flex:2,
    backgroundColor:"yellow"
  },
  containerThree:{
    flex:2,
    backgroundColor:"blue"
  },
  InnerOne:{
    flex:2,
    backgroundColor:"white"
  },
  InnerTwo:{
    flex:5,
    backgroundColor:"blue"
  }
});