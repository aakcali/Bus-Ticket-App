import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const TicketSearchScreen = () => {
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const navigation = useNavigation(); // Take navigation prop, using navigation hook.

  const handleSearch = () => {
    // Query operations are performed here.
    // For example, service call or other checks.

    // Redirect to JourneyListScreen after query is complete
    navigation.navigate('JourneyList');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bilet Sorgulama</Text>
      <TextInput
        style={styles.input}
        placeholder="Nereden"
        value={fromCity}
        onChangeText={setFromCity}
      />
      <TextInput
        style={styles.input}
        placeholder="Nereye"
        value={toCity}
        onChangeText={setToCity}
      />
      <TextInput
        style={styles.input}
        placeholder="Gidiş Tarihi (gg/aa/yy)"
        value={departureDate}
        onChangeText={setDepartureDate}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={handleSearch}
      >
        <Text style={styles.buttonText}>Ara</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TicketSearchScreen;