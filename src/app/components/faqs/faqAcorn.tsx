const faqs = [
    {
      question: 'What?',
      answer:
        'The projects goal was to create application for learning how to play guitar. The user could play some quizzes, and try to play correct notes.',
    },
    {
    question: 'Why?',
    answer:
        'The project was a part of our six months long course about creating full project from idea to internet. During the project we did learn a lot about how projects work in real life instead of just in theory.',
    },
    {
    question: 'How?',
    answer:
        'My part of the project was to create some areas of the frontend and some areas of the backend. The frontend was made by Angular and the backend by Javascript. ',
    },
    
  ]
  
  export default function FaqAcorn() {
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
  