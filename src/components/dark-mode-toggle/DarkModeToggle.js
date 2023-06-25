import './dark-mode-toggle.css'

const DarkModeToggle = ({checked, onChange}) => {
  return (
    <label className="switch">
        <input type="checkbox" checked={checked} onChange={onChange}/>
        <span className="slider round"></span>
    </label>
  )
}

export default DarkModeToggle