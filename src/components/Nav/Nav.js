import './Nav.css'
function Nav({students}) {
  return (
    <div className='nav'>
        <ul>
            <li>
                <p>Home</p>
            </li>
            <li>
                <p>Students ({students.length})</p>
            </li>
            <li>
                <p>New Student</p>
            </li>
        </ul>
    </div>
  )
}
export default Nav