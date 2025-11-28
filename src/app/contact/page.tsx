import { Mail, MapPin, Instagram, Facebook, Send } from "lucide-react";
import { useState } from "react";
import { supabase } from "../lib/supabase";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const { error } = await supabase.from("contact_submissions").insert([
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
      ]);

      if (error) throw error;

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-[#0066B3] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Contact</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Neem contact met ons op voor vragen, boekingen of om lid te worden
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Stuur ons een bericht
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  Naam *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0066B3] focus:border-transparent outline-none transition-all"
                  placeholder="Je naam"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  E-mailadres *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0066B3] focus:border-transparent outline-none transition-all"
                  placeholder="je@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  Onderwerp *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0066B3] focus:border-transparent outline-none transition-all"
                >
                  <option value="">Kies een onderwerp</option>
                  <option value="lid-worden">Lid worden</option>
                  <option value="boeking">Boeking aanvragen</option>
                  <option value="algemene-vraag">Algemene vraag</option>
                  <option value="anders">Anders</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  Bericht *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0066B3] focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Je bericht..."
                />
              </div>

              {status === "success" && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                  Bedankt voor je bericht! We nemen zo snel mogelijk contact met
                  je op.
                </div>
              )}

              {status === "error" && (
                <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                  Er is iets misgegaan. Probeer het opnieuw of stuur ons een
                  e-mail.
                </div>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full px-6 py-3 bg-[#0066B3] text-white rounded-lg font-semibold hover:bg-[#004d8a] transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "sending" ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Versturen...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    <span>Verstuur bericht</span>
                  </>
                )}
              </button>
            </form>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Contactgegevens
            </h2>
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#0066B3] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">E-mail</h3>
                  <a
                    href="mailto:gospelkoorcandela@hotmail.com"
                    className="text-[#0066B3] hover:underline"
                  >
                    gospelkoorcandela@hotmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#0066B3] rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Locatie</h3>
                  <p className="text-gray-700">
                    Kerkplein
                    <br />
                    Scherpenzeel
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#0066B3] to-[#004d8a] rounded-xl p-8 text-white mb-8">
              <h3 className="text-2xl font-bold mb-4">
                Volg ons op social media
              </h3>
              <p className="text-blue-100 mb-6">
                Blijf op de hoogte van onze laatste nieuws, optredens en
                achter-de-schermen beelden
              </p>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-white text-[#0066B3] rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                  <span>Instagram</span>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-white text-[#0066B3] rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                  <span>Facebook</span>
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Repetities
              </h3>
              <div className="space-y-2 text-gray-700">
                <p>
                  <span className="font-semibold">Dag:</span> Elke
                  donderdagavond
                </p>
                <p>
                  <span className="font-semibold">Tijd:</span> 19:30 - 21:30 uur
                </p>
                <p>
                  <span className="font-semibold">Locatie:</span> Kerkplein,
                  Scherpenzeel
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
