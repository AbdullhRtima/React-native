import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Button,
    Dimensions
} from "react-native";
const { height, width } = Dimensions.get('window')
class List extends Component {
    render() {
        return (
                <View style={{ width: width - 40, height: 200, marginTop: 20 }}>
                    <Image source={this.props.imageUri}
                        style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd' }}
                    />
                        <Text style={{ fontWeight: '100', marginTop: 10 }}>
                        {this.props.title}
                        </Text>
                        <Button onPress={this._onPress} title="MORE" color="#999" accessibilityLabel="Tap on Me"/>
                </View>
        );
    }
}
export default List;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});