In this project, I have built a **Github Popular Repos** by applying the concepts I have learned till now.

### Output is as per the images below:

 <br/>
 <div style="text-align: center;">
     <img src="https://assets.ccbp.in/frontend/content/react-js/github-popular-repos-output.gif" alt="github popular repos output" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
 </div>
 <br/>

**Failure View**

 <div style="text-align: center;">
     <img src="https://assets.ccbp.in/frontend/content/react-js/github-popular-repos-error-view-output.gif" alt="github popular repos failure view output" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
 </div>
 <br/>
 

### Completed Instructions

<details>
<summary>Functionality added</summary>
<br/>

The app has the following functionalities

- When the app is opened initially,

  - An HTTP GET request is made to **githubReposApiUrl** with query parameter as `language` and its initial value as `ALL`
  - **_loader_** is displayed while fetching the data
  - After the data is fetched successfully, it displays the repositories list received in the response

- When a language filter is active

  - An HTTP GET request is made to the above-mentioned URL with the `id` of the active language
  - **_loader_** is displayed while fetching the data
  - After the data is fetched successfully, it displays the repositories list received in the response

- The `GithubPopularRepos` component is provided with `languageFiltersData`. It consists of a list of language filter objects with the following properties in each language filter object

  |   Key    | Data Type |
  | :------: | :-------: |
  |    id    |  String   |
  | language |  String   |

</details>

<details>

<summary>API Requests & Responses</summary>
<br>

**githubReposApiUrl**

#### API: `https://apis.ccbp.in/popular-repos`

#### Example: `https://apis.ccbp.in/popular-repos?language=ALL`

#### Method: `GET`

#### Description:

Returns a response containing the list of repositories

#### Response

```json
{
  "popular_repos": [
    {
	  "name": "freeCodeCamp",
      "id": 28457823,
      "issues_count": 154,
      "forks_count": 26651,
      "stars_count": 331304,
      "avatar_url": "https://avatars.githubusercontent.com/u/9892522?v=4"
    },
      ...
  ],
}
```

</details>

<details>
<summary>Components Structure</summary>

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/github-popular-repos-component-breakdown-structure.png" alt="component-breakdown-structure" style="max-width:100%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

</details>

<details>
<summary>Implemented Files</summary>
<br/>

Uses these files to complete the implementation:

- `src/components/GithubPopularRepos/index.js`
- `src/components/GithubPopularRepos/index.css`
- `src/components/LanguageFilterItem/index.js`
- `src/components/LanguageFilterItem/index.css`
- `src/components/RepositoryItem/index.js`
- `src/components/RepositoryItem/index.css`
</details>

### Resources

<details>
<summary>Image URLs</summary>

- [https://assets.ccbp.in/frontend/react-js/stars-count-img.png](https://assets.ccbp.in/frontend/react-js/stars-count-img.png) alt is **stars**
- [https://assets.ccbp.in/frontend/react-js/forks-count-img.png](https://assets.ccbp.in/frontend/react-js/forks-count-img.png) alt is **forks**
- [https://assets.ccbp.in/frontend/react-js/issues-count-img.png](https://assets.ccbp.in/frontend/react-js/issues-count-img.png) alt is **open issues**
- [https://assets.ccbp.in/frontend/react-js/api-failure-view.png](https://assets.ccbp.in/frontend/react-js/api-failure-view.png) alt is **failure view**

</details>

<details>
<summary>Colors</summary>

<br/>

<div style="background-color: #0284c7; width: 150px; padding: 10px; color: white">Hex: #0284c7</div>
<div style="background-color: #ffffff; width: 150px; padding: 10px; color: black">Hex: #ffffff</div>
<div style="background-color: #0f172a; width: 150px; padding: 10px; color: white">Hex: #0f172a</div>
<div style="background-color: #f8f8ff; width: 150px; padding: 10px; color: black">Hex: #f8f8ff</div>
<div style="background-color: #e73959; width: 150px; padding: 10px; color: white">Hex: #e73959</div>
<div style="background-color: #1e293b; width: 150px; padding: 10px; color: white">Hex: #1e293b</div>

</details>

<details>
<summary>Font-families</summary>

- Roboto
- Lobster

</details>

### Conclusion
- This project allowed me to build a GitHub Popular Repos app, showcasing repositories with filters and API integration, enhancing my React skills 🚀✨. It was a great hands-on experience in building dynamic, user-friendly web apps! 🌐🔧
- Check it out here: https://githubLikedRepo.ccbp.tech
