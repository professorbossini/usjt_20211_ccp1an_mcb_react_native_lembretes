import React, { useState } from 'react';
import {Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';


export default function App() {
  
  const [lembrete, setLembrete] = useState('');
  const [lembretes, setLembretes] = useState([]);
  const [contador, setContador] = useState(0);

  const capturarLembrete = (oQueOUsuarioDigitou) => {
    setLembrete(oQueOUsuarioDigitou)
  }

  const adicionarLembrete = () => {
    setLembretes(lembretes => {
      setContador(contador + 1);
      return [...lembretes, {key: contador.toString(), value: lembrete}];
    });
      
    setLembrete('');
  }

  return (
    <View style={estilos.container}>

      <View style={estilos.lembreteInputView}>
        {/* usuário irá inserir lembretes aqui */}
        <TextInput 
          placeholder="O que deseja lembrar?"
          style={estilos.lembreteTextInput}
          onChangeText={capturarLembrete}
          value={lembrete}
        />
        <Button
          title="Inserir lembrete"
          onPress={adicionarLembrete}
        />
      </View>

      <View>
          <FlatList 
            data={lembretes}
            renderItem={
              elemento => (
                <View style={estilos.itemNaLista}>
                  <Text>{elemento.item.value}</Text>
                </View>
              )
            }
          />
      </View>

      
    </View>
  );
}
    
    const estilos = StyleSheet.create({
      container: {
        padding: 60
      },
      lembreteInputView: {
        marginBottom: 16
      },
      lembreteTextInput: {
        borderBottomColor: '#CCC', 
        borderBottomWidth: 1, 
        marginBottom: 8, 
        padding: 8, 
        textAlign: 'center'
      },
      itemNaLista: {
        padding: 12,
        backgroundColor: '#CCC',
        borderColor: '#999',
        borderWidth: 1,
        marginBottom: 12,
        borderRadius: 8,
        alignItems: 'center'
      }
    })
    
    // <ScrollView>
    //   <View>
    //     {/* aqui será exibida a lista de lembretes*/}
    //     {
    //       lembretes.map((elemento) => (
    //         <View key={elemento} style={estilos.itemNaLista}>
    //           <Text>{elemento}</Text>
    //         </View>
    //       ))
    //     }
    //   </View>
    // </ScrollView>