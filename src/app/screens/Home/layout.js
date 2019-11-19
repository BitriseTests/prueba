import React from 'react';
import { View } from 'react-native';
import CustomButton from '@components/CustomButton';
import i18next from 'i18next';

import FormModal from './components/FormModal';
import ItemList from './components/ItemList';
import styles from './styles';

export default function Home({ items, addItem, modalVisibility, onCloseModal, onAddItem }) {
  return (
    <View style={styles.container}>
      <FormModal visible={modalVisibility} onClose={onCloseModal} onAddItem={addItem} />
      <ItemList data={items} />
      <CustomButton
        activeOpacity={0.7}
        title={i18next.t('HOME:ADD_ITEM')}
        style={styles.button}
        textStyle={styles.buttonTextStyle}
        onPress={onAddItem}
      />
    </View>
  );
}
