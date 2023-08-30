import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const navigation = useNavigation;
const PaymentScreen = ({ navigation }) => {
  const handlePayment = () => {
    // Payments Processes will be handled here.
    // For Example, payment sevices calls or other controls.
    // If Payment is success, go to Success Page.
    navigation.navigate('Success');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ödeme Sayfası</Text>
      {/* Ticket informations can be viewed here */}
      <View style={styles.paymentForm}>
        <TextInput
          style={styles.inputpay}
          placeholder="Kart Numarası"
        />
        <TextInput
          style={styles.inputpay}
          placeholder="Kartın Üstündeki İsim"
        />
        <View style={styles.inlineInputs}>
          <TextInput
            style={[styles.inputpay, styles.smallInput]}
            placeholder="CVC/CV2"
          />
          <TextInput
            style={[styles.inputpay, styles.smallInput]}
            placeholder="Son Kullanma Tarihi"
          />
        </View>
        <TouchableOpacity style={styles.payButton} onPress={handlePayment}>
          <Text style={styles.buttonText}>Öde</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PaymentScreen;