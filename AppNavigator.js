import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './pages/HomeScreen';
import EmployerHome from './pages/employer/EmployerHome';
import EmployeeHome from './pages/employee/EmployeeHome';
import FindEmployees from './pages/employer/FindEmployees';
import EmployeeProfile from './pages/employee/EmployeeProfile';
import Chat from './pages/Chat';

const  AppNavigator = createStackNavigator({
  HomeScreen: { screen: HomeScreen },
  EmployerHome: {screen: EmployerHome},
  EmployeeHome: {screen: EmployeeHome},
  FindEmployees: {screen: FindEmployees},
  EmployeeProfile: {screen: EmployeeProfile},
  Chat: {screen: Chat},
});

export default createAppContainer(AppNavigator);