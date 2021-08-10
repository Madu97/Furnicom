import React from 'react';
import tables from '../../Assets/Images/chair1.glb';




const Dviewer = () => {
    return (
            <div className="d-flex justify-content-center align-items-center">
                <model-viewer  class="model-viewer " src={tables} alt="A 3D model of an astronaut" ar ar-modes="webxr scene-viewer quick-look" environment-image="neutral" auto-rotate camera-controls></model-viewer>
            </div>
    );
}

export default Dviewer;
