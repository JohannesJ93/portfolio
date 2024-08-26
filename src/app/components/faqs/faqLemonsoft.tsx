const faqs = [
    {
      question: 'What?',
      answer:
        'The projects goal was to create warehouse management application to be used online. The application was made for handling basic and more complex tasks at the warehouse.',
    },
    {
    question: 'Why?',
    answer:
        'Application for warehouse management is crucal for even a bit bigger warehouse. It helps the company to know how much products they have, and the workers to find the products and collect them.',
    },
    {
    question: 'How?',
    answer:
        'My part of the project was to design and create the user interface. I did most of the frontend including also functions to send and receive items, and for multiple languages. In the project I used Angular framework.',
    },
    
  ]
  
  export default function FaqLemonsoft() {
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
  