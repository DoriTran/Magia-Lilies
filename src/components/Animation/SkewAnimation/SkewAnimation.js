import { Animate } from "react-move";
import { easeExpOut } from "d3-ease";

const SkewAnimation = (props) => {
    return ( 
        <Animate
            show={props.show}
            start={props.skew}
            update={{
                xAngel: [props.skew.xAngel],
                yAngel: [props.skew.yAngel],
                timing: { 
                    duration: props.duration, 
                    ease: props.ease === undefined ? easeExpOut : props.ease 
                }
            }}
        >
            {(data) => {
                return <div style={{
                    position: "fixed",
                    WebkitTransform: `skew(${data.xAngel}deg, ${data.yAngel}deg)`,
                    transform: `skew(${data.xAngel}deg, ${data.yAngel}deg)`,
                }}>{props.children}</div>
            }}
        </Animate>
    );
}
 
export default SkewAnimation;