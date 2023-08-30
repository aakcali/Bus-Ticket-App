import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const SuccessScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.successText}>Ödemeniz Başarılı</Text>
      <Text style={styles.messageText}>İyi Yolculuklar Dileriz</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          // Redirect to home page
          navigation.navigate('TicketSearch');
        }}
      >
        <Text style={styles.buttonText}>Ana Sayfa</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SuccessScreen;