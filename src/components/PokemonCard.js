import React from "react";
import { Card } from "semantic-ui-react";

class PokemonCard extends React.Component {
    state = {
        side: "front",
    };

    handleFlip = () => {
        this.setState({
            side: this.state.side === "front" ? "back" : "front",
        });
    };

    render() {
        return (
            <Card onClick={this.handleFlip}>
                <div>
                    <div className="image">
                        <img
                            src={
                                this.state.side === "front"
                                    ? this.props.pokeData.sprites.front
                                    : this.props.pokeData.sprites.back
                            }
                            alt="oh no!"
                        />
                    </div>
                    <div className="content">
                        <div className="header">{this.props.pokeData.name}</div>
                    </div>
                    <div className="extra content">
                        <span>
                            <i className="icon heartbeat red" />
                            {this.props.pokeData.hp}
                        </span>
                    </div>
                </div>
            </Card>
        );
    }
}

export default PokemonCard;
