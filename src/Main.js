import App from './App';
import './Main.css';

const Main = () =>
<main>
    <>
        <div className="welcoming">
            <img className="welcoming-img" src="coffee.png" alt="Coffee" title="Coffee" /> 
            <p>Welcome to</p>
            <h2>Business Casual</h2>
            <hr />
        </div>
        <div className='intro'>
            <h3>BUILD A WEBSITE WORTH VISITING</h3>
            <hr />
        </div>

        <div className='text'>
            <img className="intro-img" src="coffee-2.png" alt="Coffee" title="Coffee" />
            <p>The boxes used in this template are nested inbetween a normal Bootstrap row and the start of your column layout. 
                    The boxes will be full-width boxes, so if you want to make them smaller then you will need to customize.</p>
            <p>A huge thanks to Death to the Stock Photo for allowing us to use the beautiful photos that make this template really come to life. 
                    When using this template, make sure your photos are decent. Also make sure that the file size on your photos is kept to a minumum to 
                    keep load times to a minimum.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat diam quis nisl vestibulum dignissim. In hac habitasse platea dictumst. 
                    Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
            <hr />
        </div>
            
        <div className="intro">
            <h3>BEAUTIFUL BOXES TO SHOWCASE YOUR CONTENT</h3>
            <hr />
        </div>
        <div className="text">
            <p>Use as many boxes as you like, and put anything you want in them! They are great for just about anything, the sky's the limit!</p> 
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat diam quis nisl vestibulum dignissim. In hac habitasse platea dictumst. 
            Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
        </div>
    </>
</main>

export default Main;