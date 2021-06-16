
import React from 'react';
import { FcNews }  from "react-icons/fc";
import "bootstrap/dist/css/bootstrap.min.css";
import {Row, Col, Form, Input, Label, FormGroup, Button} from 'reactstrap';
import '../styles/NewNoticia.css';

class NewNoticia extends React.Component{

    render(){
        return(
           <div>
               <Row>
               <Col xs="3"></Col>
               <Col xs="6">
                <h2> Registrar Noticia</h2>
                <Form>
                    <FormGroup className="form_group">
                <Label id="label"><strong>Titulo</strong></Label>
                <Input type="text" id="nombre" name="nombre"></Input>
                </FormGroup>
                <FormGroup className="form_group">
                <Label id="label"><strong>Descripcion</strong></Label>
                <Input type="textarea" id="descripcion" name="descripcion"></Input>
                </FormGroup>
                <FormGroup className="form_group">
                <Label id="label"><strong>Fecha</strong></Label>
                <Input type="date" id="fecha_inicio" name="fecha_inicio"></Input>
                </FormGroup>
                <FormGroup className="form_group">
                <Label className="image"><strong>Imagen</strong></Label>
                <Input type="file" id="imagen" name="imagen"></Input>
                </FormGroup>
                <FormGroup className="form_group">
                <Label id="label"><strong>Link de la Noticia</strong></Label>
                <Input type="text" id="link" name="link"></Input>
                </FormGroup>
                <FormGroup className="form_group">
                <Button color="success">Registrar</Button>
                </FormGroup>
                </Form>
               </Col>
               </Row>
           </div>
        )}
}
export default NewNoticia;