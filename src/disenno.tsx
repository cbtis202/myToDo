/* Importamos las libreias que vamos a usar */
import React from 'react';
import {
  View,
  Text, 
  StyleSheet, 
  TextInput, 
  TouchableOpacity,  // Componente parecido al boton pero le podemos dar estilo
  Dimensions,        // Accesa al tamaño total de la pantalla
  FlatList,         // Nos ayuda a que el render sea más rápido
} from 'react-native';

// basados en flexbox
const myStyle = StyleSheet.create({
  container:{
    width: '100%',
    padding: 20, 
  },
  title:{
    fontSize: 20,
    color: '#6f6f6f',
  },
  txtLabel:{
    fontSize: 16,
    color: '#6f6f6f',
  },
  txtDone:{
    fontSize: 16,
    color: '#6f6f6f',
    textDecorationLine: 'line-through',
  },
  txtButton:{
    fontSize: 16,
    color: '#FFF',
  },
  txtInput:{
    borderColor: '#000',
    borderWidth: 1,
    // Vamos por el tamaño de la pantalla 
    // Dimensions.get('screen').width
    // Asignamos que el componente siempre ocupe el 65% de la pantalla
    width: Dimensions.get('screen').width * 0.60,
    borderRadius: 13,
    paddingLeft: 13,
  },
  inputContainer:{
    marginTop: 20,   // Para separarlo del texto
    flexDirection: 'row',  // flexbox OJO
    justifyContent: 'space-between', 
  },

  btnAgregar:{
    backgroundColor: '#5895fb',
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('screen').width * 0.27,
    borderRadius: 11,
  },

  btnEliminar:{
    backgroundColor: '#F33D3D',
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('screen').width * 0.27,
    borderRadius: 11,
  },

  scrollContainer:{
    marginTop: 19,
  },
  taskContainer:{
    paddingVertical: 19,
    borderBottomColor: '#e4e4e4',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})

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
interface myTask{
  title: string;
  done: boolean;
  date: Date;
}


// Definimos la funcion para la App
export default function App(){

  // Funcion para el render
  // Recibe como prop un item que es de tipo myTask
  function myRenderTask({item}: {item: myTask}) {
    return (
      <View style={myStyle.taskContainer}>
        <TouchableOpacity>
          <Text style={ item.done ? myStyle.txtDone : myStyle.txtLabel}>{item.title}</Text>
          <Text style={item.done ? myStyle.txtDone : myStyle.txtLabel}>{item.date.toLocaleDateString()}</Text>
        </TouchableOpacity>
        { item.done &&
          <TouchableOpacity style={myStyle.btnEliminar}>
            <Text style={myStyle.txtButton}>Eliminar</Text>
          </TouchableOpacity>
        }
      </View>
    );
  }

  // todas las funciones regresa simpre algo
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
          renderItem={myRenderTask}
          data={tasks}
        />
      </View>

    </View>
  );
}

