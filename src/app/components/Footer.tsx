export function Footer() {
  return (
    <footer className="bg-[#2C3E50] dark:bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h4 className="font-medium text-white mb-3">About Us</h4>
            <p className="text-sm leading-relaxed">
              We provide evidence-based information about mental health to promote awareness, reduce stigma, and encourage seeking help.
            </p>
          </div>

          <div>
            <h4 className="font-medium text-white mb-3">Contact</h4>
            <p className="text-sm">
              Email: <a href="mailto:info@mentalhealthawareness.org" className="hover:text-blue-400 transition-colors">info@mentalhealthawareness.org</a>
            </p>
          </div>

          <div>
            <h4 className="font-medium text-white mb-3">Need Help?</h4>
            <p className="text-sm leading-relaxed">
              If you're struggling, please reach out to a mental health professional. You're not alone, and help is available.
            </p>
          </div>

          <div>
            <h4 className="font-medium text-white mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#depression" className="hover:text-blue-400 transition-colors">Depression</a></li>
              <li><a href="#anxiety" className="hover:text-blue-400 transition-colors">Anxiety</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-6 text-sm text-gray-400">
          <p className="mb-2">
            This content is for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment.
          </p>
          <p>&copy; {new Date().getFullYear()} Mental Health Awareness Platform. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
