import './index.css'

const TabItem = props => {
  const {details, checkClickedImg} = props
  const {imageUrl, thumbnailUrl} = details

  const clickImage = () => {
    checkClickedImg(imageUrl)
  }

  return (
    <li className="list-item">
      <button className="button-img" type="button">
        <img
          className="thumbnail"
          src={thumbnailUrl}
          alt="thumbnail"
          onClick={clickImage}
        />
      </button>
    </li>
  )
}

export default TabItem
