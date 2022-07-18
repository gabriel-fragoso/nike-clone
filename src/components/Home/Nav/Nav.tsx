import Image from 'next/image'
import Link from 'next/link'
import { HiShoppingCart } from 'react-icons/hi'
import { SiJordan } from 'react-icons/si'
import SNKRS from '../../../assets/snkrs.png'

import styled from './Nav.module.scss'

export default function Nav() {
  return (
    <div className={styled.nav}>
      <div className={styled.joinUs}>
        <a href="#">Junte-se a Nós</a>
      </div>
      <SiJordan color='959595' size={26} />
      <Link href='/snkrs'>
        <div className={styled.snkrs}>
          <Image src={SNKRS} />
        </div>
      </Link>
      <div className={styled.navRight}>
        <a href="#">Acompanhar Pedidos</a>
        <a href="#">Login / Inscreva-se</a>
        <a href="#">Ajuda</a>
        <button className={styled.button}>
          <HiShoppingCart color='959595' size={18} />
        </button>
        <button className={styled.cart}>0</button>
      </div>
    </div>
  )
}