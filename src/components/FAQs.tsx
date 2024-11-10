

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "What is ISHA?",
      answer: "ISHA is an AI-driven medical platform designed to streamline patient data processing and assist doctors with diagnostics. It incorporates advanced machine learning models and natural language processing (NLP) capabilities to handle large volumes of patient data, providing intelligent insights and supporting decision-making."
    },
    {
      question: "How does ISHA help with patient data management?",
      answer: "ISHA can convert PDFs and medical reports into structured tokens, storing them in a searchable database. This feature enables doctors and healthcare providers to access patient information quickly, without manually sorting through documents."
    },
    {
      question: "What is the Text-to-Vitals system?",
      answer: "The Text-to-Vitals system in ISHA extracts essential metrics, such as blood pressure or blood sugar levels, from patient reports. It visualizes these metrics, allowing healthcare providers to track trends over time and gain insights into a patient's health trajectory."
    },
    {
      question: "How does the Differential Diagnosis (DDX) Tool work?",
      answer: "ISHA's Differential Diagnosis Tool uses context-aware language models to assist doctors by providing insights, explanations, and potential diagnoses based on patient history and symptoms. This helps healthcare providers consider various possible diagnoses efficiently."
    },
    {
      question: "Can ISHA generate summaries of patient histories?",
      answer: "Yes, ISHA can summarize patient histories by processing information from cumulative reports and clinical notes. It generates concise summaries and insights to provide doctors with a quick overview, helping them make more informed decisions."
    },
    {
      question: "Does ISHA offer any support outside of office hours?",
      answer: "Yes, ISHA includes a 24/7 medical support model, providing continuous access to patient data, summaries, and diagnostic support. This feature allows healthcare providers to review patient information remotely, ensuring timely responses and support when needed."
    },
    {
      question: "Is ISHA suitable for all types of healthcare practices?",
      answer: "ISHA is designed to assist healthcare providers in a variety of practices by enhancing data handling and diagnostics. Its features are especially useful in clinics and hospitals where efficient data management and quick access to patient information are critical."
    },
    {
      question: "How secure is the data stored in ISHA?",
      answer: "ISHA prioritizes data security, implementing encryption and other protective measures to ensure that patient data remains confidential and complies with healthcare privacy standards."
    },
    {
      question: "Can ISHA handle large volumes of patient data?",
      answer: "Yes, ISHA is equipped to manage vast amounts of patient reports, clinical notes, and historical records. Its machine learning and NLP capabilities are optimized for high-volume data processing, making it a reliable solution for healthcare institutions with extensive patient databases."
    },
    {
      question: "What makes ISHA unique compared to other diagnostic tools?",
      answer: "ISHA combines AI-driven data processing, medical summarization, and differential diagnosis capabilities in a single platform, offering a comprehensive solution to streamline diagnostics and data handling. It is designed to reduce doctors' workloads, provide real-time support, and enhance patient care quality through advanced AI techniques."
    }
  ]

  return (
    <div className="w-full max-w-3xl mx-auto p-6 space-y-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-7xl md:text-8xl text-center font-bold tracking-tighter relative z-10"
        >
        ISHA FAQs <span className="text-blue-600">.</span>
        </motion.h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={false}
            animate={{ backgroundColor: openIndex === index ? "rgb(243 244 246)" : "rgb(255 255 255)" }}
            transition={{ duration: 0.3 }}
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="flex justify-between items-center w-full  p-4 text-left"
              aria-expanded={openIndex === index}
              aria-controls={`content-${index}`}
            >
              <span className="font-semibold text-lg">{faq.question}</span>
              <motion.span
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-5 h-5" />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  key={`content-${index}`}
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  variants={{
                    open: { opacity: 1, height: "auto" },
                    collapsed: { opacity: 0, height: 0 }
                  }}
                  transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                >
                  <div className="p-4 bg-gray-50" id={`content-${index}`}>
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  )
}