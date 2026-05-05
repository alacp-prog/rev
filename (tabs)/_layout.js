import { Tabs } from "expo-router";
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';



export default function RootLayout() {
  return (

      <Tabs>
          <Tabs.Screen  
           name="list" options ={{
                  title: 'list',
                  tabBarIcon: ({ color, size }) => (
                    <Entypo name="list" size={24} color="black" />        ), 
                }} />
          <Tabs.Screen  
           name="add" options ={{
                  title: 'Ajoutter',
                  tabBarIcon: ({ color, size }) => (
                   <FontAwesome5 name="plus" size={24} color="black" />        ), 
                }} />
          

      </Tabs>


  );
}
