import React,{Component} from 'react';
import { TextInput, StyleSheet, View, Button, TouchableOpacity } from 'react-native';
import { PropertyListingStyles } from '../styles';
import SelectInput from 'react-native-select-input-ios';
import Property from '../components/Property';
import { ScrollView } from 'react-native-gesture-handler';
import PropertyDetails from '../components/PropertyDetails';




class PropertyListingScreen extends Component {
    state: any;
    constructor(props){
        super(props);
        this.state={data:null}
    }
    async loadAds() {
        let adsUrl = 'https://api.myjson.com/bins/aihcm';
        let ads = await fetch(adsUrl)
        .then(response => response.json())
        .then(responseData => responseData)
        .catch(function(error) {
            let code = error.code;
            let message = error.message;
            return { success: false, code, message };
        });
        return ads;
    }

    componentWillMount() {
        this.loadAds().then(items => this.setState({ data: items }));
      }

    render(){
        return (!this.state.data ? null :
            <View>
                <ScrollView>
                    <View style={PropertyListingStyles.marginStyling}>
                        <TextInput
                            placeholder="Please Enter Place, City"
                            style={PropertyListingStyles.cityTextInput}
                        />
                        <View style={PropertyListingStyles.overallDropdownStyle}>
                            <View style={PropertyListingStyles.costDropdown}>
                                <SelectInput value={0} options={this.state.data.options} />
                            </View>
                            <View style={PropertyListingStyles.specificationDropdown}>
                                <SelectInput value={0} options={this.state.data.specification} />
                            </View>
                            <View style={PropertyListingStyles.roomSpecificationDropdown}>
                                <SelectInput value={0} options={this.state.data.room_specification} />
                            </View>
                        </View>
                    </View>
                    <View>
                        {this.state.data.listings.map((item,index) => {
                            return (<View style={PropertyListingStyles.marginStyling} key={index} >
                              <TouchableOpacity
                                    onPress={() =>
                                        this.props.navigation.navigate("Property", {
                                            item: item
                                            
                                        })
                                    }
                                    key={index}
                                >
                                <Property source={{ uri: item.uri }} />
                                <PropertyDetails title={item.title} subtitle={item.subtitle} content={item.content} price={item.price} />
                                </TouchableOpacity>
                            </View>);
                        })}
                    </View>
                </ScrollView>
            </View>
        )
    }
};



export default PropertyListingScreen;