import React from 'react';
import {Modal, View, Text, Button, StyleSheet} from 'react-native';

const modalConfirm = props => {
    return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={props.isModalShow}
            onRequestClose={props.modalConfirmClose}>

            <View style={{margin: 22}}>
                <View>
                    <Text>Are you sure to delete this activity?</Text>
                    <View style={styles.buttonContainer}>
                        <Button
                            onPress={props.modalConfirmClose}
                            title={"OK"}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'stretch'
    }
});

export default modalConfirm;
