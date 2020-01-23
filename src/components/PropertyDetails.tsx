import React, {Component} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards';
import { Icon } from 'native-base';
import { PropertyDetailsStyles } from '../styles';

class PropertyDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            heart: false
        };
    }
    render(){
        const{heart} = this.state;
        return(
            <View style={PropertyDetailsStyles.propertyDetailsMainStyle}>
                <Card style={PropertyDetailsStyles.cardStyle}>
                    <View style={PropertyDetailsStyles.rowDirection}>
                        <CardTitle 
                            title={this.props.title}
                            subtitle={this.props.subtitle}
                        />
                        <Text style={PropertyDetailsStyles.priceTextStyle}>{this.props.price}</Text>
                    </View>
                    <View style={PropertyDetailsStyles.rowDirection}>
                        <CardContent text={this.props.description ? '': this.props.content} />
                        <Icon 
                            type="AntDesign" 
                            name={heart ? 'heart' : 'hearto'}
                            style={PropertyDetailsStyles.heartIcon}
                            onPress={() => this.setState({ heart: !heart })} 
                        />
                    </View>
                        <CardContent text={this.props.description ? this.props.description : ''}></CardContent>
                    <CardAction 
                        separator={true} 
                        inColumn={false}>
                    </CardAction>
                </Card>
            </View>
        )

    }
};

const styles = StyleSheet.create({


});

export default PropertyDetails; 
