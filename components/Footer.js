import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-4 mt-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <p className="text-sm text-white">© 2025 All rights reserved</p>
                    </div>

                    <div className="flex space-x-6 text-sm">
                        <a href="#" className="transition-colors">
                            Terms
                        </a>
                        <a href="#" className="transition-colors">
                            Privacy
                        </a>
                        <a href="#" className="transition-colors">
                            Contact
                        </a>
                    </div>
                </div>
        </footer>
    )
}

export default Footer
