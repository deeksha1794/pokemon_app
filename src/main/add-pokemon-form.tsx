import * as React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import { Field, reduxForm, FieldArray } from 'redux-form';


const validate = (values) => {
    let errors: any = {}
    if (!values.pokemonName) {
        errors.pokemonName = 'Required'
    } else if (values.pokemonName.length > 30) {
        errors.pokemonName = 'Must be 30 characters or less'
    }
    if (!values.Types) {
        errors.Types = 'Required'
    }
    if (!values.img) {
        errors.img = 'Required'
    }
    return errors
}

const renderField = (fields) => {
    return (
        <FormGroup>
            <Label>{fields.label}</Label>
            <div>
                <Input {...fields.input} placeholder={fields.label} type={fields.type} />
                {fields.meta.touched &&
                    ((fields.meta.error && <span>{fields.meta.error}</span>) ||
                        (fields.meta.warning && <span>{fields.meta.warning}</span>))}
            </div>
        </FormGroup>
    )
};
const renderTypes = (props: any) => {
    const { fields, error } = props;
    return (<ul>
        <li>
            <button onClick={() => fields.push()}>
                <img src={require("../icons/add_icon.png")} alt="add"/>
            </button>
            {error && <span>{error}</span>}
        </li>
        {fields.map((type, index) => (
            <li key={index}>
                <Button
                    type="button"
                    close
                    onClick={() => fields.remove(index)}
                />
                <Field
                    htmlFor={`${type}`}
                    name={`${type}`}
                    type="text"
                    component={renderField}
                    label={`Type #${index + 1}`}
                />
            </li>
        ))}
    </ul>)
};

const AddPokemonForm = (props): JSX.Element => {
    const { handleSubmit } = props
    return (

        <Form onSubmit={handleSubmit}>
            <Field
                htmlFor="pokemonName"
                label="Pokemon Name"
                component={renderField}
                name="pokemonName"
                type="text"
            />
            <FormGroup>
            <Label>Add Types</Label>
            <FieldArray
                component={renderTypes}
                name="types" />
            </FormGroup>
            <FormGroup style={{ textAlign: "center" }}>
                <hr />
                <h6>Base</h6>
                <hr />
            </FormGroup>
            <Field
                htmlFor="base.HP" label="HP"
                component={renderField}
                name="base.HP" type="number" />
            <Field htmlFor="base.Attack" label="Attack"
                component={renderField}
                name="base.Attack" type="number" />
            <Field htmlFor="base.Defence"
                component={renderField}
                label="Defence" name="base.Defence" type="number" />
            <Field htmlFor="base.Speed" label="Speed"
                component={renderField}
                name="base.Speed" type="number" />
            <Field htmlFor="art_url" label="Image URL"
                component={renderField}
                name="art_url" type="text" />
            <Button type="submit">Submit</Button>
        </Form>
    )
}
export default reduxForm({
    form: 'addPokemon',
    validate
})(AddPokemonForm);

