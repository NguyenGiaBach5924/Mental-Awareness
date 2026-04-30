import { AlertCircle, Lightbulb, Info } from 'lucide-react';

interface ContentSectionProps {
  activeSection: string;
}

export function ContentSection({ activeSection }: ContentSectionProps) {
  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return (
          <>
            <h1>Welcome to Mental Health Awareness</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
              Understanding mental health is the first step toward wellness. This platform provides evidence-based information to help you learn about common mental health conditions, recognize symptoms, and find support.
            </p>
            <div className="mt-6 text-sm text-gray-500 dark:text-gray-400">
              Reading time: 2 min · Last updated: April 20, 2026
            </div>

            <section id="mission" className="mt-8">
              <h2>Our Mission</h2>
              <p className="mt-3 leading-relaxed text-gray-700 dark:text-gray-300">
                We believe that everyone deserves access to clear, compassionate information about mental health. Our goal is to reduce stigma, promote understanding, and empower individuals to seek help when needed.
              </p>
            </section>

            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
              <div className="flex gap-3">
                <Lightbulb className="text-blue-600 dark:text-blue-400 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-medium text-blue-900 dark:text-blue-200 mb-1">Getting Started</h4>
                  <p className="text-sm text-blue-800 dark:text-blue-300 leading-relaxed">
                    Explore the sidebar to learn about different mental health topics. Each section provides clear, accessible information to help you understand these conditions better.
                  </p>
                </div>
              </div>
            </div>
          </>
        );

      case 'what-is-depression':
        return (
          <>
            <h1>Understanding Depression</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
              Depression is more than just feeling sad. It's a serious medical condition that affects how you feel, think, and handle daily activities.
            </p>
            <div className="mt-6 text-sm text-gray-500 dark:text-gray-400">
              Reading time: 5 min · Last updated: April 20, 2026
            </div>

            <section id="definition" className="mt-8">
              <h2>What is Depression?</h2>
              <p className="mt-3 leading-relaxed text-gray-700 dark:text-gray-300">
                Depression (major depressive disorder) is a common and serious medical illness that negatively affects how you feel, the way you think, and how you act. It causes feelings of sadness and/or a loss of interest in activities you once enjoyed.
              </p>
              <p className="mt-3 leading-relaxed text-gray-700 dark:text-gray-300">
                It can lead to a variety of emotional and physical problems and can decrease your ability to function at work and at home.
              </p>
            </section>

            <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border-l-4 border-amber-500">
              <div className="flex gap-3">
                <Info className="text-amber-600 dark:text-amber-400 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-medium text-amber-900 dark:text-amber-200 mb-1">Important Note</h4>
                  <p className="text-sm text-amber-800 dark:text-amber-300 leading-relaxed">
                    Depression is different from usual mood fluctuations and short-lived emotional responses to challenges in everyday life. It requires proper diagnosis and treatment from healthcare professionals.
                  </p>
                </div>
              </div>
            </div>

            <section id="symptoms" className="mt-8">
              <h2>Common Symptoms</h2>
              <p className="mt-3 leading-relaxed text-gray-700 dark:text-gray-300">
                Depression symptoms can vary from mild to severe and may include:
              </p>
              <ul className="mt-4 space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex gap-2">
                  <span className="text-[#1E2A38] dark:text-blue-400">•</span>
                  <span>Feeling sad or having a depressed mood</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#1E2A38] dark:text-blue-400">•</span>
                  <span>Loss of interest or pleasure in activities once enjoyed</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#1E2A38] dark:text-blue-400">•</span>
                  <span>Changes in appetite or weight</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#1E2A38] dark:text-blue-400">•</span>
                  <span>Trouble sleeping or sleeping too much</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#1E2A38] dark:text-blue-400">•</span>
                  <span>Loss of energy or increased fatigue</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#1E2A38] dark:text-blue-400">•</span>
                  <span>Difficulty thinking, concentrating, or making decisions</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#1E2A38] dark:text-blue-400">•</span>
                  <span>Feelings of worthlessness or guilt</span>
                </li>
              </ul>
            </section>

            <div className="mt-6 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border-l-4 border-red-500">
              <div className="flex gap-3">
                <AlertCircle className="text-red-600 dark:text-red-400 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-medium text-red-900 dark:text-red-200 mb-1">Crisis Support</h4>
                  <p className="text-sm text-red-800 dark:text-red-300 leading-relaxed">
                    If you're having thoughts of self-harm or suicide, please contact a crisis helpline immediately. Help is available 24/7.
                  </p>
                </div>
              </div>
            </div>
          </>
        );

      case 'misconceptions':
        return (
          <>
            <h1>Common Misconceptions About Depression</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
              Understanding what depression really is helps reduce stigma and encourages people to seek help.
            </p>

            <section id="myths" className="mt-8">
              <h2>Myth vs. Reality</h2>

              <div className="mt-6 space-y-6">
                <div className="p-5 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <h3 className="text-red-600 dark:text-red-400">Myth: "Depression is just sadness"</h3>
                  <p className="mt-2 text-gray-700 dark:text-gray-300 leading-relaxed">
                    <span className="font-medium text-green-600 dark:text-green-400">Reality:</span> Depression is a complex medical condition involving persistent symptoms that interfere with daily functioning. It's not simply feeling sad.
                  </p>
                </div>

                <div className="p-5 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <h3 className="text-red-600 dark:text-red-400">Myth: "You can just snap out of it"</h3>
                  <p className="mt-2 text-gray-700 dark:text-gray-300 leading-relaxed">
                    <span className="font-medium text-green-600 dark:text-green-400">Reality:</span> Depression is not a choice or a sign of weakness. It requires professional treatment, just like any other medical condition.
                  </p>
                </div>

                <div className="p-5 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <h3 className="text-red-600 dark:text-red-400">Myth: "Only weak people get depressed"</h3>
                  <p className="mt-2 text-gray-700 dark:text-gray-300 leading-relaxed">
                    <span className="font-medium text-green-600 dark:text-green-400">Reality:</span> Depression can affect anyone, regardless of strength, character, or background. It's a medical condition, not a personal failing.
                  </p>
                </div>
              </div>
            </section>
          </>
        );

      case 'causes':
        return (
          <>
            <h1>Causes of Depression</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
              Depression doesn't have a single cause. It results from a complex interaction of various factors.
            </p>

            <section id="biological" className="mt-8">
              <h2>Biological Factors</h2>
              <ul className="mt-4 space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex gap-2">
                  <span className="text-[#1E2A38] dark:text-blue-400">•</span>
                  <span>Brain chemistry imbalances</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#1E2A38] dark:text-blue-400">•</span>
                  <span>Genetic predisposition</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#1E2A38] dark:text-blue-400">•</span>
                  <span>Hormonal changes</span>
                </li>
              </ul>
            </section>

            <section id="psychological" className="mt-8">
              <h2>Psychological Factors</h2>
              <ul className="mt-4 space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex gap-2">
                  <span className="text-[#1E2A38] dark:text-blue-400">•</span>
                  <span>Trauma or abuse history</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#1E2A38] dark:text-blue-400">•</span>
                  <span>Negative thought patterns</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#1E2A38] dark:text-blue-400">•</span>
                  <span>Low self-esteem</span>
                </li>
              </ul>
            </section>

            <section id="environmental" className="mt-8">
              <h2>Environmental Factors</h2>
              <ul className="mt-4 space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex gap-2">
                  <span className="text-[#1E2A38] dark:text-blue-400">•</span>
                  <span>Stressful life events</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#1E2A38] dark:text-blue-400">•</span>
                  <span>Social isolation</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#1E2A38] dark:text-blue-400">•</span>
                  <span>Financial difficulties</span>
                </li>
              </ul>
            </section>
          </>
        );

      case 'what-you-can-do':
        return (
          <>
            <h1>What You Can Do</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
              If you or someone you know is experiencing depression, there are steps you can take.
            </p>

            <section id="seek-help" className="mt-8">
              <h2>Seek Professional Help</h2>
              <p className="mt-3 leading-relaxed text-gray-700 dark:text-gray-300">
                The most important step is to consult with a healthcare professional. They can provide:
              </p>
              <ul className="mt-4 space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex gap-2">
                  <span className="text-[#1E2A38] dark:text-blue-400">•</span>
                  <span>Proper diagnosis</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#1E2A38] dark:text-blue-400">•</span>
                  <span>Treatment plans (therapy, medication, or both)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#1E2A38] dark:text-blue-400">•</span>
                  <span>Ongoing support and monitoring</span>
                </li>
              </ul>
            </section>

            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
              <div className="flex gap-3">
                <Lightbulb className="text-blue-600 dark:text-blue-400 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-medium text-blue-900 dark:text-blue-200 mb-1">Self-Care Tips</h4>
                  <p className="text-sm text-blue-800 dark:text-blue-300 leading-relaxed">
                    While professional help is essential, self-care practices like regular exercise, healthy sleep habits, and staying connected with loved ones can support your recovery journey.
                  </p>
                </div>
              </div>
            </div>

            <section id="support-others" className="mt-8">
              <h2>Supporting Someone with Depression</h2>
              <ul className="mt-4 space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex gap-2">
                  <span className="text-[#1E2A38] dark:text-blue-400">•</span>
                  <span>Listen without judgment</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#1E2A38] dark:text-blue-400">•</span>
                  <span>Encourage them to seek professional help</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#1E2A38] dark:text-blue-400">•</span>
                  <span>Be patient and understanding</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#1E2A38] dark:text-blue-400">•</span>
                  <span>Offer practical support with daily tasks</span>
                </li>
              </ul>
            </section>
          </>
        );

      case 'references':
        return (
          <>
            <h1>References</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
              This content is based on evidence-based resources from trusted mental health organizations.
            </p>

            <section id="sources" className="mt-8">
              <h2>Sources</h2>
              <div className="mt-4 space-y-4 text-gray-700 dark:text-gray-300">
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded">
                  <p className="font-medium">American Psychiatric Association</p>
                  <p className="text-sm mt-1">Diagnostic and Statistical Manual of Mental Disorders (DSM-5)</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded">
                  <p className="font-medium">National Institute of Mental Health (NIMH)</p>
                  <p className="text-sm mt-1">Depression: Overview and Resources</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded">
                  <p className="font-medium">World Health Organization (WHO)</p>
                  <p className="text-sm mt-1">Depression Fact Sheets</p>
                </div>
              </div>
            </section>
          </>
        );

      default:
        return (
          <>
            <h1>Content Coming Soon</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
              This section is currently being developed. Please check back later.
            </p>
          </>
        );
    }
  };

  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      {renderContent()}

      <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700 flex justify-between items-center">
        <button className="px-4 py-2 text-[#1E2A38] dark:text-blue-400 hover:bg-[#E6EEF6] dark:hover:bg-gray-800 rounded transition-colors">
          ← Previous
        </button>
        <button className="px-4 py-2 text-[#1E2A38] dark:text-blue-400 hover:bg-[#E6EEF6] dark:hover:bg-gray-800 rounded transition-colors">
          Next →
        </button>
      </div>

      <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-800 rounded border-l-4 border-gray-400 dark:border-gray-600">
        <p className="text-sm text-gray-600 dark:text-gray-400 italic">
          This content is for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
        </p>
      </div>
    </div>
  );
}
