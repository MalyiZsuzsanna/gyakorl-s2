import React from 'react'
import {Card,CardBody,CardTitle,CardSubtitle,CardText,Button} from 'reactstrap'

export const SingleProduct = ({id,title,category,price,thumbnail}) => {
    console.log(title)
  return (
    <div>
        <Card key={id}
  style={{
    width: '18rem',height:'100%'
  }}
>
  <img
    alt={title}
    src={thumbnail}
  />
  <CardBody style={{display:'flex',flexDirection:'column',justifyContent:'space-beetween'}}>
    <CardTitle tag="h5">
      Card title
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      {category}
    </CardSubtitle>
    <CardText>
      Some quick example text to build on the card title and make up the bulk of the card‘s content.
    </CardText>
    <Button style={{background:'blue'}}>
      Button
    </Button>
  </CardBody>
</Card>

    </div>
  )
}

