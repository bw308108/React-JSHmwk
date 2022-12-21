import React, { Component } from "react"

export default class Searchbox extends Component {
    constructor() {
        super ();
        this.state = {
            search_string : ''
        }
    }

    onSearchChange = (event) => {
        const search_string = event.target.value

        this.setState(() => {
            return (
                {
                    search_string: search_string 
                }
            )
        })
    }

  render() {



    return (
      <div>
        <input
          className="search-box"
          type="search"
          placeholder="Search Blog Post"
        ></input>
      </div>
    );
  }
}
