import { StyleSheet, Text, View,Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const DEFAULT_IMAGE = "https://www.taokaecafe.com/asp-bin/pic_taokae/sh2617.jpg";

    const RestaurantItem = ({restaurant}) => {
        const navigation = useNavigation();

        const onPress = () => {
            navigation.navigate("Restaurant",{id:restaurant.id});
        };
        return(
        <Pressable onPress={onPress} style={styles.restaurantContainer}>
        <Image 
        source={{
            uri: restaurant.image.startsWith('http') ? restaurant.image : DEFAULT_IMAGE, 
        }}
        style={styles.image}
        />
        <View style={styles.row}>
            <View>
                <Text style={styles.title}>{restaurant.name}</Text>
                <Text style={styles.subtitle}>
                    ฿ {restaurant.deliveryFee.toFixed(1)} &#8226; {""}
                    {restaurant.minDeliveryTime} - {restaurant.maxDeliveryTime} minutes
                </Text>
            </View>

            <View style={styles.rating}>
                <Text>{restaurant.rating.toFixed(1)}</Text>
            </View>
        </View>
        </Pressable>
        );
    };


    export default RestaurantItem;
    const styles = StyleSheet.create({
        
    
    restaurantContainer: {
        width: "100%",
        marginVertical: 10,
    },
    image: {
        width: "100%",
        aspectRatio: 5/3,
        marginBottom: 5,
        borderRadius: 12,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginVertical: 5,
    },
    subtitle: {
        color: "grey",
    },
    row:{
        flexDirection: 'row',
        alignItems: "center",
    },
    rating: {
        marginLeft: "auto",
        backgroundColor: "lightgray",
        width:25,
        height:25,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
    },
    
    });