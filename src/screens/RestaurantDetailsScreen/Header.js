import { View, Text, Image } from "react-native";
import styles from "./styles";

const DEFAULT_IMAGE = "https://www.taokaecafe.com/asp-bin/pic_taokae/sh2617.jpg";
const RestaurantHeader = ({restaurant}) => {
    return(
        <View style={styles.page}>
            <Image source={{
                    uri: restaurant.image.startsWith('http') 
                    ? restaurant.image 
                    : DEFAULT_IMAGE,
                }} 
                    style={styles.image} 
                />
            
            <View style={styles.container}>
                <Text style={styles.title}>{restaurant.name}</Text>
                <Text style={styles.subtitle}>
                    ฿ {restaurant.deliveryFee.toFixed(1)} &#8226; {restaurant.minDeliveryTime}-
                    {restaurant.maxDeliveryTime} minutes
                </Text>
                
                <Text style={styles.menuTitle}>Menu</Text>
            </View>
        </View>
    );
};



export default RestaurantHeader;