import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, FlatList} from 'react-native';
import ListItem from './src/components/ListItem/ListItem';
import ActivityInput from './src/components/ActivityInput/ActivityInput';
import ModalConfirm from './src/components/ModalConfirm/ModalConfirm';

export default class App extends Component {

    state = {
        isModalShow: false,
        activityList: [],
        activity: ""
    };

    handleOnChangeText = val => {
        this.setState({
            activity: val
        });
    };

    handleButtonOnPress = () => {
        console.log("Press Fired");
        if (this.state.activity === "") {
            return;
        }

        this.setState(prevState => {
            return {
                activityList: prevState.activityList.concat({
                    key: Math.random().toString(),
                    value: prevState.activity
                }),
                //activity: ""
            }
        }, () => {
            //alert(this.state.activityList);
        })


    };

    handleRemoveActivity = (key) => {
        this.setState(prevState => {
            return {
                isModalShow: true,
                // activityList: prevState.activityList.filter((activity) => {
                //     return activity.key !== key;
                // })
            }
        });
    };

    handleModalConfirmClose = () => {
        this.setState({
            isModalShow: false
        });
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>To Do List App</Text>
                <View style={styles.inputContainer}>
                    <ActivityInput
                        value={this.state.activity}
                        onChangeText={this.handleOnChangeText}
                    />
                    <Button
                        style={styles.buttonName}
                        onPress={this.handleButtonOnPress}
                        title="Add New"
                        color="#841584"
                    />
                </View>
                <FlatList
                    style={styles.activityList}
                    data={this.state.activityList}
                    renderItem={(info) => (
                        <ListItem activity={info.item.value}
                                  removeActivity={() => this.handleRemoveActivity(info.item.key)}>
                        </ListItem>
                    )}
                >
                </FlatList>
                <ModalConfirm
                    isModalShow={this.state.isModalShow}
                    modalConfirmClose={this.handleModalConfirmClose}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 26,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    inputContainer: {
        //flex: 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    inputName: {
        width: '70%'
    },
    buttonName: {
        width: '30%'
    },
    activityList: {
        width: '100%'
    }
});
