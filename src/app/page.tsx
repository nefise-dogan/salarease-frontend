import { Button, Image } from "@nextui-org/react";

import Link from "next/link";

const ARROW = "-->";

function Home() {
    return (
        <div className="flex flex-col">
            <h1 className="max-w-4xl self-center text-center text-5xl font-light leading-snug text-black">
                Make Informed Career Moves with{" "}
                <span className="font-bold">Salar</span>Ease - Your Salary Guide
            </h1>
            <p className="mt-8 max-w-3xl self-center text-center text-xl font-light text-black">
                <span className="font-bold">Salar</span>Ease caters to both
                professionals seeking salary clarity and hiring managers needing
                market insights. Its refined compensation estimator and detailed
                salary analysis, adjustable by location, title, and experience,
                aid in smart career decisions and informed, fair hiring
                practices.
            </p>
            <div className="mt-12 flex justify-center gap-4">
                <Button
                    as={Link}
                    href="/salary-predictor"
                    color="primary"
                    className=" text-white"
                >
                    Find Your Salary
                </Button>
                <Button
                    as={Link}
                    href="/analyzer"
                    color="primary"
                    variant="light"
                >
                    View Analysis {ARROW}
                </Button>
            </div>
            <div className="mt-16 flex w-full justify-around">
                <div className="flex flex-col items-center text-center">
                    <Image
                        className="mt-10 w-full"
                        src="/screenshot-input.png"
                        alt="Screenshot Input"
                        width={300}
                        height={300}
                        isBlurred
                    />
                    <p className="mt-4 font-extralight">
                        Choose your status: job-seeking or hiring.
                    </p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <Image
                        className="mt-0"
                        src="/screenshot-processing.png"
                        alt="Screenshot Processing"
                        width={300}
                        height={300}
                        isBlurred
                    />
                    <p className="mt-4 font-extralight">
                        Allow the system to analyze your entered data
                    </p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <Image
                        className="mt-10"
                        src="/screenshot-report.png"
                        alt="Screenshot Report"
                        width={300}
                        height={300}
                        isBlurred
                    />
                    <p className="mt-4 font-extralight">
                        Access the outcome for tailored salary insights.
                    </p>
                </div>
            </div>
            <div className="mt-24">
                <div className="flex max-w-4xl items-center gap-8 justify-self-start rounded-lg p-6 shadow-lg">
                    <div className="align-center flex w-40 flex-col">
                        <Image
                            src="/logo-gartner.png"
                            alt="Logo gartner"
                            isBlurred
                        />
                        <p className="mt-4 text-center text-sm">
                            <span className="font-bold">Carolina Valencia</span>
                            <br /> Gartner vice president of HR practices
                        </p>
                    </div>
                    <div className="flex flex-1 flex-col">
                        <p className="text-center font-light">
                            Early findings from our pilot experiment show total
                            rewards leaders spend significant time and effort
                            trying to get their managers to make better
                            decisions with minimal improvement to employees’
                            perceptions of pay fairness. Rather than spending
                            that time to get a small boost from managers, total
                            rewards should leverage machines for pay decisions.
                            <br />
                            <br />
                        </p>
                        <a
                            className="mt-4 text-blue-500 self-end"
                            href="https://emt.gartnerweb.com/ngw/globalassets/en/human-resources/documents/should_machines_make_pay_decisions.pdf"
                            target="_blank"
                        >
                            Read the full article {ARROW}
                        </a>
                    </div>
                </div>
            </div>
            <div className="mt-12 self-end">
                <div className="flex max-w-4xl flex-row-reverse items-center gap-8 justify-self-start rounded-lg p-6 shadow-lg">
                    <div className="align-center flex w-40 flex-col">
                        <Image
                            src="/avatar-female.png"
                            alt="Avatar Female"
                            isBlurred
                        />
                        <p className="mt-4 text-center text-sm">
                            <span className="font-bold">Aigul Isataeva</span>
                            <br /> HR manager
                        </p>
                    </div>
                    <p className="flex-1 text-center font-light">
                        As an HR manager, SalarEase is a game-changer for me. It
                        provides precise salary benchmarks, helping me make fair
                        and competitive offers quickly. Its intuitive design
                        simplifies complex salary data, letting me focus on
                        recruiting the best talent.
                    </p>
                </div>
            </div>
            <div className="mt-12">
                <div className="flex max-w-4xl items-center gap-8 justify-self-start rounded-lg p-6 shadow-lg">
                    <div className="align-center flex w-40 flex-col">
                        <Image
                            src="/avatar-male.png"
                            alt="Avatar Male"
                            isBlurred
                        />
                        <p className="mt-4 text-center text-sm">
                            <span className="font-bold">Oğuzhan Çevik</span>
                            <br /> Computer Engineering New Grad
                        </p>
                    </div>
                    <p className="flex-1 text-center font-light">
                        Graduating in computer engineering, I was unsure about
                        salary expectations in tech. SalarEase was a
                        game-changer, offering clear, tailored salary insights
                        based on my profile and the job market. It boosted my
                        confidence in negotiations and made evaluating job
                        offers much simpler!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Home;
