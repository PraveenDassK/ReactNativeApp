import React, {PixelRatio, useRef, useWindowDimensions} from 'react';
// Image quality options
import YotiFaceCapture, {
    IMAGE_QUALITY_LOW,
    IMAGE_QUALITY_MEDIUM,
    IMAGE_QUALITY_HIGH
} from "react-native-yoti-face-capture";

const yoti = () => {
    const yotiFaceCaptureRef = useRef(null);
    const windowHeight = useWindowDimensions().height;
    const windowWidth = useWindowDimensions().width;

    // You can then control the camera and analysis using the ref

    // Start the camera
    // yotiFaceCaptureRef.current.startCamera()

    // Start the analysis (having started the camera)
    // yotiFaceCaptureRef.current.startAnalysis()

    // Stop the analysis
    // yotiFaceCaptureRef.current.stopAnalysis()

    // Stop the camera
    // yotiFaceCaptureRef.current.stopCamera()

    return (
        <YotiFaceCapture
            imageQuality={IMAGE_QUALITY_MEDIUM}
            ref={YotiFaceCaptureRef}
            requireEyesOpen={false}
            requiredStableFrames={3}
            requireValidAngle
            requireBrightEnvironment
            faceCenter={[
                0.5,
                0.5
            ]}
            onFaceCaptureAnalyzedImage={({nativeEvent: analysis}) => {
                // analysis.croppedImage
                // analysis.croppedFaceBoundingBox
                // analysis.faceBoundingBox
                // analysis.originalImage
            }}
            onFaceCaptureImageAnalysisFailed={({nativeEvent: failure}) => {
                // failure.cause
                // failure.originalImage
            }}
            onFaceCaptureStateChanged={({nativeEvent: state}) => {
                // state may either be 'Analyzing', 'CameraReady' or 'CameraStopped'
            }}
            onFaceCaptureStateFailed={({nativeEvent: failure}) => {
                // failure may either be 'CameraInitializationError' or 'MissingPermissions'
            }}
        />
    )
}

export default yoti