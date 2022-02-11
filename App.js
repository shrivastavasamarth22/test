import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./screens/Home";
import PolygonScreen from "./screens/PolygonScreen";
import ListScreen from "./screens/ListScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName={"Home"}>
              <Stack.Screen
                  name={"Home"}
                  component={Home}
              />
              <Stack.Screen
                  name={"Map Test"}
                  component={PolygonScreen}
              />
              <Stack.Screen
                name={"List Test"}
                component={ListScreen}
              />
          </Stack.Navigator>

      </NavigationContainer>

  );
}

