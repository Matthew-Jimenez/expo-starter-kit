import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Dashboard from "./DashboardScreen";

const MainStack = createNativeStackNavigator();

const MainScreenStack = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Dashboard" component={Dashboard} />
    </MainStack.Navigator>
  );
};

export default MainScreenStack;
