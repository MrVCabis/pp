import { Mail, Send } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import emailjs from '@emailjs/browser';

export function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    // EmailJS Configuration
    // IMPORTANT: Replace these with your actual EmailJS credentials
    // Get them from: https://www.emailjs.com/
    const SERVICE_ID = 'service_q04vl87'; // e.g., 'service_abc123'
    const TEMPLATE_ID = 'template_tnmqk6g'; // e.g., 'template_xyz456'
    const PUBLIC_KEY = 'UtJMA2OQXgaySbGkP'; // e.g., 'user_DEF789GHI'

    // Template parameters that will be sent to your email
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_email: '18261170803@163.com', // Your 163 email
    };

    // Check if EmailJS is configured
    if (SERVICE_ID === 'YOUR_SERVICE_ID' || TEMPLATE_ID === 'YOUR_TEMPLATE_ID' || PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
      // Demo mode: Show alert with instructions
      console.log("Form data:", formData);
      alert(
        "⚠️ EmailJS Configuration Required\n\n" +
        "To enable email sending, please:\n" +
        "1. Sign up at https://www.emailjs.com/\n" +
        "2. Create an email service (connect your 163 email)\n" +
        "3. Create an email template\n" +
        "4. Replace the placeholder credentials in /components/contact.tsx\n\n" +
        "Demo: Form data has been logged to console."
      );
      setFormData({ name: "", email: "", message: "" });
      setIsSending(false);
      return;
    }

    // Send email using EmailJS
    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        alert(t('contact.form.success'));
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        alert(t('contact.form.error'));
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-4 text-4xl">{t('contact.title')}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('contact.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-gray-900 mb-6">{t('contact.form.title')}</h3>
              <div className="space-y-6">
                {/* Email Addresses */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-amber-400 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="text-gray-700 mb-2">{t('contact.email')}</div>
                    <div className="space-y-1">
                      <a
                        href="mailto:18261170803@163.com"
                        className="text-purple-600 hover:text-purple-700 transition-colors block"
                      >
                        18261170803@163.com
                      </a>
                      <a
                        href="mailto:cabiscuit.v@gmail.com"
                        className="text-purple-600 hover:text-purple-700 transition-colors block"
                      >
                        cabiscuit.v@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Bilibili */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-blue-400 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.813 4.653h.854c1.51.054 2.769.578 3.773 1.574 1.004.995 1.524 2.249 1.56 3.76v7.36c-.036 1.51-.556 2.769-1.56 3.773s-2.262 1.524-3.773 1.56H5.333c-1.51-.036-2.769-.556-3.773-1.56S.036 18.858 0 17.347v-7.36c.036-1.511.556-2.765 1.56-3.76 1.004-.996 2.262-1.52 3.773-1.574h.774l-1.174-1.12a1.234 1.234 0 0 1-.373-.906c0-.356.124-.658.373-.907l.027-.027c.267-.249.573-.373.92-.373.347 0 .653.124.92.373L9.653 4.44c.071.071.134.142.187.213h4.267a.836.836 0 0 1 .16-.213l2.853-2.747c.267-.249.573-.373.92-.373.347 0 .662.151.929.4.267.249.391.551.391.907 0 .355-.124.657-.373.906zM5.333 7.24c-.746.018-1.373.276-1.88.773-.506.498-.769 1.13-.786 1.894v7.52c.017.764.28 1.395.786 1.893.507.498 1.134.756 1.88.773h13.334c.746-.017 1.373-.275 1.88-.773.506-.498.769-1.129.786-1.893v-7.52c-.017-.765-.28-1.396-.786-1.894-.507-.497-1.134-.755-1.88-.773zM8 11.107c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c.017-.391.15-.711.4-.96.249-.249.56-.373.933-.373zm8 0c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c.017-.391.15-.711.4-.96.249-.249.56-.373.933-.373z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="text-gray-700 mb-2">{t('contact.bilibili')}</div>
                    <a
                      href="https://space.bilibili.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-700 transition-colors"
                    >
                      {t('contact.bilibili.account')}
                    </a>
                  </div>
                </div>

                {/* Xiaohongshu (Little Red Book) */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-rose-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 17.246c-.427.24-.673.216-1.153-.24l-2.4-2.28v2.52c0 .624-.312.936-.937.936s-.936-.312-.936-.936v-2.52l-2.4 2.28c-.48.456-.726.48-1.153.24-.432-.24-.552-.576-.312-1.056l2.448-4.752-2.16-2.04c-.432-.408-.432-.864 0-1.272l2.16-2.04-2.448-4.752c-.24-.48-.12-.816.312-1.056.427-.24.673-.216 1.153.24l2.4 2.28V.216c0-.624.312-.936.936-.936s.937.312.937.936v2.52l2.4-2.28c.48-.456.726-.48 1.153-.24.432.24.552.576.312 1.056l-2.448 4.752 2.16 2.04c.432.408.432.864 0 1.272l-2.16 2.04 2.448 4.752c.24.48.12.816-.312 1.056z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="text-gray-700 mb-2">{t('contact.xiaohongshu')}</div>
                    <a
                      href="https://www.xiaohongshu.com/user/profile/5d0ebf11000000001603d568"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-700 transition-colors"
                    >
                      {t('contact.xiaohongshu.account')}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-purple-100">
              <h3 className="text-gray-900 mb-2">{t('contact.available.title')}</h3>
              <p className="text-gray-600">
                {t('contact.available.desc')}
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 border border-purple-100">
            {/* Email notification */}
            <div className="mb-6 p-4 bg-white rounded-lg border border-purple-200">
              <p className="text-gray-700 text-sm">
                <Mail className="inline-block w-4 h-4 mr-2 text-purple-600" />
                {t('contact.form.emailNotice')}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  {t('contact.form.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-purple-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder={t('contact.form.placeholder.name')}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  {t('contact.form.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-purple-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder={t('contact.form.placeholder.email')}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  {t('contact.form.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white border border-purple-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                  placeholder={t('contact.form.placeholder.message')}
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <Send size={20} />
                {isSending ? t('contact.form.sending') : t('contact.form.send')}
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-gray-200 text-center text-gray-600">
          <p>{t('contact.footer')}</p>
        </div>
      </div>
    </section>
  );
}