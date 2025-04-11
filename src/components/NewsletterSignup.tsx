export default function NewsletterSignup() {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Stay Connected
      </h2>
      <p className="mt-4 text-lg text-gray-600">
        Subscribe to our newsletter to stay in touch! We send out occasional reflections, updates, and information about upcoming events.
      </p>

      <div className="flex justify-center mt-8">
        <iframe 
          src="https://sanghahousela.substack.com/embed" 
          width="100%" 
          height="320" 
          style={{ 
            border: "1px solid #EEE", 
            background: "white",
            maxWidth: "800px",
            width: "100%"
          }} 
          frameBorder="0" 
          scrolling="no"
        ></iframe>
      </div>
    </div>
  )
} 