import fotoPerfil from './assets/foto_perfil.jpg'
export const App = () => {
    return (
        <div className="container">
            <div className="header">
                <h1 className="header-title">WEB DEVELOPER</h1>
                <div className="header-icons">
                    <div className="header-icon">
                        <i className="fa fa-instagram"></i>
                    </div>
                    <div className="header-icon">
                        <i className="fa fa-facebook"></i>
                    </div>
                    <div className="header-icon">
                        <i className="fa fa-linkedin"></i>
                    </div>
                </div>
            </div>
            <div className="content">
                <aside className="sidebar">
                    <img className="profile-img" src={ fotoPerfil } alt=""/>
                    muchas cosas
                </aside>
                <div className="details">
                    <div className="experience">
                        <h2 className="section-title">EXPERIENCE</h2>
                    </div>
                </div>
            </div>
        </div>

    );
}
