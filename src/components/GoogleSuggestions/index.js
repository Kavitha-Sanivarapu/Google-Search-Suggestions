// Write your code here
import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem/index'

class GoogleSuggestions extends Component {
  constructor(props) {
    super(props)

    const {suggestionsList} = props
    this.state = {
      searchInput: '',
      suggestionsList1: suggestionsList,
    }
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  onChangeInput = suggestion => {
    this.setState({
      searchInput: suggestion,
    })
  }

  render() {
    const {searchInput, suggestionsList1} = this.state
    const searchResults = suggestionsList1.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(searchInput),
    )

    return (
      <div className="app-container">
        <img
          className="title"
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
        />
        <div className="card-container">
          <div className="input-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search-icon"
            />
            <input
              type="search"
              onChange={this.onChangeSearchInput}
              value={searchInput}
              className="input-styles"
              placeholder="Search Goggle"
            />
          </div>
          <ul className="list-container">
            {searchResults.map(eachItem => (
              <SuggestionItem
                itemDetails={eachItem}
                key={eachItem.id}
                onChangeInput={this.onChangeInput}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
