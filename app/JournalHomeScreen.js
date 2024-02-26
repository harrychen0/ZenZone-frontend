import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IntroScreen from "./IntroScreen";
import JournalScreen from "./JournalScreen";
import EntryDetailScreen from "./EntryDetailScreen";

const Stack = createNativeStackNavigator();

export const JournalHomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Intro" component={IntroScreen} />
      <Stack.Screen name="Journal" component={JournalScreen} />
      <Stack.Screen name="EntryDetail" component={EntryDetailScreen} />
    </Stack.Navigator>
  );
};

const JournalHomeScreen = () => {
  return <JournalHomeStack />;
};

export default JournalHomeScreen;
