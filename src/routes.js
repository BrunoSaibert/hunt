import { createAppContainer, createStackNavigator } from 'react-navigation';

import Main from './pages/main';
import Product from './pages/product';

const Routes = createStackNavigator({
  Main,
  Product
}, {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#da552f',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        textAlign: 'center',
        flex: 1
      },
    },
  });

export default createAppContainer(Routes);