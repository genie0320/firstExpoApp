import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.containerOne}>

      </View>
      <View style={styles.containerTwo}>
        <View style={styles.innerOne}>
         
        </View>
        <View style={styles.innerTwo}>
          <View style={styles.content}></View>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
  containerOne: {
    flex:1,
    backgroundColor:"red"
  },
  containerTwo:{
    flex:2,
    flexDirection:"row",
    backgroundColor:"yellow"
  },
  innerOne: {
    flex:1,
    backgroundColor:"blue"
  },
  innerTwo: {
    flex:4,
    backgroundColor:"orange",
    alignItems:"flex-end" // alignItems은 좌우가 디폴트이다. 상하가 디폴트인 justify-content 랑 다른 점. 근데 이 두개가 왜 다 필요한지 모르겠네...
  },
  content: {
    width:50,
    height:50,
    backgroundColor:"#000"
  }
});