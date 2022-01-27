import ReactTimeago from "react-timeago"
import { AvatarGenerator } from 'random-avatar-generator';

function Registers({ comp, cname }) {
    const generator = new AvatarGenerator();
    const url = generator.generateRandomAvatar();

    return (
        <div className="flex">
            <div className="bg-blue-50 m-2 p-1 rounded-full">
                <img src={url} className="w-8 h-8 rounded-full" />
            </div>
            <h1 className="items-center flex font-semibold">{comp.name}
                <h1 className="pl-1 font-normal text-gray-600">from </h1>
                <h1 className="items-center flex font-semibold pl-1">{comp.department}</h1>
                <h1 className="pl-1 font-normal text-gray-600">has registered for {cname}</h1>
                <h1 className="px-1 mx-1.5 font-normal text-gray-600 bg-blue-50"><ReactTimeago date={comp.timestamp} /></h1>
            </h1>
        </div>
    );
}

export default Registers;