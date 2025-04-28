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
// import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';

// const App = () => {
//   return (
//     <ScrollView
//       contentContainerStyle={{gap: 10}}
//       horizontal
//       style={styles.container}>
//       <View style={styles.box1} />
//       <View style={styles.box2} />
//       <View style={styles.box3} />
//       <View style={styles.box1} />
//       <View style={styles.box2} />
//       <View style={styles.box3} />
//       <View style={styles.box1} />
//       <View style={styles.box2} />
//       <View style={styles.box3} />
//       <View style={styles.box1} />
//       <View style={styles.box2} />
//       <View style={styles.box3} />
//       <View style={styles.box1} />
//       <View style={styles.box2} />
//       <View style={styles.box3} />
//       <View style={styles.box1} />
//       <View style={styles.box2} />
//       <View style={styles.box3} />
//     </ScrollView>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // width: '100%',
//     // height: '100%',
//     backgroundColor: 'pink',
//     // alignItems: 'center',
//     // marginTop: '20',
//     // flexDirection: 'row',
//     // justifyContent: 'space-evenly',
//     padding: 10,
//     // paddingLeft: 10,
//     paddingTop: 50,
//   },
//   text: {
//     fontSize: 50,
//     fontWeight: 'bold',
//     color: 'black',
//     marginTop: '50',
//   },
//   box1: {
//     // flex: 2,
//     width: 100,
//     height: 100,
//     backgroundColor: 'red',
//     borderRadius: 50,
//   },

//   box2: {
//     // flex: 1,
//     width: 100,
//     height: 100,
//     backgroundColor: 'yellow',
//     borderRadius: 50,
//   },

//   box3: {
//     // flex: 2,
//     width: 100,
//     height: 100,
//     backgroundColor: 'green',
//     borderRadius: 50,
//   },
// });

// ----------------Notes for FlatList---------------------------------------------------x------------x--------------------x-----------------------------------

// import {Image, StyleSheet, Text, View, FlatList} from 'react-native';
// const dummy = [
//   {
//     id: 1,
//     name: 'Ali',
//     email: 'ali12@gmail.com',
//     image:
//       'https://plus.unsplash.com/premium_photo-1670282393309-70fd7f8eb1ef?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//   },
//   {
//     id: 2,
//     name: 'Ali',
//     email: 'ali12@gmail.com',
//     image:
//       'https://plus.unsplash.com/premium_photo-1670282393309-70fd7f8eb1ef?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//   },
//   {
//     id: 3,
//     name: 'Ali',
//     email: 'ali12@gmail.com',
//     image:
//       'https://plus.unsplash.com/premium_photo-1670282393309-70fd7f8eb1ef?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//   },
//   {
//     id: 4,
//     name: 'Ali',
//     email: 'ali12@gmail.com',
//     image:
//       'https://plus.unsplash.com/premium_photo-1670282393309-70fd7f8eb1ef?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//   },
//   {
//     id: 5,
//     name: 'Ali',
//     email: 'ali12@gmail.com',
//     image:
//       'https://plus.unsplash.com/premium_photo-1670282393309-70fd7f8eb1ef?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//   },

//   {
//     id: 6,
//     name: 'Ali',
//     email: 'ali12@gmail.com',
//     image:
//       'https://plus.unsplash.com/premium_photo-1670282393309-70fd7f8eb1ef?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//   },
//   {
//     id: 7,
//     name: 'Ali',
//     email: 'ali12@gmail.com',
//     image:
//       'https://plus.unsplash.com/premium_photo-1670282393309-70fd7f8eb1ef?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//   },
//   {
//     id: 8,
//     name: 'Ali',
//     email: 'ali12@gmail.com',
//     image:
//       'https://plus.unsplash.com/premium_photo-1670282393309-70fd7f8eb1ef?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//   },
//   {
//     id: 9,
//     name: 'Ali',
//     email: 'ali12@gmail.com',
//     image:
//       'https://plus.unsplash.com/premium_photo-1670282393309-70fd7f8eb1ef?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//   },

//   {
//     id: 10,
//     name: 'Ali',
//     email: 'ali12@gmail.com',
//     image:
//       'https://plus.unsplash.com/premium_photo-1670282393309-70fd7f8eb1ef?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//   },
//   {
//     id: 11,
//     name: 'Ali',
//     email: 'ali12@gmail.com',
//     image:
//       'https://plus.unsplash.com/premium_photo-1670282393309-70fd7f8eb1ef?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//   },
//   {
//     id: 12,
//     name: 'Ali',
//     email: 'ali12@gmail.com',
//     image:
//       'https://plus.unsplash.com/premium_photo-1670282393309-70fd7f8eb1ef?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//   },
//   {
//     id: 13,
//     name: 'Ali',
//     email: 'ali12@gmail.com',
//     image:
//       'https://plus.unsplash.com/premium_photo-1670282393309-70fd7f8eb1ef?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//   },

//   {
//     id: 14,
//     name: 'Ali',
//     email: 'ali12@gmail.com',
//     image:
//       'https://plus.unsplash.com/premium_photo-1670282393309-70fd7f8eb1ef?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//   },
//   {
//     id: 15,
//     name: 'Ali',
//     email: 'ali12@gmail.com',
//     image:
//       'https://plus.unsplash.com/premium_photo-1670282393309-70fd7f8eb1ef?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//   },
//   {
//     id: 16,
//     name: 'Ali',
//     email: 'ali12@gmail.com',
//     image:
//       'https://plus.unsplash.com/premium_photo-1670282393309-70fd7f8eb1ef?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//   },
//   {
//     id: 17,
//     name: 'Ali',
//     email: 'ali12@gmail.com',
//     image:
//       'https://plus.unsplash.com/premium_photo-1670282393309-70fd7f8eb1ef?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//   },

//   {
//     id: 18,
//     name: 'Ali',
//     email: 'ali12@gmail.com',
//     image:
//       'https://plus.unsplash.com/premium_photo-1670282393309-70fd7f8eb1ef?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//   },
//   {
//     id: 19,
//     name: 'Ali',
//     email: 'ali12@gmail.com',
//     image:
//       'https://plus.unsplash.com/premium_photo-1670282393309-70fd7f8eb1ef?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//   },
//   {
//     id: 20,
//     name: 'Ali',
//     email: 'ali12@gmail.com',
//     image:
//       'https://plus.unsplash.com/premium_photo-1670282393309-70fd7f8eb1ef?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//   },
// ];

// const App = () => {
//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={dummy}
//         renderItem={({item}) => (
//           <View style={styles.card}>
//             <Image
//               style={{width: 40, height: 40, borderRadius: 50}}
//               source={{
//                 uri: 'https://plus.unsplash.com/premium_photo-1670282393309-70fd7f8eb1ef?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//               }}
//             />
//             <Text>naam</Text>
//             <Text>email</Text>
//           </View>
//         )}
//         keyExtractor={item => item.id}
//         numColumns={2}
//         columnWrapperStyle={{justifyContent: 'space-evenly'}}
//         ItemSeparatorComponent={<View style={{height: 10}} />}
//       />
//     </View>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   container: {
//     width: '100%',
//     height: '100%',
//     backgroundColor: '#dadada',
//     paddingVertical: 50,
//     paddingHorizontal: 15,
//   },
//   card: {
//     width: 100,
//     height: 100,
//     backgroundColor: 'white',
//     borderRadius: 10,
//     padding: 5,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// ------------------------Handling User Input-------------------------x----------------------x--------------------

// import {useState} from 'react';
// import {StyleSheet, Text, TextInput, View, Button} from 'react-native';

// const App = () => {
//   const [text, setText] = useState('');
//   const [submittedText, setsubmittedText] = useState('');
//   const handleSubmit = () => {
//     setsubmittedText(text);
//     setText('');
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Hello Bhai, Welcome to application</Text>
//       <TextInput
//         placeholder="Enter text here....."
//         style={styles.inputPlaceholder}
//         value={text}
//         onChangeText={setText}
//         keyboardType="numeric"
//       />

//       <Button title="Submit" onPress={handleSubmit}></Button>
//       {submittedText ? <Text>Result: {submittedText}</Text> : null}

//       <Text numberOfLines={2}>
//         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius dicta
//         ratione tempore doloremque corporis perspiciatis qui soluta provident
//         illo sapiente, itaque quibusdam quos, maxime perferendis, harum quia
//         aliquid iusto pariatur.
//       </Text>
//     </View>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//     gap: 10,
//   },

//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
//   inputPlaceholder: {
//     width: '100%',
//     borderWidth: 1,
//     padding: 20,
//     paddingVertical: 20,
//     borderRadius: 10,
//   },
// });

// -------------------Stack Navigation Notes------------------------x--------------------------x-------------------

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Home from './src/screens/Home';
import Profile from './src/screens/Profile';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Search from './src/screens/Search';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerStyle: {backgroundColor: 'yellow'}}}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{title: 'Home Screen', headerStyle: {backgroundColor: 'blue'}}}
      />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: 'orange',
        tabBarLabelPosition: 'below-icon',
        tabBarInactiveTintColor: 'blue',

        tabBarLabelStyle: {
          fontSize: 16,
          fontFamily: 'Georgia',
          fontWeight: 500,
        },
        tabBarStyle: {
          height: 120,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home Screen',
          tabBarIcon: () => <Icon name="home" size={30} color="black" />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'Profile Page',
          tabBarIcon: () => <Icon name="user" size={30} color="black" />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          title: 'Search',
          tabBarIcon: () => <Icon name="search1" size={30} color="black" />,
        }}
      />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
      {/* <StackNavigator /> */}
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
