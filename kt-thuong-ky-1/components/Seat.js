import { Text, View, StyleSheet, Image } from 'react-native';

export default function Seat() {
  return (
    <Pressable key={seat.id} style={[styles.seat,{backgroundColor:seat.selected ? "red" : "green"},]}
        onPress={()=>toggleSeat(seat.id)}>
        <Text style={styles.seatText}>{seat.id}</Text>
        </Pressable>
  );
}

const styles = StyleSheet.create({
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
