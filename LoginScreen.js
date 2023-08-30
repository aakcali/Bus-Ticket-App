import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';

const LoginScreen = ({ navigation }) => { // take navigation prop
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Login Processes
    // For instance, service calls or other controls.
    
    // If login is successfull, go to TicketSearch Page.
    navigation.navigate('TicketSearch');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Uygulama Karşılama Ekranı</Text>
      <TextInput
        style={styles.input}
        placeholder="Mail"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Şifre"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Giriş</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Register')} // Redirect to Registration
      >
        <Text style={styles.buttonText}>Kaydol</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
