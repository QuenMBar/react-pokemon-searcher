import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

class PokemonPage extends React.Component {
    state = {
        allPokemon: [],
        pokemon: [],
        searchFelid: "",
    };

    componentDidMount() {
        fetch("http://localhost:3000/pokemon")
            .then((res) => res.json())
            .then((pokemon) => this.setState({ pokemon: pokemon, allPokemon: pokemon }));
    }

    filterPokemon = () => {
        let newPokemon = this.state.allPokemon.filter((poke) =>
            poke.name.toLowerCase().includes(this.state.searchFelid.toLowerCase())
        );
        this.setState({ pokemon: newPokemon });
    };

    searchChange = (e) => {
        this.setState({ searchFelid: e.target.value }, this.filterPokemon);
    };

    addCard = (name, hp, frontUrl, backUrl) => {
        if (name.length !== 0 && hp.length !== 0 && frontUrl.length !== 0 && backUrl.length) {
            let data = {
                name: name,
                hp: hp,
                sprites: {
                    front: frontUrl,
                    back: backUrl,
                },
            };
            fetch(`http://localhost:3000/pokemon`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            })
                .then((response) => response.json())
                .then((newPokemon) => {
                    this.setState(
                        {
                            allPokemon: [...this.state.allPokemon, newPokemon],
                        },
                        this.filterPokemon
                    );
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        }
    };

    render() {
        return (
            <Container>
                <h1>Pokemon Searcher</h1>
                <br />
                <PokemonForm addCard={this.addCard} />
                <br />
                <Search
                    searchChange={this.searchChange}
                    searchSub={this.searchSub}
                    searchFelid={this.state.searchFelid}
                />
                <br />
                <PokemonCollection pokemon={this.state.pokemon} />
            </Container>
        );
    }
}

export default PokemonPage;
