import { createStackNavigator } from "@react-navigation/stack"
import Login from "../Screens/Login"
import { NavigationContainer } from "@react-navigation/native"
import TabNavigator from "./TabNavigation"
import ProductDetail from "../Screens/Productdetail"
import OrderAccepted from "../Screens/OrderAccepted"
import Onboarding from "../Screens/OnBoarding"

const StackNavigator = () => {

    const MyStackNavig = createStackNavigator()

    const StackScreens = [
        { screenName: 'Onboarding', component: Onboarding },
        { screenName: 'Login', component: Login },
        { screenName: 'Home', component: TabNavigator },
        { screenName: 'ProductDetail', component: ProductDetail },
        { screenName: 'OrderSuccess', component: OrderAccepted }
    ]

    return (


        <MyStackNavig.Navigator initialRouteName="Onboarding">

            {StackScreens.map((item, index) => {

                return (

                    <MyStackNavig.Screen
                        options={{ headerShown: false }}
                        key={item?.screenName}
                        name={item.screenName}
                        component={item.component}
                    />
                )

            })}

        </MyStackNavig.Navigator>


    )
}

export default StackNavigator

