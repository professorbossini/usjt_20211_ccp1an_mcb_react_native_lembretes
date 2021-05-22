import React, {useState} from 'react';
import {FlatList, StyleSheet, View } from 'react-native';
import LembreteInput from './components/LembreteInput';
import LembreteItem from './components/LembreteItem';


export default function App() {
  
  const [lembretes, setLembretes] = useState([]);
  const [contador, setContador] = useState(0);

  const removerLembrete = (keyASerRemovida) => {
    console.log("Vai remover a chave" + keyASerRemovida);
    setLembretes(lembretes => {
      return lembretes.filter((lembrete) => {
        return lembrete.key !== keyASerRemovida
      }
      )
    });
  };

  const adicionarLembrete = (lembrete) => {
    setLembretes(lembretes => {
      setContador(contador + 1);
      return [...lembretes, {key: contador.toString(), value: lembrete}];
    });;
  }

  return (
    <View style={estilos.container}>
    <LembreteInput onAdicionarLembrete={adicionarLembrete}/>
      
        <FlatList 
          data={lembretes}
          renderItem={
            lembrete => (
              <LembreteItem 
                chave={lembrete.item.key}
                lembrete = {lembrete.item.value}  
                onDelete={removerLembrete}
                />
            )
          }
        />    
    </View>
  );
}
    
    const estilos = StyleSheet.create({
      container: {
        padding: 60
      }
    })