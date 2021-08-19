import {Message} from "./components/Message/Message";
import {RenderMessageList} from "./components/RenderMessageList/RenderMessageList";
import React from 'react';

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: '',author: 'Maria'};

        this.handleChangeValue = this.handleChangeValue.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeValue(event) {
        this.setState({value: event.target.value});


    }

    handleSubmit(event) {

        const messageArray = [];
        messageArray.push(this.state.value);
        const messageList = messageArray.map((text) => <li>{text}</li>);
        console.log(this.state.author + ', your message has been sent');
        console.log(messageArray);
        event.preventDefault();
        return(messageList);
    }


    render() {
        return (
            <>

            <form onSubmit={this.handleSubmit}>
                <label>
                    Message
                    <input type="text" value={this.state.value} onChange={this.handleChangeValue} />

                </label>
                <input type="submit" value="Отправить" />
            </form>
            <RenderMessageList list = {messageList}/>
            </>
        );
    }
}

export {NameForm};

