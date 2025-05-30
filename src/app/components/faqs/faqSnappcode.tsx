const faqs = [
    {
      question: 'What?',
      answer:
        'I created code generator with registerations, routes, user roles and control panels.',
    },
    {
    question: 'Why?',
    answer:
        'I wanted to learn how to do everything considering a project myself, so I also put it online and set up emails from registrations and payments and so on. They are not live at the moment though. But just to learn.',
    },
    {
    question: 'How?',
    answer:
        'Laravel backend, React frontend hosted in hostinger. can be found and tested from snappcode.eu',
    },
    
  ]
  
  export default function faqSnappcode() {
    return (
      <div className="poppins bg-green-500">
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
  