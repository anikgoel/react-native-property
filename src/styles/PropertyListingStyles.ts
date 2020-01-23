import { StyleSheet } from "react-native";

export const PropertyListingStyles = StyleSheet.create({
    cityTextInput:{padding: 10,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 6,
        marginTop:40,
        marginLeft:10,
        marginRight:10,
        fontSize: 20
    },
    overallDropdownStyle:{
        width:'100%',
        flexDirection: "row",
        marginRight:10,
        marginLeft:10,
        marginTop:10
    },
    costDropdown:{
        width:'37%',
         borderColor: 'black',
         borderWidth: 2,
         borderRadius: 4,
         marginRight:'1%'
    },
    specificationDropdown:{
        width:'28%', 
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 4,
        marginRight:'1%'
    },
    roomSpecificationDropdown:{
        width:'28%',
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 4

    },
    marginStyling:{
        marginBottom:20
    },
    propertySpecificationMarginStyle:{
        marginTop:30
    }

});