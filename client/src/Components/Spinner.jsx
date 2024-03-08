import CircleLoader from "react-spinners/CircleLoader";

const override = {
    display: "block",
    margin: "0 auto",
    marginTop: '10%',
    marginBottom: '10%',
};

function App() {

    return (
        <div className="sweet-loading my-20 h-screen flex-col justify-center items-center">

            <CircleLoader
                color='#3BEDC9'
                cssOverride={override}
                size={300}
                aria-label="Loading Spinner"
                data-testid="loader"
                speedMultiplier= '1.5'
            />
            <h1 className="text-[#3BEDC9] text-2xl font-semibold italic text-center my-20">Scouring the web to handpick top-notch articles just for you . . . </h1>

        </div>
    );
}

export default App;