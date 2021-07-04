import React from 'react'
import { View, Button, Text, StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

export default function Home() {
  const dispatch = useDispatch()
  const selector = useSelector((state)=> {return state})
  const handleClick = async () =>{
        dispatch({type:'LIGHT_THEME'})
  }
  return (
    <View style={selector.thema.selectTheme ? styles.container : styles.darkTheme}>
        <Text style={selector.thema.selectTheme ? styles.text : styles.darkThemeText}>{selector.thema.selectTheme ? "Light Theme" : "Dark Theme"} is activate</Text>
        <Button title="Change Theme" onPress={handleClick}/>

        <View style={styles.list}>
            {
              selector.playData.data.map((value) =>{
                    return <Text>{value.title}</Text>
              })
            }
        </View>

        <Button title="Adicionar" onPress={() =>{dispatch({type:'PUSH_DATA'})}}/>
        <Button title="Deletar" onPress={() =>{dispatch({type: 'DELETE_DATA'})}} />
        <Button title="Limpar" onPress={() =>{dispatch({type: 'CLEAR_DATA'})}} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  darkTheme:{
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  darkThemeText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  },
  list:{
    marginTop: 50,
    backgroundColor: 'white'
  }
})
