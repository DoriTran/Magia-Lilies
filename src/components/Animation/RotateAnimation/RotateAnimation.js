import { Animate } from "react-move";
import { easeExpOut } from "d3-ease";

const RotateAnimation = (props) => {
    return (         
        <Animate
            show={props.show}
            start={props.angel}
            update={{
                angel: [props.angel.angel],
                timing: { 
                    duration: props.duration, 
                    ease: props.ease === undefined ? easeExpOut : props.ease 
                }
            }}
        >
            {(data) => {
                return <div style={{
                            position: "fixed",
                            WebkitTransform: ` rotate(${data.angel}deg)`,
                            transform: ` rotate(${data.angel}deg)`,
                        }}>{props.children}</div>
            }}
        </Animate> 
    );
}
 
export default RotateAnimation;