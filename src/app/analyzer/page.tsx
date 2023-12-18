function Analyzer() {
    return (
        <div className="flex flex-col items-center">
            <h1 className="self-center text-center text-4xl font-extralight leading-snug text-black">
                Analyze the salary trends
            </h1>
            <div className="mt-6">
                <iframe
                    title="Salarease"
                    width="1140"
                    height="541.25"
                    src="https://app.powerbi.com/reportEmbed?reportId=4f1a6c9f-ffb9-4fe1-a90d-7fa0d78a4601&autoAuth=true&ctid=d7db1280-2d5b-498f-acb1-5d399b111f7f"
                    allowFullScreen={true}
                ></iframe>
            </div>                
        </div>
    );
}

export default Analyzer;
