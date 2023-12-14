/* eslint-disable no-unused-vars */
"use client";

import { useEffect, useState } from "react";
import {
    Select,
    SelectItem,
    Input,
    Button,
    Slider,
    Image,
} from "@nextui-org/react";
import { calculateSalary } from "../../utils/calculate-salary";

enum Profile {
    JobSeeker = "jobSeeker",
    Hiring = "hiring",
}

const TITLES = [
    "Product Manager",
    "Software Engineer",
    "Software Engineering Manager",
    "Data Scientist",
    "Solution Architect",
    "Technical Program Manager",
    "Human Resources",
    "Product Designer",
    "Marketing",
    "Business Analyst",
    "Hardware Engineer",
    "Sales",
    "Recruiter",
    "Mechanical Engineer",
    "Management Consultant",
];

const COUNTRIES = [
    "USA",
    "United Kingdom",
    "Ireland",
    "India",
    "Belarus",
    "Canada",
    "Russia",
    "Netherlands",
    "Switzerland",
    "Singapore",
    "Germany",
    "Japan",
    "Sweden",
    "Australia",
    "United States",
    "Israel",
    "Poland",
    "China",
    "Austria",
    "Luxembourg",
    "Czech Republic",
    "France",
    "Pakistan",
    "New Zealand",
    "Denmark",
    "Hong Kong (SAR)",
    "South Africa",
    "Spain",
    "United Arab Emirates",
    "Hungary",
    "Brazil",
    "Bulgaria",
    "Philippines",
    "Indonesia",
    "Puerto Rico",
    "Taiwan",
    "Romania",
    "Mexico",
    "Costa Rica",
    "Marshall Islands",
    "Vietnam",
    "Panama",
    "Argentina",
    "Norway",
    "Moldova",
    "Estonia",
    "Kenya",
    "Turkey",
    "Italy",
    "Lithuania",
    "Nigeria",
    "Korea",
    "Ukraine",
    "Jordan",
    "Thailand",
    "Colombia",
    "Serbia",
    "Portugal",
    "Guatemala",
    "Yugoslavia",
    "Uruguay",
    "Slovakia",
    "Bangladesh",
    "Finland",
    "Chile",
    "Malaysia",
    "Latvia",
    "Saudi Arabia",
    "Peru",
    "Netherlands Antilles",
    "Belgium",
    "Burma",
    "Qatar",
    "Ghana",
    "Kazakhstan",
    "Uzbekistan",
    "Armenia",
    "Morocco",
    "Iraq",
    "Trinidad and Tobago",
    "Egypt",
];

const EDUCATION_LEVELS = [
    "Bachelor",
    "Doctorate",
    "Master",
    "Both Master&Doctorate",
];

const GENDERS = ["Male", "Female", "Other"];

function SalaryPredictor() {
    const [stepIndex, setStepIndex] = useState(0);
    const [selectedProfile, setSelectedProfile] = useState<Profile>(
        Profile.JobSeeker,
    );

    const [loading, setLoading] = useState(false);

    // Form inputs
    const [title, setTitle] = useState<string | undefined>("");
    const [experience, setExperience] = useState<number | undefined>(0);
    const [gender, setGender] = useState<string | undefined>("");
    const [country, setCountry] = useState<string | undefined>("");
    const [education, setEducation] = useState<string | undefined>("");

    // Form output
    const [calculatedSalary, setCalculatedSalary] = useState([50000, 60000]);

    async function handleSubmit() {
        if (
            !title ||
            experience === undefined ||
            !gender ||
            !country ||
            !education
        ) {
            if (!title) {
                setTitle(undefined);
            }

            if (!gender) {
                setGender(undefined);
            }

            if (!country) {
                setCountry(undefined);
            }

            if (!education) {
                setEducation(undefined);
            }
            return;
        }

        setLoading(true);

        const title_idx = TITLES.indexOf(title);
        const gender_idx = GENDERS.indexOf(gender);
        const country_idx = COUNTRIES.indexOf(country);
        const education_idx = EDUCATION_LEVELS.indexOf(education);

        console.log({
            title_idx,
            gender_idx,
            country_idx,
            education_idx,
        });

        try {
            const salary = await calculateSalary({
                title_idx,
                experience,
                gender_idx,
                country_idx,
                education_idx,
            });

            setCalculatedSalary(salary);
            setStepIndex(2);
        } catch (error) {}

        setLoading(false);
    }

    function selectProfile(profile: Profile) {
        setSelectedProfile(profile);
        setStepIndex(1);
    }

    function renderStep0() {
        return (
            <>
                <h1 className="self-center text-center text-4xl font-extralight leading-snug text-black">
                    Choose your profile
                </h1>
                <div className="mt-12 grid grid-cols-2 gap-10">
                    <div
                        className="flex w-full cursor-pointer flex-col items-center gap-12 justify-self-start rounded-md p-16 shadow-lg"
                        onClick={() => selectProfile(Profile.JobSeeker)}
                    >
                        <Image
                            className="mt-10 rounded-small"
                            src="./job-seeker.jpeg"
                            alt="Job Seeker"
                            width={400}
                            height={400}
                            isBlurred
                        />
                        <p className="flex-1 text-center text-2xl font-extralight">
                            Looking for a job
                        </p>
                    </div>
                    <div
                        className="flex w-full cursor-pointer flex-col items-center gap-12 justify-self-start rounded-md p-16 shadow-lg"
                        onClick={() => selectProfile(Profile.Hiring)}
                    >
                        <Image
                            className="mt-10 rounded-small"
                            src="./hiring.jpeg"
                            alt="Hiring"
                            width={400}
                            height={400}
                            isBlurred
                        />
                        <p className="flex-1 text-center text-2xl font-extralight">
                            Hiring crew members
                        </p>
                    </div>
                </div>
            </>
        );
    }

    function renderStep1() {
        const pageTitle =
            selectedProfile === Profile.JobSeeker
                ? "Fill out your details"
                : "Fill out the position details";

        const prefix = selectedProfile === Profile.JobSeeker ? "your" : "the";

        const image =
            selectedProfile === Profile.JobSeeker ? "job-seeker-2" : "hiring-2";

        const minExperience = 0;
        const maxExperience = 50;

        return (
            <>
                <h1 className="self-center text-center text-4xl font-extralight leading-snug text-black ">
                    {pageTitle}
                </h1>
                <div className="mt-12 flex justify-center gap-24">
                    <div>
                        <Image
                            className="rounded-small"
                            src={`./${image}.png`}
                            alt="Hiring"
                            width={320}
                            isBlurred
                        />
                    </div>
                    <div className="flex w-[320px] flex-1 flex-col gap-6">
                        <Select
                            color="secondary"
                            label="Title"
                            placeholder={`Select ${prefix} title`}
                            className="max-w-xs text-black"
                            size="lg"
                            isInvalid={title === undefined}
                            isRequired
                            onSelectionChange={(keys) =>
                                setTitle(Object.entries(keys)[0][1])
                            }
                        >
                            {TITLES.map((title) => (
                                <SelectItem
                                    key={title}
                                    value={title}
                                    className="text-black"
                                >
                                    {title}
                                </SelectItem>
                            ))}
                        </Select>
                        <Input
                            color="secondary"
                            type="number"
                            label="Years of experience"
                            className="text-black"
                            min={minExperience}
                            max={maxExperience}
                            size="lg"
                            value={experience?.toString()}
                            isInvalid={experience === undefined}
                            isRequired
                            onValueChange={(value) => {
                                if (value === "") {
                                    setExperience(undefined);
                                    return;
                                }

                                const intValue = parseInt(value, 10);
                                const clampedValue = Math.min(
                                    Math.max(0, intValue),
                                    50,
                                );

                                if (clampedValue === 0) {
                                    setExperience(undefined);
                                    return;
                                }

                                setExperience(clampedValue);
                            }}
                        />
                        <Select
                            color="secondary"
                            label="Gender"
                            placeholder={`Select ${prefix} gender`}
                            className="max-w-xs text-black"
                            size="lg"
                            isInvalid={gender === undefined}
                            isRequired
                            onSelectionChange={(keys) =>
                                setGender(Object.entries(keys)[0][1])
                            }
                        >
                            {GENDERS.map((gender) => (
                                <SelectItem
                                    key={gender}
                                    value={gender}
                                    className="text-black"
                                >
                                    {gender}
                                </SelectItem>
                            ))}
                        </Select>
                        <Select
                            className="max-w-xs text-black"
                            color="secondary"
                            label="Country"
                            placeholder="Select the country"
                            size="lg"
                            isInvalid={country === undefined}
                            isRequired
                            onSelectionChange={(keys) =>
                                setCountry(Object.entries(keys)[0][1])
                            }
                        >
                            {COUNTRIES.map((country) => (
                                <SelectItem
                                    key={country}
                                    value={country}
                                    className="text-black"
                                >
                                    {country}
                                </SelectItem>
                            ))}
                        </Select>
                        <Select
                            className="max-w-xs text-black"
                            color="secondary"
                            label="Education Level"
                            placeholder={`Select ${prefix} education level`}
                            size="lg"
                            isInvalid={education === undefined}
                            isRequired
                            onSelectionChange={(keys) =>
                                setEducation(Object.entries(keys)[0][1])
                            }
                        >
                            {EDUCATION_LEVELS.map((level) => (
                                <SelectItem
                                    key={level}
                                    value={level}
                                    className="text-black"
                                >
                                    {level}
                                </SelectItem>
                            ))}
                        </Select>
                        <Button
                            color="secondary"
                            variant="flat"
                            size="lg"
                            isLoading={loading}
                            onClick={handleSubmit}
                        >
                            Submit
                        </Button>
                    </div>
                </div>
            </>
        );
    }

    function renderStep2() {
        const from = calculatedSalary[0];
        const to = calculatedSalary[1];

        const min = 10000;
        const max = 400000;

        return (
            <>
                <h1 className="self-center text-center text-4xl font-extralight leading-snug text-black ">
                    This is the expected salary:
                </h1>
                <p className="mt-12 text-3xl">
                    {from}$ - {to}$
                </p>
                <Slider
                    step={100}
                    minValue={min}
                    maxValue={max}
                    defaultValue={calculatedSalary}
                    showSteps={true}
                    formatOptions={{ style: "currency", currency: "USD" }}
                    isDisabled
                    tooltipValueFormatOptions={{
                        style: "currency",
                        currency: "USD",
                        maximumFractionDigits: 0,
                    }}
                    classNames={{
                        base: "max-w-md mt-12",
                        filler: "bg-gradient-to-r from-primary-500 to-secondary-400",
                        labelWrapper: "mb-2",
                        label: "font-medium text-default-700 text-medium",
                        value: "font-medium text-default-500 text-small",
                        thumb: [
                            "transition-size",
                            "bg-gradient-to-r from-secondary-400 to-primary-500",
                            "data-[dragging=true]:shadow-lg data-[dragging=true]:shadow-black/20",
                            "data-[dragging=true]:w-7 data-[dragging=true]:h-7 data-[dragging=true]:after:h-6 data-[dragging=true]:after:w-6",
                        ],
                        step: "data-[in-range=true]:bg-black/30 dark:data-[in-range=true]:bg-white/50",
                    }}
                    tooltipProps={{
                        offset: 10,
                        placement: "bottom",
                        classNames: {
                            base: [
                                // arrow color
                                "before:bg-gradient-to-r before:from-secondary-400 before:to-primary-500",
                            ],
                            content: [
                                "py-2 shadow-xl",
                                "text-white bg-gradient-to-r from-secondary-400 to-primary-500",
                            ],
                        },
                    }}
                />
            </>
        );
    }

    return (
        <div className="flex flex-col items-center">
            {stepIndex === 0 && renderStep0()}
            {stepIndex === 1 && renderStep1()}
            {stepIndex === 2 && renderStep2()}
        </div>
    );
}

export default SalaryPredictor;
