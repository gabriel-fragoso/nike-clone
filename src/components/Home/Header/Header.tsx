import styled from './Header.module.scss'

import { SiNike } from 'react-icons/si'
import { BiSearchAlt2 } from 'react-icons/bi'


export default function Header() {
  return (
    <div className={styled.header}>
      <div className={styled.nike}>
        <SiNike size={62} />
      </div>
      <a href="#">NOVAS OFERTAS</a>
      <a href="#">LANÇAMENTOS</a>
      <a href="#">FEMININO</a>
      <a href="#">MASCULINO</a>
      <a href="#">INFANTIL</a>
      <a href="#">SNKRS</a>
      <div className={styled.input}>
        <BiSearchAlt2 size={22} />
        <input placeholder='O que você procura?' type="text" />
      </div>
    </div>
  )
}