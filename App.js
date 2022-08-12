import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./screens/Home";
import PolygonScreen from "./screens/PolygonScreen";
import ListScreen from "./screens/ListScreen";
import AnimationScreen from "./screens/AnimationScreen";
import ScrollToIndexAnimationScreen from "./screens/ScrollToIndexAnimationScreen";
import AnimatedHeaderScreen from "./screens/AnimatedHeaderScreen";

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
              <Stack.Screen
                  name={"Animation Test"}
                  component={AnimationScreen}
                  options={{
                      headerShown: false
                  }}
              />
              <Stack.Screen
                  name={"Scroll To Index Animation Test"}
                  component={ScrollToIndexAnimationScreen}
                  options={{
                      headerShown: false
                  }}
              />
              <Stack.Screen
                  name={"Animated Header Screen"}
                  component={AnimatedHeaderScreen}
                  options={{
                      headerShown: false
                  }}
              />
          </Stack.Navigator>

      </NavigationContainer>

  );
}

