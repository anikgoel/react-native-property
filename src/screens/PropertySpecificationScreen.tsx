import React, {Component} from 'react';
import { TextInput, StyleSheet, View, Button, TouchableOpacity } from 'react-native';
import Property from '../components/Property';
import { ScrollView } from 'react-native-gesture-handler';
import PropertyDetails from '../components/PropertyDetails';
import { PropertyListingStyles } from '../styles';


class PropertySpecificationScreen extends Component {
    state: any;
    item: any;
    constructor(props) {
        super(props);
        this.item=this.props.navigation.getParam('item');
    }
    render(){
        return(
            <View style={PropertyListingStyles.propertySpecificationMarginStyle}>
                <ScrollView>
                    <Property source={{ uri: this.item.uri }} />
                    <PropertyDetails 
                        title={this.item.title} 
                        subtitle={this.item.subtitle} 
                        content={this.item.content} 
                        price={this.item.price} 
                        description={this.item.description}
                    />                 
                </ScrollView>
            </View>
        )
    }

};







export default PropertySpecificationScreen;