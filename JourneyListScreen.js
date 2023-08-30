import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import styles from './styles';

const JourneyListScreen = ({ navigation }) => {
  const journeys = [
    { id: '1', company: 'Firma A', time: 'Saat: 08:00', emptySeats: 10, price: '50 TRY' },
    { id: '2', company: 'Firma B', time: 'Saat: 10:00', emptySeats: 5, price: '60 TRY' },
    // Other Journeys
  ];

  const renderJourneyItem = ({ item }) => (
    <TouchableOpacity
      style={styles.journeyItem}
      onPress={() => navigation.navigate('JourneyDetail', { journey: item })}
    >
      <Text>{item.company}</Text>
      <Text>{item.time}</Text>
      <Text>Boş Koltuk: {item.emptySeats}</Text>
      <Text>Fiyat: {item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Seferlerin Listelendiği Sayfa</Text>
      <FlatList
        data={journeys}
        keyExtractor={item => item.id}
        renderItem={renderJourneyItem}
      />
    </View>
  );
};

export default JourneyListScreen;