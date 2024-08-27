const faqs = [
    {
      question: 'What?',
      answer:
        'The projects goal was to create code for automating processes of moving data from Exel to another software manually.',
    },
    {
    question: 'Why?',
    answer:
        'Customer had a lot of data in Excel files and each file had hundreds of cells to check manually. Customer wanted to save time by automating the process. Giving the job to the computer saved hundreds of hours.',
    },
    {
    question: 'How?',
    answer:
        'I did the whole project myself by writing two very long Python scripts. Basically the first script checked if there were some rules broken in the base Excel, and the second one wrote the important data cells to a new template Excel. The new file was made for the customers system to input all of the data easily.',
    },
    
  ]
  
  export default function FaqEly() {
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
  