import React from "react";

const Footer = () => {
  return (
    <footer className="bg-indigo-600 text-white py-8 mt-12 shadow-lg">
      <div className="container mx-sticky px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-xl font-semibold">Home Service App</h2>
          <p className="text-sm text-gray-200">Your One Stop for All Services</p>
        </div>
        
        <div className="flex space-x-6">
          <a href="#" className="hover:text-gray-300">Privacy Policy</a>
          <a href="#" className="hover:text-gray-300">Terms of Service</a>
          <a href="#" className="hover:text-gray-300">Contact Us</a>
        </div>
      </div>
      
      <div className="text-center text-gray-300 mt-4 text-sm">
        &copy; {new Date().getFullYear()} Home Service App. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
// const Footer = () => {
//   return (
//     <footer className="bg-indigo-600 text-white py-4 shadow-lg w-full absolute bottom-0">
//       <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
//         <div className="text-center md:text-left mb-2 md:mb-0">
//           <h2 className="text-xl font-semibold">Home Service App</h2>
//           <p className="text-sm text-gray-200">Your One Stop for All Services</p>
//         </div>

//         <div className="flex space-x-6">
//           <a href="#" className="hover:text-gray-300">Privacy Policy</a>
//           <a href="#" className="hover:text-gray-300">Terms of Service</a>
//           <a href="#" className="hover:text-gray-300">Contact Us</a>
//         </div>
//       </div>

//       <div className="text-center text-gray-300 mt-2 text-sm">
//         &copy; {new Date().getFullYear()} Home Service App. All Rights Reserved.
//       </div>
//     </footer>
//   );
// };
// export default Footer;
