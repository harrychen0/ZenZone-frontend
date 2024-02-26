import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GoalsScreen from "./GoalsScreen";

const Stack = createNativeStackNavigator();

export const GoalsHomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Goals" component={GoalsScreen} />
    </Stack.Navigator>
  );
};

const GoalsHomeScreen = () => {
  return <GoalsHomeStack />;
};

export default GoalsHomeScreen;
