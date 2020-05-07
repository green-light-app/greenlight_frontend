import { createStackNavigator } from 'react-navigation';
import Home from './Home';
import Chat from './Chat';

const Navigator = createStackNavigator({
    Home: { screen: Home }, 
    Chat: { screen: Chat }
}); 

export default Navigator;