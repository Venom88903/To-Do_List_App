import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, FlatList, TouchableWithoutFeedback, Keyboard } from 'react-native';
import GoalItem from './component/GoalItem';
import GoalIp from './component/GoalIp';

export default function App() {
  const [courseGoals, setCourseGoals] =  useState([]);
  const addGoalHandler = goalTitle => {
      setCourseGoals(currentGoals => [...currentGoals,
          {key: Math.random().toString(), value: goalTitle}
      ]);
    };
    const removeGoalHandler = goalKey => {
      setCourseGoals(currentGoals => {
        return currentGoals.filter((goal) => goal.key !== goalKey);
      });
    }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <SafeAreaView style={styles.container}>

      <Text style={styles.header}> Add List </Text>

      <GoalIp onAddgoal={addGoalHandler}/>
      <FlatList style={{marginTop:10, marginBottom:10}} data={courseGoals}
      renderItem={itemData=>(
        <GoalItem children={itemData.item.value} onDelete={removeGoalHandler.bind(this, itemData.item.key)}/>
      )}
      />

    </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#f1f1e8',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  header:{
    fontWeight:'bold',
    marginTop:50,
    fontSize:20,
     color:"#9ad3bc",
     borderWidth:1,
     width:250,
     textAlign:'center',
     height:50,
     borderColor:"#e8e8e8",
     marginBottom:20,
     borderRadius:20,
     padding:9,
     backgroundColor:'#e8e8e8',
  }
});
