import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View } from 'react-native';
import { TodoService } from './services/TodoService';

import Form from './src/components/Form/Form';
import Todolist from './src/components/Todolist/Todolist';

export default class App extends React.Component{

 state = {
    list : []
  }

  async componentDidMount() {
    const list = await TodoService.list();
    this.setState({ list });
  }
/* 
  add = (text) => {
    const newItem = await TodoService.add(text);
    const list = [...this.state.list, newItem];
    
  } */

  remove = async (item) => {
    await TodoService.remove(item.id);
    const list = this.state.filter(itemList => itemList.id !== item.id)
    this.setState(list);
  }

  render(){
    const { state} = this;
    return (
    <View style={{padding: 50}}>
      <Form />
      <Todolist list={state.list} />
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
