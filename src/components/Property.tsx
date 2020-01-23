import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, CardImage } from 'react-native-material-cards'
import { Icon } from 'native-base';
import { PropertyStyles } from '../styles';

class Property extends Component {

    constructor(props) {
        super(props);
        this.state = {
            favorite: false
        };
    }

    render(){
        const{favorite} = this.state;
        return(
            <View >
                <Card>
                    <Icon 
                        type={favorite ? "FontAwesome" : "Feather" }
                        name="bookmark" 
                        style={PropertyStyles.bookmarkIcon}
                        onPress={() => this.setState({ favorite: !favorite })}    
                    />
                    <CardImage 
                        source={this.props.source} style={PropertyStyles.cardImageStyle}
                    />
                </Card>
            </View>
        )
    }
};

const styles = StyleSheet.create({


});

export default Property; 
