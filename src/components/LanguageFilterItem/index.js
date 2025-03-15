import './index.css'

const LanguageFilterItem = props => {
  const {isActive, languageDetails, updateActiveLanguageId} = props
  const {id, language} = languageDetails
  const btnClassName = isActive ? 'language-btn active' : 'language-btn'
  const onClickLanguageBtn = () => {
    updateActiveLanguageId(id)
  }
  return (
    <li className="language-item">
      <button
        type="button"
        className={btnClassName}
        onClick={onClickLanguageBtn}
      >
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
