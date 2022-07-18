import axios from 'axios'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { HiShoppingCart } from "react-icons/hi";


import { IShoes } from '../../../types/IShoes'
import styled from './ContentSnkrs.module.scss'


export default function Content() {
  const [shoes, setShoes] = useState<IShoes[]>([])

  useEffect(() => {
    axios.get('http://localhost:3333/shoe').then(resp => resp.data).then(data => setShoes(data))
  }, [])


  return (
    <div className={styled.content}>
      {shoes.map(shoe => {
        return (
          <div className={styled.shoes
          } key={shoe.id} >
            <img className={styled.shoeImage} src={shoe.image_front} alt="" />
            <h5>{shoe.manufacturer}</h5>
            <h1>{shoe.name}</h1>
            <div className={styled.btnArea}>
              <button className={styled.btn}>{shoe.availability}</button>
            </div>
          </div>
        )
      })}

    </div >
  )
}