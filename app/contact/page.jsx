import { Twitter } from "@/components/Twitter";
import React from "react";
export default function ContactPage() {
  return (
    <main className="flex min-h-[55vh] items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-6">
        <h1 className="text-3xl font-semibold">Get in Touch</h1>
        <p className="text-gray-600">Feel free to reach out via any of the platforms below.</p>

        <div className="space-y-4 flex flex-col items-center">
          <a
            href="mailto:your@email.com"
            className="block text-blue-600 hover:underline"
          >
            📧 mandalpritam8617@gmail.com
          </a>

          <a
            href="https://x.com/rick_jsx"
            target="_blank"
            rel="noopener noreferrer"
            className="flex text-blue-500 hover:underline"
          >
            <Twitter /> @rick_jsx
          </a>

          <a
            href="https://www.linkedin.com/in/mandalpritam8617/"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-blue-700 hover:underline"
          >
            🔗 LinkedIn Profile
          </a>
        </div>
      </div>
    </main>
  );
}
