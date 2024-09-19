import {Component} from 'react'
import LanguageButtons from './components/LanguageButtons'
import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class App extends Component {
  state = {
    activeLanguageButton: languageGreetingsList[0].id,
  }

  renderLanguageResult = () => {
    const {activeLanguageButton} = this.state
    const findActiveLanguage = languageGreetingsList.find(
      eachItem => eachItem.id === activeLanguageButton,
    )
    return (
      <img
        className="img"
        src={findActiveLanguage.imageUrl}
        alt={findActiveLanguage.imageAltText}
      />
    )
  }

  changeActiveButton = id => {
    this.setState({activeLanguageButton: id})
  }

  render() {
    const {activeLanguageButton} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Multilingual Greetings</h1>
        <div>
          <LanguageButtons
            languageGreetingsList={languageGreetingsList}
            changeActiveButton={this.changeActiveButton}
            activeLanguageButton={activeLanguageButton}
          />
        </div>
        <div className="container">{this.renderLanguageResult()}</div>
      </div>
    )
  }
}

export default App
