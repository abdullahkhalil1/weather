export const Card = ({ title, otherOptions, gradientBackgroundDir, children }) => {
    return (
        <div className={`${gradientBackgroundDir} from-[#1c1d1e] via-[#101112] to-transparent py-4 px-6 text-white rounded-2xl`}>
            <div className='flex items-center justify-between'>
                <div className='font-medium bg-white text-xs py-1 px-2 rounded-full text-gray-700'>
                    <span>{title}</span>
                </div>
                {otherOptions && otherOptions}
            </div>
            {children}
        </div>
    )
}