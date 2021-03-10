import React, {Component} from 'react';
import {Formik, Form} from 'formik';
import {Container, Button, Input} from 'reactstrap';

export default class App extends Component {
  handleSubmit = (values) => {
  let data = new FormData();
  data.append("photo1", values.photo1);
  return fetch(baseUrl, {
    method: "post",
    headers: new Headers({
      Accept: "application/json",
      Authorization: "Bearer " + token,
    }),
    body: data,
  })
    .then((response) => response.json())
    .catch((error) => console.log(error));
  };
  render(){
    return(
    <Container>
      <Formik 
        initialValues={{ photo1: ''}}
        onSubmit={this.handleSubmit}>
        {(formProps) => (
          <Form>
            <Input
              type="file"
              name="file"
              onChange={(event) =>{
                formProps.setFieldValue("photo1", event.target.files[0]);
              }}
            />
            <Button type="Submit">Submit</Button>
          </Form>
        )}
      </Formik>
      </Container>
    );
  }
}