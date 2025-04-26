import { IoArrowForward } from 'react-icons/io5';
import { PACKAGES } from '../constants';

const AdAgencyPackages = () => {
  return (
    <section className="bg-stone-50 px-4 py-12 sm:px-6 lg:px-8" id="pricing">
      <div className="text-center">
        <h2 className="my-8 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
          Pricing
        </h2>
        <p className="mb-8 text-lg tracking-tight text-emerald-800 sm:text-xl md:text-2xl">
          Advertising packages
        </p>
      </div>
      <div className="flex flex-col items-center space-y-8 sm:space-y-10">
        {PACKAGES.map((pkg, index) => (
          <div
            key={index}
            className="w-full max-w-3xl rounded-xl border-2 border-emerald-700 bg-white p-6 shadow-lg sm:p-8"
          >
            <div className="flex flex-col items-center md:flex-row md:items-start">
              <div className="mb-6 flex w-full flex-col md:mb-0 md:w-1/2">
                <h3 className="mb-2 text-xl font-semibold text-emerald-950 sm:text-2xl md:text-3xl">
                  {pkg.name}
                </h3>
                <p className="mb-4 text-2xl font-bold text-orange-500 sm:text-3xl">
                  {pkg.price}
                </p>
                <p className="text-base text-emerald-800 sm:text-lg">
                  {pkg.description}
                </p>
              </div>
              <div className="w-full md:w-1/2">
                <ul className="space-y-2">
                  {pkg.services.map((service, idx) => (
                    <li
                      key={idx}
                      className="flex items-start text-sm text-emerald-700 sm:text-base"
                    >
                      <svg
                        className="mr-2 h-5 w-5 flex-shrink-0 text-orange-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-6 text-center">
              <a
                href="#contact"
                className="inline-block rounded-full bg-emerald-950 px-6 py-2 text-base font-semibold text-white transition-colors duration-300 hover:bg-emerald-900 sm:px-8 sm:py-3 sm:text-lg"
              >
                Choose {pkg.name}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AdAgencyPackages;
