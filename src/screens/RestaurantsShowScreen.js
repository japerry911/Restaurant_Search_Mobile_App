import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, ScrollView } from 'react-native';
import yelp from '../api/yelp';

const RestaurantsShowScreen = ({ navigation }) => {
    const [restaurant, setRestaurant] = useState(null);
    const id = navigation.getParam('id');

    const getRestaurant = async id => {
        const response = await yelp.get(`/${id}`);
        setRestaurant(response.data);
    }

    useEffect(() => {
        getRestaurant(id);
    }, []);

    if (!restaurant) {
        return null;
    }

    return (
        <View style={styles.containerStyle}>
            <Text style={styles.textHeaderStyle}>{`${restaurant.name}\n`}</Text>
            <Text style={styles.listHeaderStyle}>Categories:</Text>
            <FlatList
                data={restaurant.categories}
                keyExtractor={category => category.alias}
                renderItem={({ item }) => {
                    return (
                        <Text style={styles.listItemStyle}>{item.title}</Text>
                    );
                }}
            />
            <FlatList
                horizontal 
                data={restaurant.photos}
                keyExtractor={photo => photo}
                renderItem={({ item }) => {
                    return (
                        <Image style={styles.imageStyle} source={{ uri: item }} />
                    );
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
    },
    imageStyle: {
        height: 100,
        width: 200,
        marginLeft: 10,
        marginTop: 10,
        borderRadius: 4
    },
    textHeaderStyle: {
        fontSize: 20,
        marginLeft: 10,
        marginTop: 10,
        textAlign: 'center'
    },
    listHeaderStyle: {
        fontSize: 16,
        marginLeft: 10
    },
    listItemStyle: {
        marginLeft: 20
    }
});

export default RestaurantsShowScreen;