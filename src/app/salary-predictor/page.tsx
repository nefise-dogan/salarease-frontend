/* eslint-disable no-unused-vars */
"use client";

import { useState } from "react";
import { Select, SelectItem, Input, Button } from "@nextui-org/react";
import { Image } from "@nextui-org/react";

enum Profile {
    JobSeeker = "jobSeeker",
    Hiring = "hiring",
}

const titles = [
    { key: "swe", value: "Software Engineer" },
    { key: "ds", value: "Data Scientist" },
    { key: "pm", value: "Product Manager" },
    { key: "ux", value: "UX Designer" },
    { key: "ui", value: "UI Designer" },
    { key: "be", value: "Backend Developer" },
    { key: "fe", value: "Frontend Developer" },
    { key: "fs", value: "Full Stack Developer" },
    { key: "md", value: "Mobile Developer" },
    { key: "do", value: "DevOps Engineer" },
    { key: "qa", value: "QA Engineer" },
    { key: "de", value: "Data Engineer" },
    { key: "da", value: "Data Analyst" },
    { key: "ba", value: "Business Analyst" },
    { key: "sm", value: "Sales Manager" },
    { key: "sr", value: "Sales Representative" },
];

const genders = [
    { key: "male", value: "Male" },
    { key: "female", value: "Female" },
    { key: "other", value: "Other" },
];

const countries = [
    { key: "us", value: "United States" },
    { key: "tr", value: "Turkey" },
    { key: "uk", value: "United Kingdom" },
    { key: "ger", value: "Germany" },
];

const education = [
    { key: "ba", value: "Bachelor's Degree" },
    { key: "ma", value: "Master's Degree" },
    { key: "phd", value: "PhD" },
    { key: "ma-phd", value: "Master's Degree + PHD" },
];

function SalaryPredictor() {
    const [stepIndex, setStepIndex] = useState(0);
    const [selectedProfile, setSelectedProfile] = useState<Profile>(
        Profile.JobSeeker,
    );

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
                            alt="Job Seeker"
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
        const title =
            selectedProfile === Profile.JobSeeker
                ? "Fill out your details"
                : "Fill out the position details";

        const prefix = selectedProfile === Profile.JobSeeker ? "your" : "the";

        const salaryLabel =
            selectedProfile === Profile.JobSeeker
                ? "Expected Yearly Salary Range"
                : "Expected Yearly Salary Budget";

        return (
            <>
                <h1 className="self-center text-center text-4xl font-extralight leading-snug text-black ">
                    {title}
                </h1>
                <div className="mt-12 flex w-full max-w-4xl flex-col gap-6">
                    <Select
                        color="secondary"
                        label="Title"
                        placeholder={`Select ${prefix} title`}
                        className="max-w-xs text-black"
                        size="lg"
                    >
                        {titles.map((title) => (
                            <SelectItem
                                key={title.key}
                                value={title.key}
                                className="text-black"
                            >
                                {title.value}
                            </SelectItem>
                        ))}
                    </Select>
                    <Input
                        color="secondary"
                        type="number"
                        label="Years of experience"
                        className="text-black"
                        min={0}
                        max={50}
                        size="lg"
                    />
                    <Select
                        color="secondary"
                        label="Gender"
                        placeholder={`Select ${prefix} gender`}
                        className="max-w-xs text-black"
                        size="lg"
                    >
                        {genders.map((gender) => (
                            <SelectItem
                                key={gender.key}
                                value={gender.key}
                                className="text-black"
                            >
                                {gender.value}
                            </SelectItem>
                        ))}
                    </Select>
                    <Select
                        className="max-w-xs text-black"
                        color="secondary"
                        label="Country"
                        placeholder="Select the country"
                        size="lg"
                    >
                        {countries.map((country) => (
                            <SelectItem
                                key={country.key}
                                value={country.key}
                                className="text-black"
                            >
                                {country.value}
                            </SelectItem>
                        ))}
                    </Select>
                    <Select
                        className="max-w-xs text-black"
                        color="secondary"
                        label="Education Level"
                        placeholder={`Select ${prefix} education level`}
                        size="lg"
                    >
                        {education.map((level) => (
                            <SelectItem
                                key={level.key}
                                value={level.key}
                                className="text-black"
                            >
                                {level.value}
                            </SelectItem>
                        ))}
                    </Select>
                    <Button color="secondary" variant="flat" size="lg">
                        Submit
                    </Button>
                </div>
            </>
        );
    }

    function renderStep2() {
        return (
            <>
                <h1>Salary Predictor</h1>
                <p>Coming soon...</p>
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
