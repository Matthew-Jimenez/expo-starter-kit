import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import AuthRequirer from "./src/containers/AuthRequirer";
import MainScreenStack from "./src/screens/MainScreenStack";
import UnauthenticatedScreenStack from "./src/screens/UnauthenticatedStack/UnauthenticatedScreenStack";

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <UnauthenticatedScreenStack />

          <AuthRequirer>
            <MainScreenStack />
          </AuthRequirer>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
