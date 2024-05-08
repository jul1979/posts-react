import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';

function NoMatch() {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <p className="text-red-500 text-4xl mb-4">
                404 Page not found
            </p>
            <Button variant="destructive" onClick={() => navigate(-1)}>
                Go Back
            </Button>
        </div>
    )
}

export default NoMatch;