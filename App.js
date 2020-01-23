import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import PropertyListingScreen from './src/screens/PropertyListingScreen';
import PropertySpecificationScreen from './src/screens/PropertySpecificationScreen';


const navigator = createStackNavigator(
  {
    Listing: PropertyListingScreen,
    Property: PropertySpecificationScreen
  },
  {
    initialRouteName: "Listing",
    defaultNavigationOptions: {
      title: 'Assignment'
    }
  }
);

export default createAppContainer(navigator);