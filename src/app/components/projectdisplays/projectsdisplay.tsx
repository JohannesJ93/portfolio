import Divider from '../dividers/divider_projects';
import Paper from '@mui/material/Paper';
import CustomizedDialogs from '../dialogs/lemonsoftDialog';
import KaupunkitilatDialog from '../dialogs/kaupunkitilatDialog';
import ElyDialog from '../dialogs/elyDialog';
import ThesisDialog from '../dialogs/thesisDialog';
import AcornDialog from '../dialogs/acornDialog';
import PortfolioDialog from '../dialogs/portfolioDialog';
import Image from 'next/image';

export default function ProjectsDisplay() {
    return (
        <div className="productit poppins">
            <div className="mx-auto max-w-xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <Paper
                    elevation={12}
                    sx={{
                        p: 4,
                        mb: 0,
                        borderRadius: 8,
                        backgroundColor: 'transparent', // No background color
                    }}
                >
                    {/* Title and Description Section */}
                    <div className="text-center mb-10">
                        <h2 className="projectsh2 text-7xl text-white font-bold tracking-tight">PROJECTS</h2>
                        <Divider />
                        <p className="mt-4 text-xl font-bold text-black">
                            Each project teaches something. You just need to be ready to learn with an open mind.
                        </p>
                    </div>

                    {/* Image Grid Section */}
                    <div className="lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
                        {/* First Project */}
                        <a className="group block mb-12 lg:mb-20">
                            <div
                                aria-hidden="true"
                                className="bg-yellow-100 aspect-h-2 border-2 border-blue-400 aspect-w-3 overflow-hidden rounded-lg lg:aspect-h-6 lg:aspect-w-5 group-hover:opacity-75"
                            >
                                <div className="relative w-full h-full">
                                    <Image
                                        id="1"
                                        alt="Warehouse Management System"
                                        src="/assets/lemonsoft.png"
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                </div>
                                <CustomizedDialogs />
                            </div>
                            <h3 className="mt-4 text-xl font-semibold text-black">Warehouse Management System</h3>
                            <p className="mt-2 text-sm text-black">
                                Frontend development, UI design, and development with Angular. Creating user-centric interfaces for a warehouse management system.
                            </p>
                        </a>

                        {/* Second Project */}
                        <a href="#" className="group block mb-12 lg:mb-0">
                            <div
                                aria-hidden="true"
                                className="bg-yellow-100 border-2 border-blue-400 aspect-h-2 aspect-w-3 overflow-hidden rounded-lg lg:aspect-h-6 lg:aspect-w-5 group-hover:opacity-75"
                            >
                                <div className="relative w-full h-full">
                                    <Image
                                        id="2"
                                        alt="Organized Desk Collection"
                                        src="/assets/kaupunkitilat.png"
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                </div>
                                <KaupunkitilatDialog />
                            </div>
                            <h3 className="mt-4 text-xl font-semibold text-black">Market reservation service</h3>
                            <p className="mt-2 text-sm text-black">
                                Backend development with Laravel.
                            </p>
                        </a>

                        {/* Third Project */}
                        <a href="#" className="group block mb-12 lg:mb-0">
                            <div
                                aria-hidden="true"
                                className="bg-yellow-100 aspect-h-2 aspect-w-3 overflow-hidden rounded-lg lg:aspect-h-6 lg:aspect-w-5 group-hover:opacity-75"
                            >
                                <div className="relative w-full h-full">
                                    <Image
                                        id="3"
                                        alt="Focus Collection"
                                        src="/assets/ely.png"
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                </div>
                                <ElyDialog />
                            </div>
                            <h3 className="mt-4 text-xl font-semibold text-black">Ely-Center</h3>
                            <p className="mt-2 text-sm text-black">
                                Automating Excel data handling tasks with Python.
                            </p>
                        </a>

                        {/* Fourth Project */}
                        <a href="#" className="group block mb-12 lg:mb-0">
                            <div
                                aria-hidden="true"
                                className="bg-yellow-100 border-2 border-blue-400 aspect-h-2 aspect-w-3 overflow-hidden rounded-lg lg:aspect-h-6 lg:aspect-w-5 group-hover:opacity-75"
                            >
                                <div className="relative w-full h-full">
                                    <Image
                                        id="4"
                                        alt="Thesis"
                                        src="/assets/opparikuva.png"
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                </div>
                                <ThesisDialog />
                            </div>
                            <h3 className="mt-4 text-xl font-semibold text-black">Thesis</h3>
                            <p className="mt-2 text-sm text-black">
                                Full stack application with Python backend, Angular frontend, and MySQL databases.
                            </p>
                        </a>

                        {/* Fifth Project */}
                        <a href="#" className="group block mb-12 lg:mb-0">
                            <div
                                aria-hidden="true"
                                className="bg-yellow-100 border-2 border-blue-400 aspect-h-2 aspect-w-3 overflow-hidden rounded-lg lg:aspect-h-6 lg:aspect-w-5 group-hover:opacity-75"
                            >
                                <div className="relative w-full h-full">
                                    <Image
                                        id="5"
                                        alt="Acorn"
                                        src="/assets/acorn.png"
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                </div>
                                <AcornDialog />
                            </div>
                            <h3 className="mt-4 text-xl font-semibold text-black">Acorn</h3>
                            <p className="mt-2 text-sm text-black">
                                Six months long school project with a group of five students.
                            </p>
                        </a>

                        {/* Sixth Project */}
                        <a href="#" className="group block mb-12 lg:mb-0">
                            <div
                                aria-hidden="true"
                                className="bg-yellow-100 border-2 border-blue-400 aspect-h-2 aspect-w-3 overflow-hidden rounded-lg lg:aspect-h-6 lg:aspect-w-5 group-hover:opacity-75"
                            >
                                <div className="relative w-full h-full">
                                    <Image
                                        id="6"
                                        alt="Portfolio"
                                        src="/assets/aboutti.png"
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                </div>
                                <PortfolioDialog />
                            </div>
                            <h3 className="mt-4 text-xl font-semibold text-black">Portfolio</h3>
                            <p className="mt-2 text-sm text-black">
                                This website is made with Next.js framework.
                            </p>
                        </a>
                    </div>
                </Paper>
            </div>
        </div>
    );
}
