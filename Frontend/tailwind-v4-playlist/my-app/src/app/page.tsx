import Container from './components/container';
import Hero from './components/hero';
import Navbar from './components/navbar';

const page = () => {
  return (
    <div className='layout'>
      <Container>
        <Navbar />
        <Hero />
      </Container>
    </div>
  );
};
export default page;
