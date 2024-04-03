import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GoalsEntryListingScreen from "./GoalsEntryListingScreen";

const Stack = createNativeStackNavigator();

export const GoalsHomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="GoalsEntryListing"
        component={GoalsEntryListingScreen}
      />
    </Stack.Navigator>
  );
};

const GoalsHomeScreen = () => {
  return <GoalsHomeStack />;
};

export default GoalsHomeScreen;
