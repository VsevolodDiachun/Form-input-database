import FeedBack from './Component/widgets/feedBack/feedBack';
import HomeSvgSelector from './Component/widgets/HomeSvgSelector/HomeSvgSelector';
// import './ReachOutToUs.css';

import './App.css';

function App() {
  return (
    <div>
      <div className='feedback'>
            <HomeSvgSelector/>
            <FeedBack/>
        </div>
    </div>
  );
}

export default App;
