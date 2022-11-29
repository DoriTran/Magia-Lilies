import { Animate } from "react-move";
import { easeExpOut } from "d3-ease";

const MoveAnimation = (props) => {
    return ( 
        <Animate
            show={props.show}
            start={props.position}
            update={{
                x: [props.position.x],
                y: [props.position.y],
                timing: { 
                    duration: props.duration, 
                    ease: props.ease === undefined ? easeExpOut : props.ease 
                }
            }}
        >
            {(data) => {
                return <div style={{
                            position: "fixed",
                            WebkitTransform: ` translate3d(${data.x}px, ${data.y}px, 0)`,
                            transform: ` translate3d(${data.x}px, ${data.y}px, 0)`,
                        }}>{props.children}</div>
            }}
        </Animate>
    );
}
 
export default MoveAnimation;