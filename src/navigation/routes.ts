// import {RouteProp} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export enum ScreenNames {
  Home = 'Home',
  HomeTab = 'HomeTab',
  Favourites = 'Favourites',
  Search = 'Search',
}

export type RootStackParamList = {
  [ScreenNames.Home]: undefined;
  [ScreenNames.HomeTab]: undefined;
  [ScreenNames.Favourites]: undefined;
  [ScreenNames.Search]: undefined;
};

export type NavProps<ScreenName extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, ScreenName>;
