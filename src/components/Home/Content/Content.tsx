import styled from './Content.module.scss'

import backgroundMembers from '../../../assets/background-members.png'
import Image from 'next/image'

export default function Content() {
  return (
    <div className={styled.content}>
      <a target="_blank" href="https://www.nike.com.br/membros-nike/cadastro?orig_campaign=nikeifc">
        <div className={styled.background}>
          <Image src={backgroundMembers} />
        </div>
      </a>
      <span className={styled.span}>Tenha algo em comum com essas lendas: seja um Membro Nike. O cadastro é gratuito e você ainda ganha benefícios exclusivos.</span>
      <button>Junte-se a Nós</button>
    </div>
  )
}