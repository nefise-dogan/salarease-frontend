function Analyzer() {
    return (
        <div className="flex flex-col items-center">
            <h1 className="self-center text-center text-4xl font-extralight leading-snug text-black">
                Analyze the salary trends
            </h1>
            <p className="mt-8">Here is our analyzer demo with PowerBI. Contact us for more information.</p>
            <video className="mt-8" controls width="80%">
                <source src="/demo.mp4" type="video/mp4" />
            </video>
        </div>
    );
}

export default Analyzer;
