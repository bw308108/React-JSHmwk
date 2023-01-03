import React from 'react'

const Searchbox1 = () => {
  return (
    <div className='searchBox'>
    <p>Search for prior blog post</p>
    <input
      className="inputField"
      type="search"
      placeholder="Search Blog Post"
    ></input>
    <button className='Button'>Search</button>
  </div>
  )
  }
export default Searchbox1


// class Searchbox extends Component {
//     constructor() {
//         super ();
//         this.state = {
//             search_string : ''
//         }
//     }

//     onSearchChange = (event) => {
//         const search_string = event.target.value

//         this.setState(() => {
//             return (
//                 {
//                     search_string: search_string 
//                 }
//             )
//         })
//     }

//   render() {



//     return (
//       <div>
//         <input
//           className="search-box"
//           type="search"
//           placeholder="Search Blog Post"
//         ></input>
//       </div>
//     );
//   }
//
