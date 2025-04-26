import { FAQS, FAQ_DESCRIPTION } from '../constants';

const Faqs = () => {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8" id="faq">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
        <p className="text-gray-600 text-base sm:text-lg">{FAQ_DESCRIPTION}</p>
      </div>

      <div className="mt-12 max-w-4xl mx-auto space-y-4">
        {FAQS.map((faq, index) => (
          <details
            key={index}
            className="group [&_summary::-webkit-details-marker]:hidden rounded-md border-2 border-emerald-600 text-emerald-950"
          >
            <summary className="flex items-center justify-between gap-1.5 p-4 text-gray-900  cursor-pointer">
              <h3 className="text-lg font-medium">{faq.question}</h3>
              <svg
                className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </summary>

            <p className="px-4 pb-4 pt-2 text-emerald-950 text-base">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
};

export default Faqs;
