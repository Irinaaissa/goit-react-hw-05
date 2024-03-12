import { Link } from "react-router-dom";

export default function NotFoundPage() {
    return(
        <div>
           <b> Ooops! Not found!</b>
           <Link to = "/" > Back tu home page !
           </Link>
        </div>
    )
    }