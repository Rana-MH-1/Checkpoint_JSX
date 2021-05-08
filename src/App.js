import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import './App.css';
import image2 from './image2.jpg';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

function App() {
  return (
<div className='jsxfile'> 
<Navbar bg="light" variant="light">
    <Navbar.Brand href="#home">All About Animals</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home"></Nav.Link>
      <Nav.Link href="#features" style={{color:'#007bff'}}>Harfang des neiges</Nav.Link>
      
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-primary">Search</Button>
    </Form>
  </Navbar>
    <h1 className="title blue">Harfang des neiges</h1>
    <br />
    <div className='imageContainer'>
      <img src={image2} alt='image2'/>
      <p className='paragraph'>This large white bird with yellow eyes is very recognizable. The male is pure white while the female and the young are lightly spotted or barred with brown. Their plumage turns white with age, causing males to turn immaculate white. In summer, the plumage is darker than in winter, the plumage is whiter in winter, which allows them to hide in the snow. Males are generally smaller than females. Their wingspan is 170 to 177 cm for adult females and 160 to 170 cm for adult males. Their mass varies from 1 to 2.5 kg.</p>
    </div>
      <br />
    <div className='imagecontainer2'>
      <img src="/image1.jpg" alt='image1' />
      <p className='paragraph'>The owl is a very large bird, reaching up to 70 cm in length. His eyes are very large in proportion to his size: indeed, they are about the same size as a man's. They are yellow in color and arranged forward. In addition, they are fixed, which forces the owl to often have to turn its large, flattened head in order to be able to look around it (it can turn it through an angle of 270 °). The owl's natural environment is the Far North: the arctic tundra. The species is found in several countries, such as Canada, Russia, Norway, Finland, Sweden, Denmark (Greenland), as well as in the state of Alaska in the United States.</p>
    </div>
    
  
  <br/>
  <div className='style'>
    <p style={{textAlign:'center'}}>The video below showcases the different characteristics of the animal<br/>
    For more informations <a href='https://fr.wikipedia.org/wiki/Harfang_des_neiges#:~:text=Le%20Harfang%20des%20neiges%20(Bubo,que%20les%20hiboux%20grand%2Dducs.'>Click here</a></p>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/9R_kOBRWkTA" 
    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen></iframe>
  </div>
      
</div>
  );
}

export default App;
