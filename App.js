// import react Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ShoppingLists from './components/ShoppingLists';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(["AsyncStorage has been extracted from"]);
import Welcome from './components/Welcome';

// Create the navigator
const Stack = createNativeStackNavigator();

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore";

const App = () => {
  const firebaseConfig = {
      apiKey: "AIzaSyAsSvJViPZXCulH_NqsrdZNfFByxs4-mDY",
  authDomain: "shopping-list-demo-64eb4.firebaseapp.com",
  projectId: "shopping-list-demo-64eb4",
  storageBucket: "shopping-list-demo-64eb4.appspot.com",
  messagingSenderId: "218019505952",
  appId: "1:218019505952:web:7e68ba6543a67481fdd945"
};

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(app);

   return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
      >
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen
          name="ShoppingLists"
        >
          {props => <ShoppingLists db={db} {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;