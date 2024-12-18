import React, { useState } from 'react'
import { AddIcon, ThreeDotIcon, WhiteboardIcon } from '../../Icons/Icons';
import { NavLink } from 'react-router-dom';

function Xlpopup() {
    const [isShowPopup, setIsShowPopup] = useState(false);

    const handleTogglePopup = () => {
        setIsShowPopup(!isShowPopup);
    };

    // Array for popup options

    return (
        <div>
            <NavLink
                to="/xlsheets"
                className="flex justify-between items-center p-2 m-1 hover:shadow-md hover:text-blue-600 rounded-md transition-all duration-300 ease-in-out group"
            >
                <div className="flex">
                    <WhiteboardIcon />
                    <span className="font-semibold ml-4">Xl sheets</span>
                </div>
                <div className="flex gap-4 pr-3 invisible group-hover:visible">
                    <ThreeDotIcon />
                    <button className="" onClick={handleTogglePopup}>
                        <AddIcon />
                    </button>
                </div>
            </NavLink>

            {isShowPopup && (
                <div className="fixed top-0 left-0 w-full h-full bg-gray-700 bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white w-3/4 h-3/4 p-5 rounded-lg shadow-lg relative">
                        <div className="border border-t-0 border-l-0 border-r-0 flex justify-between items-center p-3">
                            <span className='flex gap-2 items-center'>
                                <WhiteboardIcon />
                                <span className='font-bold'>XL Sheets</span>
                            </span>
                            <div className="flex items-center gap-6">
                                <button
                                    className="border rounded-lg w-14 h-10 text-gray-600 text-lg hover:bg-red-600 hover:text-white"
                                    onClick={handleTogglePopup}
                                >
                                    X
                                </button>
                            </div>
                        </div>
                        <div className=' h-52 mt-7 ml-6'>
                            <label className='text-2xl font-bold'>XL Sheet Title : </label>
                            <input className='lg:pl-3 h-10 w-80 text-2xl outline-none border-b-2 border-b-slate-950' type="text"  />
                            
                            <label className='text-2xl font-bold ml-20'>Add Content :</label>
                            <input className='outline-none  border-b-2 border-black '  type="text"  />

                        </div>

                        <div className="border ">
                            <button
                                type="button"
                                className="align-middle bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all"
                                onClick={handleTogglePopup}
                            >
                                Create
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Xlpopup