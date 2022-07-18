import styled from './Section.module.scss'

import snkrsBackground from '../../../assets/snkrs-background.png'
import Image from 'next/image'

export default function Content() {
  return (
    <div className={styled.section}>
      <h1 className={styled.title}>Casual</h1>
      <div className={styled.sectionBackground}>
        <Image src={snkrsBackground} />
      </div>
      <div className={styled.detailsArea}>
        <h1>SEU NOVO CLÁSSICO</h1>
        <span>Confira essa seleção especial e encontre o clássico que é a sua cara.</span>
        <button>Ver Tênis</button>
      </div>
    </div>
  )
}