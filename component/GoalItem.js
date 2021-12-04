import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const GoalItem = props => {
  return(
    <TouchableOpacity onPress={props.onDelete.bind(this, props.key)}>
    <View style={styles.goalList}>

    <Text style={{textAlign:'center'}}>{props.children}</Text>

    </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  goalList:{
    marginTop:10,
    textAlign:'center',
    width:340,
    height:45,
    textAlign:'center',
    paddingTop:13,
    backgroundColor:"#99f3bd",
    borderRadius:20
  }
});

export default GoalItem;
