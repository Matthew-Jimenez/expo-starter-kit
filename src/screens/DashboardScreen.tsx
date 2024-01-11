import { observer } from "mobx-react-lite";
import { View, Text, Button } from "react-native";

import AuthenticationService from "../services/AuthenticationService";

const Dashboard = () => {
  const handleLogout = () => {
    AuthenticationService.logout();
  };

  return (
    <View>
      <Text>Dashboard</Text>

      <Text>Welcome {AuthenticationService.user?.email}</Text>

      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

export default observer(Dashboard);
