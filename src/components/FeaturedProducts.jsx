import React from 'react'
import {featuredProducts} from '../data'
import {Card,CardTitle,CardBody} from 'reactstrap'
export const FeaturedProducts = () => {
    console.log(featuredProducts)
  return (
    <div className='featured'>
        {featuredProducts.map(obj=>
        <Card key={obj.id}
        style={{
          width: '18rem'
        }}
      >
        
        <CardBody>
          <CardTitle tag="h5">
            {obj.title}
          </CardTitle>
          
        </CardBody>
        <img
          alt="Sample"
          src={obj.thumbnail}
        />
      </Card>
        )}
    </div>
  )
}

