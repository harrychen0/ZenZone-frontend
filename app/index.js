// Home page for the app: holds the bottom tabs for Home and Data screens (WIP). More screens can be added here for the tab.

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DataScreen from "./data/DataScreen";
import { GoalsHomeStack } from "./goals/GoalsHomeScreen";
import { JournalHomeStack } from "./journal/JournalHomeScreen";
import Icon from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Journal") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Data") {
            iconName = focused ? "list" : "list-outline";
          } else if (route.name === "Goals") {
            iconName = focused ? "trophy" : "trophy-outline";
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#29465B",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: [
          {
            display: "flex",
          },
          null,
        ],
      })}
    >
      <Tab.Screen
        name="Journal"
        component={JournalHomeStack}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen name="Data" component={DataScreen} />
      <Tab.Screen
        name="Goals"
        component={GoalsHomeStack}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default App;
