import Image from "next/image";

import logoSnkrs from '../../../assets/logo-snkrs.svg'
import styled from './headerSnkrs.module.scss'

export default function NavSnkrs() {
  return (
    <div className={styled.header}>
      <div className={styled.nike}>
        <Image src={logoSnkrs} />
      </div>
      <div className={styled.rightArea}>
        <a href="#">FEED</a>
        <a href="#">EM ESTOQUE</a>
        <a href="#">CALENDÁRIO</a>
      </div>
    </div>
  )
}