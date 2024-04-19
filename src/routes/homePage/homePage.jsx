import SearchBar from '../../components/searchBar/SearchBar'
import './homePage.scss'

function Home(){
  return (
    <div className='homePage'>
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">
            Find Real State & Get Your Dream Place
          </h1>
          <p>
          The sun gently dipped below the horizon, casting a warm glow over the tranquil meadow. As evening descended, a soft breeze whispered through the tall grass, carrying with it the scent of wildflowers. 
          </p>
          <SearchBar/>
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>1200+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  )
}

export default Home