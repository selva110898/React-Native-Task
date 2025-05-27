import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack";
import StackNavigator from "./StackNavigation";

const Bridge = () => {

    return (
        <NavigationContainer>
            <StackNavigator />
        </NavigationContainer>
    )

}

export default Bridge