import React from 'react';
import { ActionCreator } from './action/action';
import { PokemonState } from "./reducers/pokemon";
import { connect } from 'react-redux';
import { getPokemons, deletePokemon, createPokemon } from './action/pokemon';
import { Home } from './main/home';
import { Container, Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import NavBar from './main/nav-bar';
import AddPokemonForm from './main/add-pokemon-form';


interface DispatchProps {
  getPokemon: ActionCreator;
  deletePokemon: ActionCreator;
  createPokemon: ActionCreator;
}

interface StateProps {
  pokemonState: PokemonState
}
interface Props extends StateProps, DispatchProps { }
interface State {
  isOpen: boolean;
 }

class App extends React.Component<Props, State> {

 public constructor(props: Props){
   super(props);
   this.state = {
     isOpen: false
   }
 }

  public componentWillMount() {
    this.props.getPokemon();
  }
  public render(): JSX.Element {
    const {isOpen} = this.state;
    return (
      <Container className="themed-container" fluid={true}>
        <header >
          <NavBar />
        </header>
        <Container>
          <div>
        <Button className="pokemon-add" color="danger" onClick={this.onToggleHandler}>
          <img src={require("./icons/add_icon.png")} alt="add"/>
          </Button>
        <Modal  isOpen={isOpen} toggle={this.onToggleHandler} >
        <ModalHeader toggle={this.onToggleHandler}>Welcome to Family</ModalHeader>
        <ModalBody className="form-modal">
          <AddPokemonForm onSubmit={this.onSubmitHandler}/>
        </ModalBody>
      </Modal>
      </div>
          <Home pokemons={this.props.pokemonState.pokemons} onClickHandler={this.onClickHandler} />
          </Container>
      </Container>
    );
  }
  private onClickHandler = (e, Element) => {
    e.stopPropagation()
    this.props.deletePokemon(Element.pkdx_id)
  }
private onToggleHandler =() => {
  this.setState({
    isOpen: !this.state.isOpen
  })
}
private onSubmitHandler =(data) => {
  this.props.createPokemon(data);
  this.onToggleHandler();
}
}

function mapStateToProps(state: any): StateProps {
  return {
    pokemonState: state.pokemon
  };
}

export default connect<StateProps, DispatchProps>(mapStateToProps, {
  getPokemon: getPokemons.request,
  deletePokemon: deletePokemon.request,
  createPokemon: createPokemon.request
})(App);
