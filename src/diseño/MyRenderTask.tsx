import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import myStyle from './myStyle';
import { myTask } from './App';

// Definimos la interface que recibe como Props
// el componente
interface itemProps{
    item: myTask;
    markDonde: () => void;
    deleteFuction: () => void;
}

// Componente para el render de las tareas
// Recibe como prop un item que es de tipo myTask
export default function MyRenderTask({
    item, 
    markDonde, 
    deleteFuction
}: itemProps) {
    return (
        <View style={myStyle.taskContainer}>
          <TouchableOpacity onPress={markDonde}>
            <Text style={ item.done ? myStyle.txtDone : myStyle.txtLabel}>
                {item.title}
            </Text>
            <Text style={ item.done ? myStyle.txtDone : myStyle.txtLabel}>
                {item.date.toLocaleDateString()}
            </Text>
          </TouchableOpacity>
          { item.done &&
            <TouchableOpacity style={myStyle.btnEliminar} onPress={deleteFuction}>
              <Text style={myStyle.txtButton}>Eliminar</Text>
            </TouchableOpacity>
          }
        </View>
      );    
};