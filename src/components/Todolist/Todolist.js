import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
import { FlatList } from 'react-native-web';
import { TodoService } from '../../../services/TodoService';

class Todolist extends Component {

    // Lista estática para teste
    static defaultProps = {
        list: [ ],

        onRemove: async (item) => {
            await TodoService.delete(item.id);
            window.location.reload();
        },
    }

    // função que controla estrutura da lista(id vs item)
    handleRow = ({ item, index }) => {
        return (
            <View style={{ flexDirection: 'row', margin: 5, }}>
                <Text style={{ flex: 1 }}>{this.formatListNumber(index)} - {item.description}</Text>
                <Button title='X' color='red' onPress={() => this.props.onRemove(item)} />
            </View>
        )
    }
    // formata id baseado na posição
    formatListNumber = (number) => {
        const digits = 2;

        return ('0'.repeat(digits) + (number + 1)).slice(-digits)
    }


    render() {

        const { props } = this;
        const keyExtractor = item => item.id;

        return (
            <View>
                <FlatList
                    data={props.list}
                    keyExtractor={keyExtractor}
                    renderItem={this.handleRow}
                />
            </View>
        )
    };
}


export default Todolist