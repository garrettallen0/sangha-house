export default function NewsletterSignup() {
  return (
    <div className="flex flex-col lg:flex-row gap-8 items-center">
      <div className="lg:w-1/4 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Stay in touch
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Subscribe to our newsletter! We send out information about upcoming events, house updates, and occasional essays.
        </p>
      </div>

      <div className="lg:w-3/4 w-full">
        <iframe 
          src="https://sanghahousela.substack.com/embed" 
          width="100%" 
          height="320" 
          style={{ 
            background: "white",
            maxWidth: "800px",
            width: "100%",
            border: "none",
            overflow: "hidden"
          }} 
        ></iframe>
      </div>
    </div>
  )
} 