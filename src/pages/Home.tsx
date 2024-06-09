import Background from '../assets/images/backgroundcar.jpg';

function Home() {
  return (
    <div
      style={{ 
        backgroundImage: `url(${Background})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textShadow: '2px 2px 4px rgba(0,0,0,0.7)' 
      }}
      className='home-container'>
      <h3 className='p-5 bg-white bg-opacity-50 text-black rounded'>Welcome to the Car Inventory Dashboard</h3>
    </div>
  );
}

export default Home;
