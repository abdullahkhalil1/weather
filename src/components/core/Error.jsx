import { SmileySad } from "phosphor-react"

export const Error = ({ errorMessage }) => {
    return (
        <div className="w-full h-full flex items-center justify-center">
            <div className="flex flex-col justify-center items-center gap-4">
                <SmileySad size={45} color="orange" />
                <span className="text-3xl text-white">{errorMessage}</span>
            </div>
        </div>
    )
}