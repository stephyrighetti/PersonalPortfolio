import Image from "next/image"
import Link from 'next/link'
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const Scroll = ({ targetRef }) => {

    const handleClick = () => {
        targetRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      };

    return (
        <div className="scroll-container">
            <ScrollLink href="#about-me">
                    <p>Scroll</p>
                    <Image src="/scroll.png" onClick={handleClick} width={15} height={34} className="scroll-icon" alt="Scroll icon"/>
            </ScrollLink>
        </div>
    )
}

export default Scroll