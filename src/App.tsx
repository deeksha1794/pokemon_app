import React from 'react';
import { ActionCreator } from './action/action';
import { PokemonState } from "./reducers/pokemon";
import { connect } from 'react-redux';
import { getPokemons, deletePokemon } from './action/pokemon';
import { Home } from './main/home';
import { Container } from 'reactstrap';
import NavBar from './main/nav-bar';


interface DispatchProps {
  getPokemon: ActionCreator;
  deletePokemon: ActionCreator;
}

interface StateProps {
  pokemonState: PokemonState
}
interface Props extends StateProps, DispatchProps { }
interface State { }

class App extends React.Component<Props, State> {

  public componentWillMount() {
    this.props.getPokemon();
  }
  public render(): JSX.Element {
    return (
      <Container className="themed-container" fluid={true}>
        <header >
          <NavBar />
        </header>
        <Container><Home pokemons={this.props.pokemonState.pokemons} onClickHandler={this.onClickHandler} /></Container>
      </Container>
    );
  }
  private onClickHandler = (e, Element) => {
    this.props.deletePokemon(Element.pkdx_id)
  }
}
function mapStateToProps(state: any): StateProps {
  return {
    pokemonState: state.pokemon
  };
}

export default connect<StateProps, DispatchProps>(mapStateToProps, {
  getPokemon: getPokemons.request,
  deletePokemon: deletePokemon.request
})(App);
