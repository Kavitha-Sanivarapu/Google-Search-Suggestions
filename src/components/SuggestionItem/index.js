// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {itemDetails, onChangeInput} = props
  const {suggestion, key} = itemDetails

  const onChange = () => {
    onChangeInput(suggestion)
  }

  return (
    <li className={key}>
      <div className="list-container">
        <p>{suggestion}</p>
        <img
          className="arrow-icon"
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          onClick={onChange}
        />
      </div>
    </li>
  )
}

export default SuggestionItem
