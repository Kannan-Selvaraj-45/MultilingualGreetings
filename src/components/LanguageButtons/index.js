import './index.css'

const LanguageButtons = props => {
  const {
    languageGreetingsList,
    changeActiveButton,
    activeLanguageButton,
  } = props

  const onCLickButtonChange = id => {
    changeActiveButton(id)
  }

  return (
    <ul className="list-container">
      {languageGreetingsList.map(eachItem => (
        <li key={eachItem.id}>
          <button
            type="button"
            className={
              activeLanguageButton === eachItem.id
                ? 'button custom-button'
                : 'button'
            }
            onClick={() => {
              onCLickButtonChange(eachItem.id)
            }}
          >
            {eachItem.buttonText}
          </button>
        </li>
      ))}
    </ul>
  )
}

export default LanguageButtons
