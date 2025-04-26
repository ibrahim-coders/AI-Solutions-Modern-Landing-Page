import { TESTIMONIALS } from '../constants';

const Testimonials = () => {
  return (
    <section className='bg-stone-50 px-4 py-16 sm:px-6 lg:px-8' id='reviews'>
      <h2 className='mb-12 text-center text-3xl sm:text-4xl font-bold tracking-tight text-gray-800'>
        What Clients Say
      </h2>
      <div className='container mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
        {TESTIMONIALS.map((testimonial, index) => (
          <div
            key={index}
            className={`rounded-3xl p-6 shadow-md ${testimonial.bgColor} ${testimonial.textColor} flex flex-col justify-between`}
          >
            <p className='mb-4 text-lg leading-relaxed'>“{testimonial.text}”</p>
            <div className='mt-4 flex items-center gap-4'>
              <img
                src={testimonial.image}
                alt={testimonial.author}
                className='h-12 w-12 rounded-full object-cover border'
              />
              <div>
                <p className='font-semibold'>{testimonial.author}</p>
                <p className='text-sm opacity-80'>{testimonial.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
