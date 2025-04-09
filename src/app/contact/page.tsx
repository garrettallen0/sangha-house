export default function Contact() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Stay Connected
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Subscribe to our newsletter to stay in touch. We will send out details about upcoming events and occasional updates.
        </p>
      </div>

      <div className="flex justify-center">
        <iframe 
          src="https://sanghahousela.substack.com/embed" 
          width="480" 
          height="320" 
          style={{ border: "1px solid #EEE", background: "white" }} 
          frameBorder="0" 
          scrolling="no"
        ></iframe>
      </div>
    </div>
  )
} 