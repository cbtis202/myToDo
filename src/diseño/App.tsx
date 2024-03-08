import React from 'react';
import {
  View,
  Text, 
  TextInput, 
  TouchableOpacity,  // Componente parecido al boton pero le podemos dar estilo
  FlatList,
} from 'react-native';
import myStyle from './myStyle';
import MyRenderTask from './MyRenderTask';

// Definimos nuestro arreglo de objetos
// para nuestras tareas

const tasks =[
  {
  title: "Aprender JavaScript",
  done: false,
  date: new Date(),
  },
  {
    title: "Aprender ReactJS",
    done: true,
    date: new Date(),
    },
  {
    title: "Aprender React Native",
    done: false,
    date: new Date(),
  },
  {
    title: "Estudiar para el examen",
    done: false,
    date: new Date(),
  },

];

// Definimos una interface con el tipo de dato
// para cada propiedad del objeto task
export interface myTask{
  title: string;
  done: boolean;
  date: Date;
}


// Definimos la funcion para la App
export default function App(){

  // todas las funciones regresa simpre algo
  const markDone = () => {
    console.log('markDone');
  };

  const deleteFuction = () => {
    console.log('Delete');
  };

  return(
    <View style={myStyle.container}>
      <Text style={myStyle.title}>Mis tares por hacer:</Text>
      <View style={myStyle.inputContainer}>
        <TextInput placeholder="Nueva tarea"
          style={myStyle.txtInput}/> 
        <TouchableOpacity style={myStyle.btnAgregar}>
          <Text style={myStyle.txtButton}>Agregar</Text>
        </TouchableOpacity>
      </View>
      <View style={myStyle.scrollContainer}>
        <FlatList 
          renderItem={({item}) => (
            <MyRenderTask 
              item={item} 
              markDonde={markDone} 
              deleteFuction={deleteFuction} 
            />
          )}
          data={tasks}
        />
      </View>

    </View>
  );
}

