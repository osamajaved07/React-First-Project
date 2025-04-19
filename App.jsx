// import {
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   Button,
//   TouchableOpacity,
//   Alert,
//   TouchableHighlight,
//   Pressable,
//   SafeAreaView,
// } from 'react-native';
// import React from 'react';

// const App = () => {
//   // const style = {
//   //   container: {
//   //     width: '100%',
//   //     height: '100%',
//   //     backgroundColor: 'black',
//   //   },
//   // };
//   return (
//     <SafeAreaView style={styles.container}>
//       <Text style={styles.text}>Hello Bhai</Text>
//       <Text style={styles.text}>Kya haal hayn</Text>
//       <Image
//         style={{width: 200, height: 400}}
//         source={{
//           uri: 'https://images.unsplash.com/photo-1742183635084-64c141301176?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8',
//         }}
//       />
//       {/* <Button title="Press Me"></Button> */}
//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => Alert.alert('Pressed!!')}>
//         <Text style={styles.btnText}>Button</Text>
//       </TouchableOpacity>

//       <TouchableHighlight
//         style={styles.button}
//         onPress={() => Alert.alert('Pressed!!')}>
//         <Text style={styles.btnText}>Button</Text>
//       </TouchableHighlight>

//       <Pressable style={styles.button}>
//         <Text style={styles.btnText}>Pressing Start</Text>
//       </Pressable>
//     </SafeAreaView>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   container: {
//     width: '100%',
//     height: '100%',
//     backgroundColor: 'grey',
//     gap: 10,
//     padding: 20,
//     alignItems: 'center',
//   },

//   text: {
//     color: 'white',
//     fontSize: 35,
//     fontWeight: 'bold',
//     marginTop: 20,
//     // padding: 10,
//     // margin: 0,
//   },

//   button: {
//     width: 300,
//     backgroundColor: 'pink',
//     padding: 10,
//     // paddingHorizontal: 10,
//     // paddingVertical: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 50,
//     borderWidth: 6,
//     borderColor: 'lightblue',
//   },
//   btnText: {
//     color: 'black',
//     fontSize: 25,
//     fontWeight: 'bold',
//   },
// });
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';

const App = () => {
  return (
    <ScrollView
      contentContainerStyle={{gap: 10}}
      horizontal
      style={styles.container}>
      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box3} />
      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box3} />
      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box3} />
      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box3} />
      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box3} />
      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box3} />
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width: '100%',
    // height: '100%',
    backgroundColor: 'pink',
    // alignItems: 'center',
    // marginTop: '20',
    // flexDirection: 'row',
    // justifyContent: 'space-evenly',
    padding: 10,
    // paddingLeft: 10,
    paddingTop: 50,
  },
  text: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'black',
    marginTop: '50',
  },
  box1: {
    // flex: 2,
    width: 100,
    height: 100,
    backgroundColor: 'red',
    borderRadius: 50,
  },

  box2: {
    // flex: 1,
    width: 100,
    height: 100,
    backgroundColor: 'yellow',
    borderRadius: 50,
  },

  box3: {
    // flex: 2,
    width: 100,
    height: 100,
    backgroundColor: 'green',
    borderRadius: 50,
  },
});
