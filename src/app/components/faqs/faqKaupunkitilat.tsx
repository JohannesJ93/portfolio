const faqs = [
    {
      question: 'What?',
      answer:
        'Projects goal was to create reservation system for the customers market reservations centrum. The applications idea was to make it possible for users to reserve spots from markets after they succesfully applied licenses.'    },
    {
    question: 'Why?',
    answer:
        'The previous way of reserving spots from the markets was based on phone calls and writing details to paper and exel. Also papers were printed for the workers to supervise the markets.',
    },
    {
    question: 'How?',
    answer:
        'My part of the project was to code most of the backend. Backend was coded with PHP and in Laravel framework. This was the first project where I were coding the backend with any language. The most complex tasks were to code the payments and the reservations.',
    },
    
  ]
  
  export default function FaqKaupunkitilat() {
    return (
      <div className="poppins bg-blue-200">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:pt-32 lg:px-8 lg:py-40">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-5">
              <h2 className="text-3xl font-bold leading-10 tracking-tight text-black">Frequently asked questions.</h2>
              <h1 className="text-xl font-bold leading-10 tracking-tight text-black">About the Project.</h1>
              <p className="text-l font-bold leading-10 tracking-tight text-black">Obviously.</p>
              <p className="text-sm font-bold leading-10 tracking-tight text-black">Shortly.</p>
            </div>
            <div className="mt-10 lg:col-span-7 lg:mt-0">
              <dl className="space-y-10">
                {faqs.map((faq) => (
                  <div key={faq.question}>
                    <dt className="text-2xl font-semibold leading-7 text-black">{faq.question}</dt>
                    <dd className="mt-2 text-xl leading-7 text-black">{faq.answer}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    )
  }
  