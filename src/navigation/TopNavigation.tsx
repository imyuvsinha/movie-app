/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {useTheme} from '@react-navigation/native';
import NowPlaying from '../home/NowPlaying';
import Popular from '../home/Popular';
import TopRated from '../home/TopRated';
import UpComing from '../home/UpComing';

const Tab = createMaterialTopTabNavigator();

export const TabBar = () => {
  const {colors} = useTheme();

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={colors.background}
      />
      <Tab.Navigator
        screenOptions={{
          lazy: true,
          tabBarScrollEnabled: true,
          tabBarBounces: true,
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: colors.gray,
          tabBarStyle: {
            backgroundColor: colors.background,
          },
          tabBarPressColor: colors.background,
          tabBarLabelStyle: {
            textAlign: 'center',
            fontSize: 15,
            fontWeight: '700',
            textTransform: 'none',
          },
          tabBarIndicatorStyle: {
            borderBottomWidth: 0,
            backgroundColor: 'transparent',
          },
          tabBarItemStyle: {
            width: 'auto',
          },
        }}>
        <Tab.Screen
          name="NowPlaying"
          component={NowPlaying}
          options={{
            tabBarLabel: 'Now Playing',
          }}
        />
        <Tab.Screen
          name="Popular"
          component={Popular}
          options={{
            tabBarLabel: 'Popular',
          }}
        />
        <Tab.Screen
          name="TopRated"
          component={TopRated}
          options={{
            tabBarLabel: 'Top Rated',
          }}
        />
        <Tab.Screen
          name="UpComing"
          component={UpComing}
          options={{
            tabBarLabel: 'Upcoming',
          }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
};
