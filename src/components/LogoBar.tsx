import pd from '../assets/Vector.svg'


export const LogoBar = () => {

    return (
        <div className="container">
         <img src={pd} alt='logo' className="pd-logo logo"   />
         <div className="text-container">
        <span className="large-text">ProductDock</span>
        <span className="small-text">Library</span>
      </div>
    </div>
    )
}