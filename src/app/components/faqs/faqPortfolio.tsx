const faqs = [
    {
      question: 'What?',
      answer:
        'This portfolio is my first touch to the Next.js framework. I have been trying out React and did half a project with it, but I wanted to try something new.',
    },
    {
    question: 'Why?',
    answer:
        'I have been laid off since early June, and I have no idea when there will be more work. So at the moment I am looking for something new. I also were really curious about how fast developing with Next is.',
    },
    {
    question: 'How?',
    answer:
        'Lots of components, some Tailwind and some regular CSS.',
    },
    
  ]
  
  export default function FaqPortfolio() {
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
  