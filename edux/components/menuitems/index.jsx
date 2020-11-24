import * as React from 'react';
import { View } from 'react-native';
import { Button, Menu, Divider, Provider, Appbar } from 'react-native-paper';

export const MenuEdux = () => {
    const [visible, setVisible] = React.useState(false);
  
    const openMenu = () => setVisible(true);
  
    const closeMenu = () => setVisible(false);
  
    return (
      <Provider>
        <View
          style={{
            paddingTop: 50,
            flexDirection: 'row',
            justifyContent: 'flex-start',
          }}>
          <Menu
            visible={visible}
            onDismiss={closeMenu}
            anchor={<Button onPress={openMenu}>Mostrar Menu</Button>}>
            <Menu.Item onPress={() => {}} title="Item 1" />
            <Menu.Item onPress={() => {}} title="Item 2" />
            <Divider />
            <Menu.Item onPress={() => {}} title="Item 3" />
          </Menu>
        </View>
      </Provider>
    );
  };
  
  export default MenuEdux