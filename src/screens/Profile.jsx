import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Profile = ({navigation}) => {
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Profile</Text>
      <Button
        title="Profile Page here"
        onPress={() => navigation.navigate('Search')}
      />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
