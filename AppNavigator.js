import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './HomeScreen';
import EmployerHome from './EmployerHome';
import EmployeeHome from './EmployeeHome';
import FindEmployees from './FindEmployees';
import EmployeeProfile from './EmployeeProfile';
import Chat from './Chat';

// const AppNavigator = createStackNavigator({
//   HomeScreen: { screen: HomeScreen },
//   EmployerHome: {screen: EmployerHome},
//   EmployeeHome: {screen: EmployeeHome},
//   FindEmployees: {screen: FindEmployees},
//   EmployeeProfile: {screen: EmployeeProfile},
//   Chat: {screen: Chat},
// });

// export default createAppContainer(AppNavigator);

const  = createStackNavigator({
  HomeScreen: { screen: HomeScreen },
  EmployerHome: {screen: EmployerHome},
  EmployeeHome: {screen: EmployeeHome},
  FindEmployees: {screen: FindEmployees},
  EmployeeProfile: {screen: EmployeeProfile},
  Chat: {screen: Chat},
});

export default createAppContainer(AppNavigator);