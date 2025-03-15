import {Component} from 'react'
import Loader from 'react-loader-spinner'

import './index.css'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

class GithubPopularRepos extends Component {
  state = {
    repoList: [],
    isLoading: true,
    activeLanguageId: languageFiltersData[0].id,
  }

  componentDidMount() {
    this.getRepositories()
  }

  updateFetchedData = repoDetails => ({
    id: repoDetails.id,
    name: repoDetails.name,
    avatarUrl: repoDetails.avatar_url,
    starsCount: repoDetails.stars_count,
    forksCount: repoDetails.forks_count,
    issuesCount: repoDetails.issues_count,
  })

  getRepositories = async () => {
    this.setState({isLoading: true})
    const {activeLanguageId} = this.state
    const apiUrl = `https://apis.ccbp.in/popular-repos?language=${activeLanguageId}`
    const response = await fetch(apiUrl)
    if (response.ok) {
      const data = await response.json()
      const fetchedAndUpdatedData = data.popular_repos.map(eachItem =>
        this.updateFetchedData(eachItem),
      )
      this.setState({repoList: fetchedAndUpdatedData, isLoading: false})
    } else {
      this.setState({repoList: [], isLoading: false})
    }
  }

  renderFailurePage = () => (
    <div className="failure-view">
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
        className="failure-view-image"
      />
      <h1 className="failure-view-msg">Something Went Wrong</h1>
    </div>
  )

  renderRepositories = () => {
    const {repoList} = this.state
    if (repoList.length === 0) {
      return this.renderFailurePage()
    }
    return (
      <ul className="repo-list">
        {repoList.map(eachRepo => (
          <RepositoryItem key={eachRepo.id} repoDetails={eachRepo} />
        ))}
      </ul>
    )
  }

  renderLoader = () => (
    <div data-testid="loader" className="repositories-loader-container">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  updateActiveLanguageId = activeLanguageId => {
    this.setState({activeLanguageId}, this.getRepositories)
  }

  render() {
    const {isLoading, activeLanguageId} = this.state
    return (
      <div className="bg-container">
        <h1 className="main-heading">Popular</h1>
        <ul className="language-list">
          {languageFiltersData.map(eachLanguage => (
            <LanguageFilterItem
              key={eachLanguage.id}
              isActive={eachLanguage.id === activeLanguageId}
              languageDetails={eachLanguage}
              updateActiveLanguageId={this.updateActiveLanguageId}
            />
          ))}
        </ul>
        {isLoading ? this.renderLoader() : this.renderRepositories()}
      </div>
    )
  }
}

export default GithubPopularRepos
