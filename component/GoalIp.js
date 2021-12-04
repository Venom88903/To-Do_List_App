import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, TouchableWithoutFeedback, Keyboard } from 'react-native';

const GoalIp = props => {

  const [enteredGoal, setenterdGoal] = useState('');
  const goalIpHandler = (enteredText) => {
    setenterdGoal(enteredText);
  };
  return(
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={{flexDirection:'row', height:50, width:350, marginTop:10, justifyContent:'space-around'}}>

      <TextInput style={{width:250, borderRadius:25, padding:15, backgroundColor:'#d2f6c5'}}
        placeholder='Add Your Item'
        onChangeText={goalIpHandler}
        value={enteredGoal}
      />

      <TouchableOpacity style={styles.addButton} onPress={()=>props.onAddgoal(enteredGoal)}>
      <Text style={{textAlign:'center', color:'gray'}}>ADD</Text>
      </TouchableOpacity>

    </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  addButton:{
    height:50,
    width:80,
    borderRadius:40,
    padding:5,
    backgroundColor:"#40E0D0",
    justifyContent:'center'
  }
});

export default GoalIp;
