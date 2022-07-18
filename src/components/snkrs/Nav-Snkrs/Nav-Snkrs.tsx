import Image from "next/image";
import Link from "next/link";
import { HiShoppingCart } from "react-icons/hi";
import BrazilFlag from '../../../assets/brazil-flag.png'

import styled from './navSnkrs.module.scss'


export default function NavSnkrs() {
  return (
    <div className={styled.nav}>
      <Link href='/'>
        <div className={styled.joinUs}>
          <span>{"<"} Voltar para Nike.com</span>
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
        <Image src={BrazilFlag} />
      </div>
    </div>
  )
}