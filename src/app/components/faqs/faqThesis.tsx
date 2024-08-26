const faqs = [
    {
      question: 'What?',
      answer:
        'I did my Thesis about speeding up process of calculating odds for ice-hockey games.',
    },
    {
    question: 'Why?',
    answer:
        'The previous process was very time consuming, so the goal was to create as fast and fluent process as possible. ',
    },
    {
    question: 'How?',
    answer:
        'I created backend with Python that could scrape data from the internet, for example players and teams stats, modify the data and send it to frontend. In the frontend I made it possible for the user to choose two teams for the game to calculate the odds for. After choosing the teams the application sent the data to the Python script that simulates ice-hockey games, counts the odds and displays them to user.',
    },
    
  ]
  
  export default function FaqThesis() {
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
  