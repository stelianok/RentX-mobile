import React from 'react';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import EditProfileNameAndEmail from '../screens/EditProfile/EditProfileNameAndEmail';
import EditProfileUpdatePassword from '../screens/EditProfile/EditProfileUpdatePassword';

const Tabs = createMaterialTopTabNavigator();

const EditProfileRoutes: React.FC = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen
        name={'EditNameAndEmail'}
        component={EditProfileNameAndEmail}
      />
      <Tabs.Screen
        name={'EditPassword'}
        component={EditProfileUpdatePassword}
      />
    </Tabs.Navigator>
  );
};

export default EditProfileRoutes;
