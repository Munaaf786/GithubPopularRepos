import './index.css'

const RepositoryItem = props => {
  const {repoDetails} = props
  const {name, avatarUrl, starsCount, forksCount, issuesCount} = repoDetails
  return (
    <li className="repo-item">
      <img src={avatarUrl} alt={name} className="avatar" />
      <h1 className="name">{name}</h1>
      <div className="count-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          alt="stars"
          className="images"
        />
        <p className="count">{starsCount} stars</p>
      </div>
      <div className="count-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          alt="forks"
          className="images"
        />
        <p className="count">{forksCount} forks</p>
      </div>
      <div className="count-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt="open issues"
          className="images"
        />
        <p className="count">{issuesCount} open issues</p>
      </div>
    </li>
  )
}

export default RepositoryItem
