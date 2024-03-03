import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const LoginScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Componente de login aqui */}
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
});

export default LoginScreen;
