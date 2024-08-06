<form
  name="contact"
  method="POST"
  data-netlify="true"
  className="space-y-6 bg-n-8 rounded-lg shadow-md max-w-xl w-full"
>
  <input type="hidden" name="form-name" value="contact" />
  <div>
    <label className="block text-sm font-medium text-n-1">Your Name</label>
    <input
      type="text"
      name="name"
      className="mt-1 block w-full px-3 py-2 border border-stroke-1 rounded-md shadow-sm focus:outline-none focus:ring-[#FFB6C1] focus:border-[#FFB6C1] sm:text-sm text-n-4"
    />
  </div>
  <div>
    <label className="block text-sm font-medium text-n-1">Your Email</label>
    <input
      type="email"
      name="email"
      className="mt-1 block w-full px-3 py-2 border border-stroke-1 rounded-md shadow-sm focus:outline-none focus:ring-[#FFB6C1] focus:border-[#FFB6C1] sm:text-sm text-n-4"
    />
  </div>
  <div>
    <label className="block text-sm font-medium text-n-1">Your Message</label>
    <textarea
      name="message"
      className="mt-1 block w-full px-3 py-2 border border-stroke-1 rounded-md shadow-sm focus:outline-none focus:ring-[#FFB6C1] focus:border-[#FFB6C1] sm:text-sm text-n-4"
    ></textarea>
  </div>
  <div className="flex lg:justify-center">
    <Button type="submit" className="w-full" white>
      Submit
    </Button>
  </div>
</form>;
