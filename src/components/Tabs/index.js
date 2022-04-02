import './index.css'

const Tabs = props => {
  const {details, isActive, clickTabToActive} = props
  const {displayText, tabId} = details

  const tabClicked = () => {
    clickTabToActive(tabId)
  }

  const tabClass = isActive ? 'tab-button active' : 'tab-button'

  return (
    <li className="tab-item">
      <button className={tabClass} type="button" onClick={tabClicked}>
        {displayText}
      </button>
    </li>
  )
}

export default Tabs
