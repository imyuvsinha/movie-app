import React from 'react';
import {NavigationContainer, useTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList, ScreenNames} from './routes';
import {Colors} from '../theme';
import SearchScreen from '../search/Search';
import FavouritesScreen from '../favourites/FavouritesScreen';
import Icon from 'react-native-easy-icon';
import {getTabs} from './utils';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabBar} from './TopNavigation';

const HomeStack = createNativeStackNavigator<RootStackParamList>();

const Tab = createBottomTabNavigator();

const BottomNavigation: React.FC = () => {
  const {colors} = useTheme();

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBarIcon: ({focused, color, size}) => {
          const {iconName} = getTabs(route.name, focused);
          return (
            <Icon
              type="feather"
              name={iconName}
              size={size}
              color={focused ? colors.white : colors.primary}
            />
          );
        },
        tabBarStyle: {
          height: 58,
          borderTopWidth: 0.2,
          backgroundColor: colors.background,
          paddingBottom: 5,
        },
        tabBarActiveTintColor: colors.white,
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name={ScreenNames.Home} component={TabBar} />
      <Tab.Screen name={ScreenNames.Favourites} component={FavouritesScreen} />
      <Tab.Screen name={ScreenNames.Search} component={SearchScreen} />
    </Tab.Navigator>
  );
};

export function Navigation() {
  const navigationRef = React.useRef<any>();

  return (
    <NavigationContainer ref={navigationRef} theme={Colors.singlularTheme}>
      <HomeStack.Navigator screenOptions={{headerShown: false}}>
        <HomeStack.Screen
          name={ScreenNames.HomeTab}
          component={BottomNavigation}
        />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
}
