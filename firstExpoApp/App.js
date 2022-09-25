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
          <Text>!!컨텐츠!!</Text>
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
    justifyContent:"center", // flex-end, flex-start, center
    // flex는 기본적으로 위에서 아래로 컨텐츠를 나열한다.
    // 이걸 좌우로 바꿔주려면 direction을 주면 된다.
    flexDirection:"row",
    backgroundColor:"orange"
  }
});