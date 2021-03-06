import React from 'react'
import {Row,Col,Card,Icon,CardTitle} from 'react-materialize'


function Tarjeta()
{
    return (

  <Col
    m={6}
    s={12}
    l={4}
  >
    <Card
      actions={[
        <a key="1" href="#">This is a Link</a>
      ]}
      closeIcon={<Icon>close</Icon>}
      header={<CardTitle image={require('../imagenes/imagenes/proyectouno.png')}>Card Title</CardTitle>}
      revealIcon={<Icon>more_vert</Icon>}
    >
      Here is the standard card with an image thumbnail.
    </Card>
  </Col>


    )
}

export default Tarjeta