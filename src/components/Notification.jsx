
import { AiOutlineCheck, AiOutlineInfoCircle, AiOutlineWarning } from "react-icons/ai";
import "../css/notification.css"
import { MdErrorOutline } from "react-icons/md";

const Notification = ({ info }) => {

    const icons = {
        success: <AiOutlineCheck />,
        error: <MdErrorOutline />,
        warning: <AiOutlineWarning />,
        information: <AiOutlineInfoCircle />
    }
    return (
        <>
            <div className={`notification ${info}`}>
                <span>{icons[info]}</span>
                <span>{info}</span>
            </div>
        </>
    )
}

export default Notification;