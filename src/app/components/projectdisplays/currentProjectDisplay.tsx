import Divider from '../dividers/divider_projects';
import Paper from '@mui/material/Paper';
import SingleProject from './singleProject'
export default function CurrentProjectsDisplay() {
    return (
        <div className="productit poppins">
            <div className="mx-auto max-w-xl mt-[-100px] px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
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
                        <h2 className="projectsh2 text-7xl text-green-500 font-bold tracking-tight">WORKING AT THE MOMENT</h2>
                        <Divider />
                        
                    
                    
                   </div><SingleProject/>
                </Paper>
            </div>
        </div>
    )
}
