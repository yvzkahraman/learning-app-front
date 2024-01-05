import { Link } from "react-router-dom";
import { observer } from "mobx-react";
import { basketStore } from "../stores/BasketStore";

const Navbar = observer(() => {
    return <>
        <nav className="navbar navbar-expand-lg bg-light" data-bs-theme="light">
            <div className="container">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarColor03">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">

                            <Link className="nav-link" to={""}>Courses</Link>

                        </li>

                        <li className="nav-item">

                            <Link class="nav-link position-relative">
                                Basket
                                <span class="position-absolute top-1 start-100 translate-middle badge rounded-pill bg-danger">
                                    {basketStore.basketList.length}

                                </span>
                            </Link>
                        </li>




                        <li className="nav-item">
                            <Link className="nav-link ms-3" to={""}>Signin </Link>

                        </li>

                    </ul>

                </div>
            </div>
        </nav>

    </>
})

export default Navbar;