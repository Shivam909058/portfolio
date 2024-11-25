import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();
  
  return (
    <Html
      as='div'
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.7)'
      }}
    >
      <span className='canvas-loader'></span>
      <p
        style={{
          fontSize: 14,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progress.toFixed(2)}%
      </p>
      {progress === 100 && (
        <p style={{ color: "#F1F1F1", marginTop: 10 }}>
          If model doesn't appear, please refresh the page
        </p>
      )}
    </Html>
  );
};

export default CanvasLoader;
