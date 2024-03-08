/* Importamos las libreias que vamos a usar */
import React from 'react';
import {
  View,
  Text, 
  StyleSheet, 
  TextInput, 
  TouchableOpacity,  // Componente parecido al boton pero le podemos dar estilo
  Dimensions,        // Accesa al tamaño total de la pantalla
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
})

// Definimos la funcion para la App
export default function App(){
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

    </View>
  );
}