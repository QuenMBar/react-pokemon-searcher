import React from "react";
import { Form } from "semantic-ui-react";

class PokemonForm extends React.Component {
    state = {
        name: "",
        hp: "",
        frontUrl: "",
        backUrl: "",
    };

    handleChange = (e) => {
        // this.state[e.target.name]
        let obj = {};
        switch (e.target.name) {
            case "name":
                obj = { name: e.target.value };
                break;
            case "hp":
                obj = { hp: e.target.value };
                break;
            case "frontUrl":
                obj = { frontUrl: e.target.value };
                break;
            case "backUrl":
                obj = { backUrl: e.target.value };
                break;
        }
        this.setState(obj);
    };

    subData = () => {
        this.props.addCard(this.state.name, this.state.hp, this.state.frontUrl, this.state.backUrl);
        this.setState({
            name: "",
            hp: "",
            frontUrl: "",
            backUrl: "",
        });
    };

    render() {
        return (
            <div>
                <h3>Add a Pokemon!</h3>
                <Form onSubmit={this.subData}>
                    <Form.Group widths="equal">
                        <Form.Input
                            fluid
                            value={this.state.name}
                            onChange={this.handleChange}
                            label="Name"
                            placeholder="Name"
                            name="name"
                        />
                        <Form.Input
                            fluid
                            value={this.state.hp}
                            onChange={this.handleChange}
                            label="hp"
                            placeholder="hp"
                            name="hp"
                        />
                        <Form.Input
                            fluid
                            value={this.state.frontUrl}
                            onChange={this.handleChange}
                            label="Front Image URL"
                            placeholder="url"
                            name="frontUrl"
                        />
                        <Form.Input
                            value={this.state.backUrl}
                            onChange={this.handleChange}
                            fluid
                            label="Back Image URL"
                            placeholder="url"
                            name="backUrl"
                        />
                    </Form.Group>
                    <Form.Button>Submit</Form.Button>
                </Form>
            </div>
        );
    }
}

export default PokemonForm;
