import React from 'react';
import { StyleSheet, Text, View, Button, Alert, SafeAreaView } from 'react-native';

export default function App() {

  const customAlert = () => {
    Alert.alert('팝업 알람입니다!!')
  }

  // const customAlert01 = (word) => {
  //   Alert.alert(word,'팝업 알람입니다!!')
  // }
  // 이거 뭔가 매개변수를 내려주는 방법이 있었던거 같은데. 아마 그게 문제였던듯. 

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>아래 버튼을 눌러주세요</Text>
        {/* 버튼 onPress 속성에 일반 함수를 연결 할 수 있습니다. */}
        <Button 
          style={styles.buttonStyle} 
          title="버튼입니다 "
          color="#f194ff" 
          onPress={customAlert}
        />
        {/* ES6 문법으로 배웠던 화살표 함수로 연결 할 수도 있습니다. */}
        <Button 
            style={styles.buttonStyle} 
            title="버튼입니다 "
            color="#FF0000" 
            onPress={()=>{customAlert()}}
          />
        {/* <Button 
            style={styles.buttonStyle} 
            title="버튼입니다 "
            color="#FF0000" 
            onPress={(Genie)=>{customAlert01(Genie)}}
          /> */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  textContainer: {
    height:100,
    margin:10,
  },
  textStyle: {
    textAlign:"center"
  },
});