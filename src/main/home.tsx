import React from 'react';
import { Col, Row, UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';


interface Props {
  pokemons: any;
  onClickHandler: (e: Event, element: any) => void;
}

export const Home = (props: Props): JSX.Element => {
  const { pokemons } = props;

  return (<Row>{pokemons && pokemons.length ? pokemons.map((element, index) => {
    return (<Col xs={3} key={index} className={"pokemons"}>
      <Button close className="delete" onClick={(e) => props.onClickHandler(e, element)} />
      <Button id={element.name}>
        <img src={element.art_url} alt={element.name} />
        <Col xs={{ offset: 6 }}><text>{element.name}</text></Col>
      </Button>
      <UncontrolledCollapse toggler={`#${element.name}`}>
        <Card>
          <CardBody>
            <ul>
              <li className="pokemon_name">{element.name}</li>
              <li><b>HP:</b>  <p>{element.base.HP ? element.base.HP : "N/A"}</p></li>
              <li><b>Attack:</b>  <p>{element.base.Attack ? element.base.Attack : "N/A"}</p></li>
              <li><b>Defense:</b>  <p>{element.base.Defense ? element.base.Defense : "N/A"}</p></li>
              <li><b>Speed:</b>  <p>{element.base.Speed ? element.base.Speed : "N/A"}</p></li>
              <li><b>Types:</b>  <p>{element.types && element.types.length && element.types.map((type) => `${type} `)}</p></li>
            </ul>
          </CardBody>
        </Card>
      </UncontrolledCollapse>
    </Col>);
  }) : <div></div>

  }
  </Row>);
}
