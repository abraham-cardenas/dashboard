import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class Creacionvehiculos extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="text">Caracteristica del Vehiculo</Label>
          <Input type="text" name="Vehiculo" id="Vehiculo" placeholder="Caracteristicas" />
        </FormGroup>
        <FormGroup>
          <Label for="text">Propietario</Label>
          <Input type="text" name="propiet" id="propiet" placeholder="Propietario" />
        </FormGroup>
        <FormGroup>
          <Label for="pedidos">Promedio pedido</Label>
          <Input type="select" name="select" id="promedio">
            <option>5.000.000</option>
            <option>7.000.000</option>
            <option>18.000.000</option>
            <option>20.000.000</option>
            <option>60.000.000</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleFile">File</Label>
          <Input type="file" name="file" id="exampleFile" />
          <FormText color="muted">
            This is some placeholder block-level help text for the above input.
            It's a bit lighter and easily wraps to a new line.
          </FormText>
        </FormGroup>
        <FormGroup tag="fieldset">
          <legend>Radio Buttons</legend>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              Option one is this and that—be sure to include why it's great
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              Option two can be something else and selecting it will deselect option one
            </Label>
          </FormGroup>
          <FormGroup check disabled>
            <Label check>
              <Input type="radio" name="radio1" disabled />{' '}
              Option three is disabled
            </Label>
          </FormGroup>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
            Check me out
          </Label>
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}