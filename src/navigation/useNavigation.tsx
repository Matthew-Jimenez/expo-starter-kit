import { NavigationProp, useNavigation } from "@react-navigation/native";

export type RootStackParamList = {
  Dashboard: undefined;
  SignIn: undefined;
};

export const useRootNavigation = () => {
  return useNavigation<NavigationProp<RootStackParamList>>();
};
