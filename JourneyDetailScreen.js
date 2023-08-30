import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ToastAndroid } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import styles from './styles';

const JourneyDetailScreen = ({ route, navigation }) => {
  const { journey } = route.params;
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [passengerInfo, setPassengerInfo] = useState({});

  const handleSeatSelection = (seatNumber) => {
    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats(selectedSeats.filter(seat => seat !== seatNumber));
    } else if (selectedSeats.length < 5) {
      setSelectedSeats([...selectedSeats, seatNumber]);
    } else {
      ToastAndroid.show('En fazla 5 koltuk seçebilirsiniz.', ToastAndroid.SHORT);
    }
  };

  const handlePassengerInfoChange = (seatNumber, key, value) => {
    setPassengerInfo(prevInfo => ({
      ...prevInfo,
      [seatNumber]: {
        ...prevInfo[seatNumber],
        [key]: value,
      },
    }));
  };

  const renderSeats = () => {
    const seatRows = [];
    const totalSeats = 21; 
    const seatsPerRow = 3;

    for (let i = 0; i < totalSeats; i += seatsPerRow) {
      const rowSeats = [];

      for (let j = i; j < i + seatsPerRow; j++) {
        const seatNumber = j + 1;

        rowSeats.push(
          <TouchableOpacity
            key={seatNumber}
            style={[
              styles.seat,
              selectedSeats.includes(seatNumber) && styles.selectedSeat,
            ]}
            onPress={() => handleSeatSelection(seatNumber)}
            disabled={selectedSeats.length >= 5}
          >
            {selectedSeats.includes(seatNumber) ? (
              <FontAwesome name="user" size={24} color="white" />
            ) : (
              <Text>{seatNumber}</Text>
            )}
          </TouchableOpacity>
        );
      }

      seatRows.push(
        <View key={i} style={styles.seatRow}>
          {rowSeats}
        </View>
      );
    }

    return seatRows;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sefer Detay Sayfası</Text>
      <Text>Firma: {journey.company}</Text>
      <Text>Tarih/Saat: {journey.time}</Text>
      <Text>Koltuk Fiyatı: {journey.price}</Text>
      <Text>Boş Koltuklar: {journey.emptySeats}</Text>
      <View style={styles.seatsContainer}>{renderSeats()}</View>
      {selectedSeats.map(seatNumber => (
        <View key={seatNumber} style={styles.passengerInfoContainer}>
          <TextInput
            style={styles.passengerInput}
            placeholder="Yolcu TC"
            onChangeText={(text) => handlePassengerInfoChange(seatNumber, 'tc', text)}
            value={passengerInfo[seatNumber]?.tc || ''}
          />
          <TextInput
            style={styles.passengerInput}
            placeholder="Yolcu Cinsiyet"
            onChangeText={(text) => handlePassengerInfoChange(seatNumber, 'gender', text)}
            value={passengerInfo[seatNumber]?.gender || ''}
          />
        </View>
      ))}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Payment')}
      >
        <Text style={styles.buttonText}>Satın Al</Text>
      </TouchableOpacity>
    </View>
  );
};

export default JourneyDetailScreen;
