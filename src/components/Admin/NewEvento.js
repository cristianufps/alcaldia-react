
import React from 'react';
import { FcNews }  from "react-icons/fc";
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import {Row, Col, Form, Input, Label, FormGroup, Button} from 'reactstrap';
import '../styles/NewEvento.css';

class NewEvento extends React.Component{

    render(){
        return(
           <div>
               <Row>
               <Col xs="3"></Col>
               <Col xs="6">
                <h2> Registro de Evento</h2>
                <Form>
                    <FormGroup className="form_group">
                <Label id="label"><strong>Nombre</strong></Label>
                <Input type="text" id="nombre" name="nombre"></Input>
                </FormGroup>
                <FormGroup className="form_group">
                <Label id="label"><strong>Descripcion</strong></Label>
                <Input type="textarea" id="descripcion" name="descripcion"></Input>
                </FormGroup>
                <FormGroup className="form_group">
                <Label id="label"><strong>Fecha de Inicio</strong></Label>
                <Input type="date" id="fecha_inicio" name="fecha_inicio"></Input>
                </FormGroup>
                <FormGroup className="form_group">
                <Label id="label"><strong>Fecha de Finalización</strong></Label>
                <Input type="date" id="fecha_fin" name="fecha_fin"></Input>
                </FormGroup>
                <FormGroup className="form_group">
                <Label id="label" className="image"><strong>Imagen</strong></Label>
                <Input type="file" id="imagen" name="imagen"></Input>
                </FormGroup>
                <FormGroup className="form_group">
                <Label id="label"><strong>Link del Evento</strong></Label>
                <Input type="text" id="link" name="link"></Input>
                </FormGroup>
                <FormGroup className="form_group">
                <InputLabel id="label"><strong>Categoria</strong></InputLabel>
<Select labelId="label" id="select" value="1">
<MenuItem value="1">Seleccione una Categoria</MenuItem>
  <MenuItem value="EDUCACION">Educación</MenuItem>
  <MenuItem value="MODA">Moda</MenuItem>
  <MenuItem value="SEGURIDAD VIAL">Seguridad Vial"</MenuItem>
  <MenuItem value="GASTRONIMIA">Gastronomía</MenuItem>
</Select>
                
                </FormGroup>
                <FormGroup className="form_group">
                <Button color="success">Agregar</Button>
                </FormGroup>
               
                </Form>
               </Col>
               </Row>
           </div>
        )}
}
export default NewEvento;