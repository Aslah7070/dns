import Image from "next/image";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';
const Footer = () => {
    return (
        <footer className="bg-black relative text-white py-6">
            <div className="container mx-auto px-4">
                <div className="hidden md:flex justify-between items-center pt-6 gap-4">
                    <div className="flex-1 flex flex-col items-center md:items-center border border-gray-500 p-4 rounded-lg w-80 h-40">
                        <h3 className="text-lg font-semibold text-[#0796EF] mb-3">CONNECT WITH US</h3>
                        <p><PhoneIcon/> +91 9567843340</p>
                        <p><MailOutlineIcon/> info@deepnetsoft.com</p>
                    </div>

                    <div className="flex-1 flex justify-center items-center border border-gray-500 p-4 rounded-lg w-80 h-40">
                        <Image
                            src="/assets/Logo.svg"
                            alt="Deep Net Soft Logo"
                            width={100}
                            height={50}
                            priority
                            className="absolute top-1 bg-transparent"
                        />
                        <h1 className="text-[#0796EF] text-3xl">
                            DEEP <span className="text-white">NET</span> 
                            <span className="text-white">SOFT</span>
                        </h1>

                    </div>

                    <div className="flex-1 flex flex-col items-center md:items-center border border-gray-500 p-4 rounded-lg w-80 h-40">
                        <h3 className="text-lg font-semibold text-[#0796EF]">FIND US</h3>
                        <p>📍 First floor, Geo Infopark,</p>
                        <p>Infopark EXPY, Kakkanad</p>
                    </div>
                </div>

                <div className="md:hidden flex flex-col items-center text-center space-y-4 pt-6">
                    <div className="border border-gray-500 p-4 rounded-lg w-80 h-40 flex justify-center items-center mb-2">
                        <Image
                            src="/images/logoimage.png"
                            alt="Deep Net Soft Logo"
                            width={100}
                            height={50}
                            priority
                        />
                    </div>
                    <div className="border border-gray-500 p-4 rounded-lg w-80 h-40 mb-2">
                        <h3 className="text-lg font-semibold">CONNECT WITH US</h3>
                        <p><PhoneIcon/> +91 9567843340</p>
                        <p><MailOutlineIcon/> info@deepnetsoft.com</p>
                    </div>
                    <div className="border border-gray-500 p-4 rounded-lg w-80 h-40">
                        <h3 className="text-lg font-semibold">FIND US</h3>
                        <p>📍 First floor, Geo Infopark,</p>
                        <p>Infopark EXPY, Kakkanad</p>
                    </div>
                </div>

                <div className="text-center text-gray-400 mt-4 pt-4 text-sm">
                    <p>© 2024 Deepnetsoft Solutions. All rights reserved.</p>
                    <p className="mt-1">
                        <a href="#" className="hover:underline">Terms & Conditions</a> |{" "}
                        <a href="#" className="hover:underline">Privacy Policy</a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;