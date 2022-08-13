import { Component } from 'react';
import { Button, TextInput, View } from 'react-native';
import { TodoService } from '../../../services/TodoService';

export default class extends Component {
    
    state = {
        description: '',
    }

    static defaultProps = {
        onAdd: async (item) => {
            console.log(item)
            await TodoService.create(item);
            window.location.reload();
        }
    }

    handleChange = (description) => {
        this.setState({ description })
    }

    add = () => {
        const { state } = this
        console.log(state)
        if (state.description) {
            this.props.onAdd(state)
            this.handleChange('')
        }
    }

    render() {
        return (
            <View>
                <TextInput value={this.state.description} onChangeText={this.handleChange} />
                <Button title='Adicionar' color='#0062ac' onPress={this.add} />
            </View>
        )
    }
}