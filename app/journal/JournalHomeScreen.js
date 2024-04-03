import { createNativeStackNavigator } from "@react-navigation/native-stack";
import JournalIntroScreen from "./JournalIntroScreen";
import JournalEntryListingScreen from "./JournalEntryListingScreen";
import JournalEntryDetailScreen from "./JournalEntryDetailScreen";

const Stack = createNativeStackNavigator();

export const JournalHomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Intro" component={JournalIntroScreen} />
      <Stack.Screen
        name="JournalEntryListing"
        component={JournalEntryListingScreen}
      />
      <Stack.Screen
        name="JournalEntryDetail"
        component={JournalEntryDetailScreen}
      />
    </Stack.Navigator>
  );
};

const JournalHomeScreen = () => {
  return <JournalHomeStack />;
};

export default JournalHomeScreen;
