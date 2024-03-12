export const getTabs = (tabRoute: string, focused: boolean) => {
  switch (tabRoute) {
    case 'Home':
      return {
        iconName: focused ? 'home' : 'home',
      };
    case 'Favourites':
      return {
        iconName: focused ? 'heart' : 'heart',
      };
    case 'Search':
      return {
        iconName: focused ? 'search' : 'search',
      };
    default:
      return {
        iconName: '',
      };
  }
};
