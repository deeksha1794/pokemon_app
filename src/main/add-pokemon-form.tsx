import * as React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import {  reduxForm } from 'redux-form';

let AddPokemonForm = (props): JSX.Element => {
  const { handleSubmit } = props
  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label htmlFor="pokemonName">Pokemon Name</Label>
        <Input name="pokemonName" type="text" />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="types">Types</Label>
        <Input name="types" type="text" />
      </FormGroup>
      <FormGroup>
          <hr/>
        <Label style={{textAlignment: "center"}}>Base</Label>
        <hr/>
        <FormGroup>
        <Label htmlFor="HP">HP</Label>
        <Input name="HP" type="number" />
        </FormGroup>
        <FormGroup>
        <Label htmlFor="Attack">Attack</Label>
        <Input name="Attack" type="number" />
        </FormGroup>
        <FormGroup>
        <Label htmlFor="Defence">Defence</Label>
        <Input name="Defence" type="number" />
        </FormGroup>
        <FormGroup>
        <Label htmlFor="Speed">Speed</Label>
        <Input name="Speed" type="number" />
        </FormGroup>
      </FormGroup>
      <FormGroup>
      <Label htmlFor="img">Image URL</Label>
        <Input name="img" type="text" />
      </FormGroup>
      <Button type="submit">Submit</Button>
    </Form>
  )
}

export default reduxForm({
  form: 'contact'
})(AddPokemonForm);
 