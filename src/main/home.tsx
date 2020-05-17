import React from 'react';
import { Col, Row, UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';


interface Props {
  pokemons: any;
}

export const Home = (props: Props): JSX.Element =>{

  const { pokemons } = props;
  return (<Row>{pokemons && pokemons.length ? pokemons.map((element, index) => {
    return (<Col xs={3} key={index} className={"pokemons"}><Button id={element.name}>
      <img src={element.art_url} alt={element.name} />
      <Col xs={{ offset: 6 }}><text>{element.name}</text></Col>
    </Button>
      <UncontrolledCollapse toggler={`#${element.name}`}>
        <Card>
          <CardBody>
            <ul>
              <li className="pokemon_name">{element.name}</li>
              <li><b>Description:</b><br /> <p>{element.description}</p></li>
              <li><b>Types:</b>  <p>{element.types && element.types.length && element.types.map((type) => `${type} `)}</p></li>
              <li><b>National id:</b> <p>{element.national_id}</p></li>
              <li><b>Evolutions:</b> {element.evolutions && element.evolutions.length && element.evolutions.map((detail) => {
                return (
                  <ul className={"evolution"}>
                    <li>
                      Level: {detail.level ? detail.level : "N/A"}
                    </li>
                    <li>
                      Method: {detail.method ? detail.method : "N/A"}
                    </li>
                    <li>
                      To: {detail.to ? detail.to : "N/A"}
                    </li>
                    <li>
                      ID: {detail._id}
                    </li>
                  </ul>
                )
              })}</li>
            </ul>
          </CardBody>
        </Card>
      </UncontrolledCollapse>
    </Col>);
  }) : <div></div>

  }
  </Row>);
}
