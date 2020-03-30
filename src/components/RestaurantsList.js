import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import RestaurantsDetail from './RestaurantsDetail';
import { withNavigation } from 'react-navigation';

const RestaurantsList = ({ title, restaurants, navigation }) => {
    if (!restaurants.length) {
        return null;
    }

    return (
        <View style={styles.containerStyle}>
            <Text style={styles.titleStyle}>{title}</Text>
            <FlatList 
                showsHorizontalScrollIndicator={false}
                horizontal
                data={restaurants}
                keyExtractor={restaurant => restaurant.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity 
                            onPress={() => navigation.navigate('RestaurantsShow', { id: item.id })}
                        >
                            <RestaurantsDetail restaurant={item} />
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    },
    containerStyle: {
        marginBottom: 10
    }
});

export default withNavigation(RestaurantsList);