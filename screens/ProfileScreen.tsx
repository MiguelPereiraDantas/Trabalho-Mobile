import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProfileScreen: React.FC = () => {
  // Sample profile information
  const userProfile = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    age: 30,
    gender: 'Male',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Perfil do usuário</Text>
      <View style={styles.profileInfo}>
        <Text>Name: {userProfile.name}</Text>
        <Text>Email: {userProfile.email}</Text>
        <Text>Age: {userProfile.age}</Text>
        <Text>Gender: {userProfile.gender}</Text>
        <Text>Bio: {userProfile.bio}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  profileInfo: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
  },
});

export default ProfileScreen;
