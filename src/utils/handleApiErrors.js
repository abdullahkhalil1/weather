import { errorCodes } from "../constants/errorCode";

export const handleApiErrors = (error) => {
    let errorMessage = '';
    switch (error) {
        case errorCodes.NO_DATA:
            errorMessage = 'No data available';
            break;
        case errorCodes.INVALID_KEY:
            errorMessage = 'API key is invalid';
            break;
        case errorCodes.INVALID_URL:
            errorMessage = 'URL is invalid';
            break;
        default:
            errorMessage = 'something went wrong';
            break;
    }
    return errorMessage
}