import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  Alert,
  TouchableHighlight,
  Pressable,
  SafeAreaView,
} from 'react-native';
import React from 'react';

const App = () => {
  const style = {
    container: {
      width: '100%',
      height: '100%',
      backgroundColor: 'black',
    },
  };
  return (
    <SafeAreaView style={style.container}>
      <Text style={{color: 'white'}}>Hello Bhai kya haal hayn</Text>
      <Text>Kya haal hayn</Text>
      <Image
        style={{width: 200, height: 400}}
        source={{
          uri: 'https://images.unsplash.com/photo-1742183635084-64c141301176?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8',
        }}
      />
      {/* <Button title="Press Me"></Button> */}
      <TouchableOpacity
        style={{padding: 20, backgroundColor: 'pink'}}
        onPress={() => Alert.alert('Pressed!!')}>
        <Text>Button</Text>
      </TouchableOpacity>

      <TouchableHighlight
        style={{padding: 20, backgroundColor: 'green'}}
        onPress={() => Alert.alert('Pressed!!')}>
        <Text>Button</Text>
      </TouchableHighlight>
      <Pressable style={{padding: 10, backgroundColor: 'yellow'}}>
        <Text>Pressing Start</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
