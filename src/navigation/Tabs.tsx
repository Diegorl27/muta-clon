import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { InicioScreen, BilleteraScreen, RecoleccionesScreen, PerfilScreen } from '../screens';

import Icon from 'react-native-vector-icons/Ionicons';

import { colores } from '../../theme/AppTheme';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () =>  {
  return (
    <Tab.Navigator
      screenOptions={ ({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: colores.primary,
        tabBarStyle: {
            borderTopWidth: 0,
            elevation: 0,
            backgroundColor:colores.secondary,
            height: 80,
            paddingVertical:20,
        },
        tabBarLabelStyle: {
            fontSize: 12,
            fontWeight:'400',
            paddingBottom:14,
            paddingTop:5
        },
        tabBarIcon: (props) => {

            let iconName: string = '';
            switch (route.name) {
                case 'InicioScreen' :
                    iconName = 'home-outline';
                break;

                case 'BilleteraScreen' :
                    iconName = 'wallet-outline';
                break;

                case 'RecoleccionesScreen' :
                    iconName = 'calendar-outline';
                break;
                
                case 'PerfilScreen' :
                    iconName = 'person-outline';
                break;
            }
            return <Icon name={iconName} size={25} color={props.color} />;
        },
    })}
    >
      <Tab.Screen name="InicioScreen" options={{title:'Inicio'}} component={InicioScreen} />
      <Tab.Screen name="BilleteraScreen" options={{title:'Billetera'}} component={BilleteraScreen} />
      <Tab.Screen name="RecoleccionesScreen" options={{title:'Recolecciones'}} component={RecoleccionesScreen} />
      <Tab.Screen name="PerfilScreen" options={{title:'Perfil'}} component={PerfilScreen} />
    </Tab.Navigator>
  );
}