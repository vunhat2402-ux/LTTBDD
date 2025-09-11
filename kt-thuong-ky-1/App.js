import { StyleSheet, Text, View,Pressable, TouchableOpacity, TextInput } from 'react-native';

// You can import supported modules from npm
import React, { useState } from 'react';

export default function App() {
  const [seats,setSeats]= useState(
    Array.from({length:20},(_,i)=>({id:i+1, selected:false}))
  );

  const [name,setName]= useState("");

  const toggleSeat = (id) => {
    setSeats((prev)=>
      prev.map((seat)=>
        seat.id === id ? {...seat, selected: !seat.selected} : seat
      )
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
       Man hinh
      </Text>
      <View style={styles.screen}/>
    <TextInput style={styles.input} placeholder="Nhap ten cua ban" value={name} onChangeText={setName}/>
    <View style={styles.seatContainer}>{
      seats.map((seat)=>(
        <Pressable key={seat.id} style={[styles.seat,{backgroundColor:seat.selected ? "red" : "green"},]}
        onPress={()=>toggleSeat(seat.id)}>
        <Text style={styles.seatText}>{seat.id}</Text>
        </Pressable>
      ))}
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    paddingTop: 50,
  },
  paragraph: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  screen:{
    width:"80%",
    height:30,
    backgroundColor:"#ccc",
    borderRadius:10,
    marginBottom:20,
  },
  input:{
    borderWidth:1,
    borderColor:"#999",
    borderRadius:6,
    padding:8,
    width:"80%",
    marginBottom:20,
  },
  seatContainer:{
    flexDirection:"row",
    flexWrap:"wrap",
    justifyContent:'center',
  },
  seat:{
    width:50,
    height:50,
    margin: 5,
    borderRadius:8,
    justifyContent:"center",
    alignItems:"center",
  },
  seatText:{
    color:"#fff",
    fontWeight:"bold",
  },
});
