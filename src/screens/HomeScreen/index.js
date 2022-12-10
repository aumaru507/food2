import { useEffect, useState } from 'react';
import { StyleSheet, FlatList ,View} from 'react-native';
import RestaurantItem from '../../components/Restaurantltem';
import { DataStore } from 'aws-amplify';
import {Restaurant} from '../../models';

export default function HomeScreen() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    DataStore.query(Restaurant).then(setRestaurants);
    // console.log("DATAAA",restaurants.length);
  }, []);
      
  return (
    <View style={styles.page}>
      <FlatList 
        data={restaurants}
        renderItem={({item}) => <RestaurantItem restaurant={item}/>}
        showsVerticalScrollIndicator={false}
      />
    </View>
    
    );
    
}

const styles = StyleSheet.create({
  page: {
    padding: 10,
  }
});
