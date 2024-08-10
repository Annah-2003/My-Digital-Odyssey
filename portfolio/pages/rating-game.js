import { useState } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import Image from 'next/image';
import qrCodeImage from '../public/QR-CODE IMAGE.png'; 

export default function Rating() {
  const [showQRCode, setShowQRCode] = useState(false);
  const router = useRouter(); 

  const handleShowQRCode = () => {
    setShowQRCode(true);
  };

  const handleBackToHome = () => {
    router.push('/'); 
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white flex flex-col items-center justify-center text-center p-6">
      <motion.h1
        className="text-4xl font-bold mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        Rate My Portfolio
      </motion.h1>
      {!showQRCode ? (
        <motion.button
          onClick={handleShowQRCode}
          className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white py-2 px-4 rounded-lg shadow-lg hover:shadow-2xl transform transition-all duration-300 ease-in-out"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.5 }}
        >
          Drop a Rating
        </motion.button>
      ) : (
        <>
          <motion.p
            className="text-lg mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1.5 }}
          >
            Scan the QR code below to give my portfolio an honest rating.
          </motion.p>
          <motion.div
            className="w-64 h-64 mb-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
          >
            <Image src={qrCodeImage} alt="QR Code" layout="responsive" />
          </motion.div>
          <a
            href="https://ratemyportfolio.vercel.app/"
            className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white py-2 px-4 rounded-lg shadow-lg hover:shadow-2xl transform transition-all duration-300 ease-in-out"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rate My Portfolio
          </a>
        </>
      )}
      <motion.button
        onClick={handleBackToHome}
        className="mt-8 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white py-2 px-4 rounded-lg shadow-lg hover:shadow-2xl transform transition-all duration-300 ease-in-out"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1.5 }}
      >
        Back to Home
      </motion.button>
    </div>
  );
}
