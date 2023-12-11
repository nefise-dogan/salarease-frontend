import { Image } from "@nextui-org/react";

function About() {
    const team = [
        { name: "Nefise Emine Doğan", imageURL: "/nefo.jpg" },
        { name: "Derya Dolgun", imageURL: "/derya.jpeg" },
        { name: "Ayşe Gökçe Görgül", imageURL: "/ayse.jpeg" },
        { name: "Yasemin İnan", imageURL: "/yasemin.jpeg" },
        { name: "Bilal Koyun", imageURL: "/bilal.jpeg" },
        { name: "Özge Zengin", imageURL: "/ozge.jpeg" },
    ];

    return (
        <div className="flex flex-col">
            <h1 className="self-center text-center text-5xl font-light leading-snug text-black">
                Meet the <strong>team</strong>.
            </h1>
            <div className="self-center mt-2">
                <div className="flex items-center gap-8 justify-self-start px-20 py-4">
                    <p className="flex-1 text-center font-light">
                        At <strong className="font-bold">Salar</strong>Ease, we
                        believe that our team is our greatest asset. We are a
                        diverse group of passionate, innovative, and dedicated
                        individuals who come together{" "}
                        <i>
                            to improve fairness and transparency in salary
                            decision process.
                        </i>{" "}
                        We are excited to introduce you to the faces behind our
                        success.
                    </p>
                </div>
            </div>
            <div className="mt-2 grid grid-cols-3 gap-x-1 gap-y-10">
                {team.map(({ name, imageURL }) => (
                    <div
                        className="flex flex-col items-center text-center"
                        key={name}
                    >
                        <Image
                            className="mt-10 rounded-full"
                            src={imageURL}
                            alt={name}
                            width={200}
                            height={200}
                            isBlurred
                        />
                        <p className="mt-4 text-xl font-extralight">{name}</p>
                    </div>
                ))}
            </div>
            <h2 className="mt-12 self-center text-center text-4xl font-light leading-snug text-black">
                Project Insights
            </h2>
            <div className="self-center">
                <div className="flex flex-col items-center gap-8 justify-self-start px-20">
                    <Image
                        className="mt-10 rounded-full"
                        src="./boun.svg"
                        alt="Boğaziçi University"
                        width={200}
                        height={200}
                        isBlurred
                    />
                    <p className="flex-1 text-center font-light">
                        This project was developed as part of MIS463 - Decision
                        Support System at Boğaziçi University. It encompasses
                        several intricate layers including data processing,
                        analysis, and visualization. Additionally, it involves
                        the creation of a predictive model through the
                        application of machine learning techniques. The project
                        also features a web application and a backend service,
                        which seamlessly integrate all these components.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;
