import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

class PokemonPage extends React.Component {
    state = {
        pokemon: [],
        searchFelid: "",
    };

    componentDidMount() {
        fetch("http://localhost:3000/pokemon")
            .then((res) => res.json())
            .then((pokemon) => this.setState({ pokemon }));
    }

    searchChange = (e) => {
        this.setState({ searchFelid: e.target.value });
    };

    searchSub = () => {
        console.log("here");
        let newPokemon = this.state.pokemon.filter((poke) =>
            poke.name.toLowerCase().includes(this.state.searchFelid.toLowerCase())
        );
        this.setState({ pokemon: newPokemon, searchFelid: "" });
    };

    render() {
        return (
            <Container>
                <h1>Pokemon Searcher</h1>
                <br />
                <PokemonForm />
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
