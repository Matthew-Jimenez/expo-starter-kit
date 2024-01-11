import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignInScreen from "./SignInScreen";

const UnauthenticatedStack = createNativeStackNavigator();

const UnauthenticatedScreenStack = () => {
  return (
    <UnauthenticatedStack.Navigator>
      <UnauthenticatedStack.Screen name="SignIn" component={SignInScreen} />
    </UnauthenticatedStack.Navigator>
  );
};

export default UnauthenticatedScreenStack;
