import React from 'react'
import {Card} from 'flowbite-react'

type PropsType = {
    name : string ,
    desc : string
    image : string
}

export default function CardDetailComponent({name, desc, image} : PropsType) {
    return (
        <Card
      className="max-w-sm"
      imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
      imgSrc={image}
    >
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
        </h5>
      </a>
    

    </Card>
    );
}
