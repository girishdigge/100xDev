import Container from './components/container';
import Navbar from './components/navbar';

const page = () => {
  return (
    <div className='layout'>
      <Container>
        <Navbar />
      </Container>
    </div>
  );
};
export default page;
