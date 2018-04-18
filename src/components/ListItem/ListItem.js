import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import cr7 from '../../assets/cr7.jpg';
import Icon from 'react-native-vector-icons/MaterialIcons';
const listItem = (props) => {
    return (
        <View style={styles.listItemContainer}>
            <Image
                style={{width: 30, height: 30, marginRight: 5}}
                source={{uri: 'https://raw.githubusercontent.com/rexxars/react-hexagon/HEAD/logo/react-hexagon.png'}}
            />
            <Icon name="event seat" size={30} />
            <Text
                onPress={props.removeActivity}>
                {props.activity}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    listItemContainer: {
        width: '100%',
        padding: 5,
        margin: 5,
        backgroundColor: '#eee',
        flexDirection: 'row',
        alignItems: 'center'
    },
    textItem: {
        width: '60%'
    },
    imageItem: {
        width: '30%'
    }
});


export default listItem;
