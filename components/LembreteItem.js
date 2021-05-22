import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const LembreteItem = (props) => {
return (
    <TouchableOpacity onPress={props.onDelete.bind(this, props.chave)}>
        <View style={styles.itemNaLista}>
            <Text>{props.lembrete}</Text>
        </View>
    </TouchableOpacity>
);
}

const styles = StyleSheet.create({
    itemNaLista: {
      padding: 12,
      backgroundColor: '#CCC',
      borderColor: '#999',
      borderWidth: 1,
      marginBottom: 12,
      borderRadius: 8,
      alignItems: 'center'
    }
  });

  export default LembreteItem;