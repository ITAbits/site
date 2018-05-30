import React, { Component } from 'react';
import { Sidebar, Segment, Button, Menu, Header, Icon } from 'semantic-ui-react';

class TutorialsSidebar extends Component {
    constructor(props) {
        super(props);

        // Initial state
        this.state = {
            visible: true
        };

        // Toggle sidebar visibility
        this.toggleVisible = () => {
            this.setState({
                    visible: !this.state.visible
                })
        };
    }

    render() {

        return(
            <div>
                <Sidebar.Pushable as={Segment}>
                    <Sidebar as={Menu} animation='push' visible={this.state.visible} width='thin' vertical={true} inverted={true}>
                        <Menu.Item name='C#'>
                            C-sharpinho
                        </Menu.Item>
                        <Menu.Item name='Jogos'>
                            Joguinhos
                        </Menu.Item>
                    </Sidebar>
                    <Button onClick={this.toggleVisible} > Toggle Sidemenu! </Button>
                    <Sidebar.Pusher>
                        <Segment basic={true}>
                            <Header as='h3'> Tutorials Header</Header>
                            <MockContent/>
                        </Segment>
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </div>
        );
    }
}

class MockContent extends Component {
    constructor(props){
        super(props);
        this.state = {
            text: "\n" +
            "\n" +
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit ex ligula. Pellentesque neque quam, pulvinar at ornare egestas, aliquet sed ante. Etiam malesuada arcu est, nec sollicitudin odio tincidunt quis. Maecenas sed ante semper, sollicitudin ipsum eget, ultricies magna. Nullam et euismod lacus. Nunc eget sodales quam. Sed ut ante vitae mi tempus tristique et sit amet dui. Sed fringilla nisl ac magna auctor, vitae dictum diam bibendum.\n" +
            "\n" +
            "Etiam leo magna, ullamcorper aliquet gravida in, faucibus quis arcu. Vestibulum blandit dolor quis urna ultrices, nec sodales orci imperdiet. Aliquam suscipit vehicula quam quis rutrum. Aenean tristique luctus neque, et consequat justo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris non finibus nisi. Praesent sit amet nulla in mauris maximus iaculis ac non purus. Sed vitae augue mauris. Nulla quis tortor eu ex rhoncus tempor nec id tellus. Duis at metus id mauris viverra laoreet id nec enim. Fusce ac ullamcorper dui. Aenean volutpat ex ut ante tempus, bibendum rhoncus arcu pellentesque. Donec a arcu id massa luctus dapibus vitae eget sapien.\n" +
            "\n" +
            "Nulla facilisi. Duis pharetra orci eros, vel pretium dolor pulvinar eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla varius lorem ut velit aliquet semper. Quisque risus leo, accumsan sed diam vel, convallis elementum mauris. Phasellus tincidunt lacinia nulla, sit amet egestas nibh viverra sit amet. Nullam eu molestie risus, sed mollis nibh. Nam eu mauris ornare, commodo elit quis, malesuada neque.\n" +
            "\n" +
            "In dapibus magna nisi. Donec congue dapibus dui quis ornare. Integer est lectus, convallis et orci nec, vehicula luctus lacus. Duis sagittis mi non eros fermentum pulvinar eu in urna. Vestibulum ut erat nec metus lacinia dignissim volutpat id tellus. Suspendisse pretium, mauris eu luctus cursus, arcu quam luctus massa, tempus semper mi leo id purus. Nulla ornare fringilla erat vel luctus. Aliquam id diam id tellus aliquam maximus. Donec lectus turpis, iaculis in neque a, blandit tempor turpis.\n" +
            "\n" +
            "Integer condimentum purus malesuada dolor iaculis laoreet. Aenean vestibulum orci sed pretium pellentesque. Aliquam erat volutpat. Etiam consectetur quis risus in tempus. Aliquam erat volutpat. Duis egestas tempus fringilla. Ut dapibus, tellus vel finibus euismod, magna ante aliquet est, vitae ultrices ex urna vitae felis. Fusce rhoncus diam sit amet arcu tincidunt, porta bibendum nunc venenatis. Curabitur lorem diam, euismod sit amet nunc nec, volutpat dapibus lacus. "
        };
    };

    render(){
        return(
            <div>
                <p>{this.state.text}</p>
            </div>
        );
    };
}

class LinkToTutorials extends Component{
    render(){
        return(
            <section>
                <h1>
                    Tutoriais
                    <a href='/tutorials'> <Icon name='arrow right' /> </a>
                </h1>
            </section>
        );
    };
}

export default LinkToTutorials;