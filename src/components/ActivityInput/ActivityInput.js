import React, {Fragment} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const activityInput = (props) => {
    return (
        <Fragment>
            <TextInput
                style={styles.activityInput}
                value={props.value}
                onChangeText={props.onChangeText}
            />
        </Fragment>
    );
};

const styles = StyleSheet.create({
    activityInput: {
        width: '70%'
    }
});

export default activityInput;
