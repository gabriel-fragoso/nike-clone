import Content from "../components/Home/Content";
import Footer from "../components/Home/Footer";
import Header from "../components/Home/Header";
import Nav from "../components/Home/Nav";
import Promotion from "../components/Home/Promotion";
import Section from "../components/Home/Section";


export default function Home() {
  return (
    <div className='app'>
      <Nav />
      <Header />
      <Promotion />
      <Content />
      <Section />
      <Footer />
    </div>
  )
}