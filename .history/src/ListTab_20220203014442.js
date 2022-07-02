// Composition Example ------
function ListTab(props) {
  return (
    <li className="nav-item" role="presentation">
      {props.children}
    </li>
  )
}

export default ListTab;