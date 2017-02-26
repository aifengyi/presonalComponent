import React from 'react';
import styles from './banner.scss';
import {Motion, spring} from 'react-motion';

export default class Banner extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state={
    	index: 1,
    	showArrow: false,
    }
  }

  _moveLeft() {
  	let index = this.state.index<1?8:index-1;
  	this.setState({index:index});
  }

  _moveRight() {
  	let index = this.state.index>7?2:this.state.index+1;
  	this.setState({index: index});
  }

  _chooseImg() {}

  _stopAutoplayAndShowArrow() {
  	this.setState({showArrow: true});
  }

  _continueAutoplayAndhideArrow() {
  	this.setState({showArrow: false});
  }
// onMouseOut={this._continueAutoplayAndhideArrow.bind(this)}
  render() {
  	const {index} = this.state;
    return (
		<div className={styles.banner} 
		onMouseOver={this._stopAutoplayAndShowArrow.bind(this)} 
		
		>
			<Motion 
			style={{marginLeft: spring(0-index*625)}}>
			{container=>
				<ul className={styles.banner_ul} style={container}>
				  <li><a href="">
				      <img src={require("../../assets/banner/f65a5391082c6812df227564c81a765edf2a8c67.jpg")} />
				    </a></li>    
				  <li><a href="">
				      <img src={require("../../assets/banner/95e74db9f5e7898e48f999528cbb7a63055ec3cd.png")} />
				    </a></li>
				  <li><a href="">
				      <img src={require("../../assets/banner/74124584ff88289099937c7ea70bc8be3f162d5a.jpg")} />
				    </a></li>
				  <li><a href="">
				      <img src={require("../../assets/banner/f174deac0acab1c383d95d5870bdf244a34796e0.jpg")} />
				    </a></li>
				  <li><a href="">
				      <img src={require("../../assets/banner/22735b1901d40290353d47af63a4d1ab1d2e3b27.jpg")} />
				    </a></li>
				  <li><a href="">
				      <img src={require("../../assets/banner/dcc46ceef44b1df38b934c68043e43b1dd7d6f4d.jpg")} />
				    </a></li>
				  <li><a href="">
				      <img src={require("../../assets/banner/259a36ccbca577c3064c68ab3c0f1834d77456d7.png")} />
				    </a></li>
				  <li><a href="">
				      <img src={require("../../assets/banner/f65a5391082c6812df227564c81a765edf2a8c67.jpg")} />
				    </a></li>
				  <li><a href="">
				      <img src={require("../../assets/banner/95e74db9f5e7898e48f999528cbb7a63055ec3cd.png")} />
				    </a></li>        
				</ul>
			}
			</Motion>
			{this.state.showArrow?(
				<div>
				<div 
				className={`${styles.banner_lt} ${styles.banner_arrow}`} 
				onClick={this._moveLeft.bind(this)}
				onMouseOver={()=>this.setState({showArrow:true})}
				>&lt</div>
				<div className={`${styles.banner_gt} ${styles.banner_arrow}`} 
				onClick={this._moveRight.bind(this)}
				onMouseOver={()=>this.setState({showArrow:true})}
				>&gt</div>
				</div>
				):null
			}
			<div className={styles.banner_chooseBlock}>
			  <ul>
			    <li onClick={this._chooseImg.bind(this)}></li>
			    <li onClick={this._chooseImg.bind(this)}></li>
			    <li onClick={this._chooseImg.bind(this)}></li>
			    <li onClick={this._chooseImg.bind(this)}></li>
			    <li onClick={this._chooseImg.bind(this)}></li>
			    <li onClick={this._chooseImg.bind(this)}></li>
			    <li onClick={this._chooseImg.bind(this)}></li>
			  </ul>
			</div>
		</div>
    );
  }
}


        // <Motion style={{x: spring(this.state.open ? 400 : 0)}}>
        //   {({x}) =>
        //     // children is a callback which should accept the current value of
        //     // `style`
        //     <div className="demo0">
        //       <div className="demo0-block" style={{
        //         WebkitTransform: `translate3d(${x}px, 0, 0)`,
        //         transform: `translate3d(${x}px, 0, 0)`,
        //       }} />
        //     </div>
        //   }
        // </Motion>



// import React from 'react';
// import {Motion, spring} from '../../src/react-motion';

// const springSettings = {stiffness: 170, damping: 26};
// const NEXT = 'show-next';

// const Demo = React.createClass({
//   getInitialState() {
//     return {
//       photos: [[500, 350], [800, 600], [800, 400], [700, 500], [200, 650], [600, 600]],
//       currPhoto: 0,
//     };
//   },

//   handleChange({target: {value}}) {
//     this.setState({currPhoto: value});
//   },

//   clickHandler(btn){
//     var photoIndex = btn === NEXT ? this.state.currPhoto+1 : this.state.currPhoto-1;

//     photoIndex = photoIndex >= 0 ? photoIndex : this.state.photos.length - 1;
//     photoIndex = photoIndex >= this.state.photos.length ? 0 : photoIndex;

//     this.setState({
//       currPhoto: photoIndex
//     })
//   },

//   render() {
//     const {photos, currPhoto} = this.state;
//     const [currWidth, currHeight] = photos[currPhoto];

//     const widths = photos.map(([origW, origH]) => currHeight / origH * origW);

//     const leftStartCoords = widths
//       .slice(0, currPhoto)
//       .reduce((sum, width) => sum - width, 0);

//     let configs = [];
//     photos.reduce((prevLeft, [origW, origH], i) => {
//       configs.push({
//         left: spring(prevLeft, springSettings),
//         height: spring(currHeight, springSettings),
//         width: spring(widths[i], springSettings),
//       });
//       return prevLeft + widths[i];
//     }, leftStartCoords);

//     return (
//       <div>
//         <div>Scroll Me</div>
//         <button onClick={this.clickHandler.bind(null, '')}>Previous</button>
//         <input
//           type="range"
//           min={0}
//           max={photos.length - 1}
//           value={currPhoto}
//           onChange={this.handleChange} />
//         <button onClick={this.clickHandler.bind(null, NEXT)}>Next</button>
//         <div className="demo4">
//           <Motion style={{height: spring(currHeight), width: spring(currWidth)}}>
//             {container =>
//               <div className="demo4-inner" style={container}>
//                 {configs.map((style, i) =>
//                   <Motion key={i} style={style}>
//                     {style =>
//                       <img className="demo4-photo" src={`./${i}.jpg`} style={style} />
//                     }
//                   </Motion>
//                 )}
//               </div>
//             }
//           </Motion>
//         </div>
//       </div>
//     );
//   },
// });