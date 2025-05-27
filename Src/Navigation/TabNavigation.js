import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Explore from "../Screens/Explore";
// import OrderAccepted from "../Screens/OrderAccepted";
// import Shop from "../Screens/Shop";
import Cart from "../Screens/Cart";
import Favourite from "../Screens/Favourite";
import Account from "../Screens/Account";
import { Image } from "react-native";
import { actuatedNormalize } from "../Constants/PixelScaling";
import Shop from "../Screens/Shop";

const TabNavigator = () => {

    const MyTabNavigator = createBottomTabNavigator();

    const TabScreens = [
        { screenName: 'Shop', component: Shop },
        { screenName: 'Explore', component: Explore },
        { screenName: 'Cart', component: Cart },
        { screenName: 'Favourite', component: Favourite },
        { screenName: 'Account', component: Account }
    ]

    const tabImages = {
        Shop: require('../../assets/Shop.png'),
        Explore: require('../../assets/Explore.png'),
        Cart: require('../../assets/Cart.png'),
        Favourite: require('../../assets/Favourite.png'),
        Account: require('../../assets/Favourite.png'),
        ShopSelected: require('../../assets/ShopSelected.png'),
        ExploreSelected: require('../../assets/ExploreSelected.png'),
        CartSelected: require('../../assets/CartSelected.png'),
        FavouriteSelected: require('../../assets/FavouriteSelected.png'),
        AccountSelected: require('../../assets/AccountSelected.png'),
    }

    return (

        <MyTabNavigator.Navigator
            screenOptions={{
                tabBarActiveTintColor: '#e91e63',
                tabBarInactiveTintColor: 'gray',
                headerShown: false,
                tabBarHideOnKeyboard:true,
                tabBarStyle: {
                    borderTopLeftRadius: actuatedNormalize(15),
                    borderTopRightRadius: actuatedNormalize(15),
                    backgroundColor: '#fff',
                    paddingBottom: actuatedNormalize(10),
                    paddingTop: actuatedNormalize(10),
                    height: actuatedNormalize(70),
                    shadowColor: "rgba(85, 94, 88, 0.09)",
                    shadowOffset: {
                        width: 2,
                        height: -5,
                    },
                    shadowOpacity: 1,
                    shadowRadius: 0,
                    elevation: -10
                },
            }}>

            {TabScreens.map((item, index) => {

                return (

                    <MyTabNavigator.Screen
                        options={{
                            tabBarActiveTintColor: "red",
                            tabBarLabelStyle: { fontSize: actuatedNormalize(12) },
                            tabBarIcon: ({ focused }) => <Image source={tabImages[focused ? `${item?.screenName}Selected` : item?.screenName]} height={actuatedNormalize(24)} width={actuatedNormalize(44)} />
                        }}
                        key={item?.screenName}
                        name={item.screenName}
                        component={item.component}
                    />
                )

            })}

        </MyTabNavigator.Navigator>

    );
}

export default TabNavigator;
