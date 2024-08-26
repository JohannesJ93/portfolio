import Divider from '../dividers/divider_projects';
import Paper from '@mui/material/Paper';
import CustomizedDialogs from '../dialogs/lemonsoftDialog';
import KaupunkitilatDialog from '../dialogs/kaupunkitilatDialog'
import ElyDialog from '../dialogs/elyDialog';
import ThesisDialog from '../dialogs/thesisDialog';
import AcornDialog from '../dialogs/acornDialog'
import PortfolioDialog from '../dialogs/portfolioDialog';

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
                                <img
                                    id="1"
                                    alt="Warehouse Management System"
                                    src="/assets/lemonsoft.png"
                                    className="h-full w-full object-cover object-center"
                                />
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
                                <img
                                    id="2"
                                    alt="Organized Desk Collection"
                                    src="/assets/kaupunkitilat.png"
                                    className="aspect-[2/3]  rounded-xl  object-cover shadow-lg object-[15%] scale-125 mt-[-40px]"
                                />
                                <KaupunkitilatDialog/>
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
                                className="bg-yellow-100  aspect-h-2 aspect-w-3 overflow-hidden rounded-lg lg:aspect-h-6 lg:aspect-w-5 group-hover:opacity-75"
                            >
                                <img
                                    id="3"
                                    alt="Focus Collection"
                                    src="/assets/ely.png"
                                    className="aspect-[2/3]  rounded-xl  object-cover shadow-lg object-[1%] scale-100 mb-[-80px]"
                                />
                                 <ElyDialog/>
                            </div>
                            <h3 className="mt-4 text-xl font-semibold text-black">Ely-Center</h3>
                            <p className="mt-2 text-sm text-black">
                            Automating Excel data handling tasks with Python.
                            </p>
                        </a>

                         {/* Second Project */}
                         <a href="#" className="group block mb-12 lg:mb-0">
                            <div
                                aria-hidden="true"
                                className="bg-yellow-100 border-2 border-blue-400 aspect-h-2 aspect-w-3 overflow-hidden rounded-lg lg:aspect-h-6 lg:aspect-w-5 group-hover:opacity-75"
                            >
                                <img
                                    id="2"
                                    alt="Organized Desk Collection"
                                    src="/assets/opparikuva.png"
                                    className="aspect-[2/3]  rounded-xl  object-cover shadow-lg object-[10%] scale-125 mt-[-20px]"
                                />
                                <ThesisDialog/>
                            </div>
                            <h3 className="mt-4 text-xl font-semibold text-black">Thesis</h3>
                            <p className="mt-2 text-sm text-black">
                            Full stack application with Python backend, Angular frontend and MySql databases.
                            </p>
                        </a>

                         {/* Second Project */}
                         <a href="#" className="group block mb-12 lg:mb-0">
                            <div
                                aria-hidden="true"
                                className="bg-yellow-100 border-2 border-blue-400 aspect-h-2 aspect-w-3 overflow-hidden rounded-lg lg:aspect-h-6 lg:aspect-w-5 group-hover:opacity-75"
                            >
                                <img
                                    id="2"
                                    alt="Organized Desk Collection"
                                    src="/assets/acorn.png"
                                    className="aspect-[2/3]  rounded-xl bg-blue-200 object-cover shadow-lg object-[25%] scale-125 mt-[15px]"
                                /><AcornDialog/>
                            </div>
                            <h3 className="mt-4 text-xl font-semibold text-black">Acorn</h3>
                            <p className="mt-2 text-sm text-black">
                            Six months long school project with a group of five students. 
                            </p>
                        </a>

                         {/* Second Project */}
                         <a href="#" className="group block mb-12 lg:mb-0">
                            <div
                                aria-hidden="true"
                                className="bg-yellow-100 border-2 border-blue-400 aspect-h-2 aspect-w-3 overflow-hidden rounded-lg lg:aspect-h-6 lg:aspect-w-5 group-hover:opacity-75"
                            >
                                <img
                                    id="2"
                                    alt="Organized Desk Collection"
                                    src="/assets/aboutti.png"
                                    className="aspect-[2/3]  rounded-xl  object-cover shadow-lg scale-125 object-[50%] mt-[55px]"
                                /><PortfolioDialog/>
                            </div>
                            <h3 className="mt-4 text-xl font-semibold text-black">Portfolio</h3>
                            <p className="mt-2 text-sm text-black">
                            This website is made with Next.js framework 
                            </p>
                        </a>
                    </div>
                </Paper>
            </div>
        </div>
    )
}
