import styled from './Promotion.module.scss'

import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiFillCreditCard } from 'react-icons/ai'
import { IoShirtOutline } from 'react-icons/io5'
import { FaExchangeAlt } from 'react-icons/fa'
import { SiNike } from 'react-icons/si'
import Image from 'next/image';

import PriceImg from '../../../assets/price.png'
import nikeImg from '../../../assets/nike-logo.png'
import priceOfert from '../../../assets/priceOfert.png'
import boxNike from '../../../assets/boxNike.png'


export default function Promotion() {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div className={styled.promotion}>
      <Slider {...settings}>
        <div>
          <div className={styled.slider}>
            <AiFillCreditCard size={38} />
            <strong>FORMAS DE PAGAMENTO</strong>
            <span>Em Até 12x sem juros. </span>
            <a href='#'>Veja Detalhes</a>
          </div>
        </div>
        <div>
          <div className={styled.slider}>
            <IoShirtOutline size={38} />
            <div className={styled.exchange}>
              <FaExchangeAlt />
            </div>
            <strong>TROCA GRÁTIS</strong>
            <span>Confira os detalhes de nossa política de trocas e devoluções.</span>
            <a href="#"> Veja aqui</a>
          </div>
        </div>
        <div>
          <div className={styled.slider}>
            <div className={styled.logo}>
              <SiNike size={32} />
              <strong className={styled.nike}>NIKE.COM</strong>
            </div>
            <span>Atualizamos nossa Política de Privacidade e Termos de Uso.</span>
            <a href="#"> Veja aqui</a>
          </div>
        </div>
        <div>
          <div className={styled.slider}>
            <Image width={42} height={42} src={PriceImg} />
            <strong>NOVAS OFERTAS</strong>
            <span>Novos produtos em oferta!</span>
            <a href="#"> Ver novidades.</a>
          </div>
        </div>
        <div>
          <div className={styled.slider}>
            <div className={styled.nikeImg}>
              <Image width={38} height={38} src={nikeImg} />
            </div>
            <span>Fique por dentro dos lançamentos</span>
            <a href="#">  SNKRS.</a>
          </div>
        </div>
        <div>
          <div className={styled.slider}>
            <Image src={priceOfert} />
            <strong>OFERTAS</strong>
            <span>que preparamos especialmente para você.</span>
            <a href="#">Veja mais.</a>
          </div>
        </div>
        <div>
          <div className={styled.sliderBoxNike}>
            <div className={styled.boxNike}>
              <Image src={boxNike} />
            </div>
            <strong>FRETE GRÁTIS</strong>
            <span>para todo Brasil.</span>
            <a href="#">Saiba mais.</a>
          </div>
        </div>
      </Slider>
    </div>
  )
}