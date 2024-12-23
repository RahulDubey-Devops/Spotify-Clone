import { Icon } from "@iconify/react";

const IconText = ({ iconName, displayText, active,targetLink,onClick }) => {
    return (
        <link to={targetLink} className="block" onClick={onClick}>
            <div className="flex items-center justify-start cursor-pointer">
                <div className='px-5 py-2'>
                    <Icon icon={iconName} color={active ? "white" : "gray"} fontSize={27} />
                </div>
                <div className={`${active ? "text-white" : "text-gray-400"} text-sm font-semibold hover:text-white`}>
                    {displayText}
                </div>
            </div >
        </link>
    )
}

export default IconText;