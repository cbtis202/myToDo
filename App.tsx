import React, {useState} from 'react';
import {
  View,
  Text, 
  TextInput, 
  TouchableOpacity,  // Componente parecido al boton pero le podemos dar estilo
  FlatList,
} from 'react-native';
import myStyle from './myStyle';
import MyRenderTask from './MyRenderTask';

// Definimos una interface con el tipo de dato
// para cada propiedad del objeto task
export interface myTask{
  title: string;
  done: boolean;
  date: Date;
}

// Definimos la funcion para la App
export default function App(){

  // Control del contenido del textInput
  // el state recibe valor y la funcion que va hacer
  const [text,setText] = useState('');

  // Control de la lista dinámica
  // Le decimos que el arreglo es de tipo myTask
  const [tasks, setTask] = useState<myTask[]>([]);

  // Funcion para agregar una nueva tarea
  const addTask = () => {
    // Clonamos el arreglo task con el operador ...
    const aux = [...tasks];
    const newTask = {
      title: text,   // Text del useState
      done: false,
      date: new Date(),
    };
    aux.push(newTask);
    setTask(aux);
    setText('');
  };

  // todas las funciones regresa simpre algo
  // la funcion markDone recibe una tarea de tipo myTask
  // para poder marcarla como hecha
  const markDone = (task:myTask) => {
    const aux = [...tasks];
    // Buscamos el indice de la tarea que vamos a marcar
    const index = aux.findIndex(elemet => elemet.title === task.title);
    // Ya con el indice lo asignamos al toDo
    // para marcar como hecho
    const toDo = aux[index];
    // Intercambiamos el valor actual de Done
    toDo.done = !toDo.done;
    // actualizamos la tarea
    setTask(aux);
  };

  const deleteFuction = (task:myTask) => {
    const aux = [...tasks];
    // Buscamos el indice de la tarea que vamos a eliminar
    const index = aux.findIndex(elemet => elemet.title === task.title);
    // Ya con el indice la borramos
    aux.splice(index,1);
    // actualizamos la tarea
    setTask(aux);
  };

  return(
    <View style={myStyle.container}>
      <Text style={myStyle.title}>Mis tares por hacer:</Text>
      <View style={myStyle.inputContainer}>
        <TextInput placeholder="Nueva tarea"
          onChangeText={(t:string) => setText(t)}
          value={text}
          style={myStyle.txtInput}/> 
        <TouchableOpacity style={myStyle.btnAgregar} onPress={addTask}>
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

