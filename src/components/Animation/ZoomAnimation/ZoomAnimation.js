import { Animate } from "react-move";
import { easeExpOut } from "d3-ease";

const ZoomAnimation = (props) => {
    return ( 
        <Animate
            show={props.show}
            start={props.scale}
            update={{
                scale: [props.scale.scale],
                timing: { 
                    duration: props.duration, 
                    ease: props.ease === undefined ? easeExpOut : props.ease 
                }
            }}
        >
            {(data) => {
                return <div style={{
                    position: "fixed",
                    WebkitTransform: `scale(${data.scale})`,
                    transform: `scale(${data.scale})`
                }}>{props.children}</div>
            }}
        </Animate>
    );
}
 
export default ZoomAnimation;