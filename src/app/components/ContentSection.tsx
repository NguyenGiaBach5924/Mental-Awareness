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
                Most of us have experienced sad days: a breakup, an academic failure, or simply waking up one morning with a heavy feeling. These are completely normal human responses to the ups and downs of life. However, Major Depressive Disorder (MDD) is fundamentally different from ordinary sadness. It is a clinically diagnosed mental disorder with a clear biological basis, not just a temporary low mood or a lack of willpower. Individuals with MDD experience persistent feelings of sadness, emptiness, or emotional numbness for at least two consecutive weeks, significantly disrupting daily life, including work, study, relationships, and even the ability to care for themselves. 
              </p>
              <p className="mt-3 leading-relaxed text-gray-700 dark:text-gray-300">
                If ordinary sadness is like a brief rain shower that passes within a few hours, MDD is more like a dense layer of gray clouds covering the sky for weeks, leaving those affected uncertain about when the light will return. According to the World Health Organization (WHO), MDD is one of the leading causes of disability and reduced quality of life worldwide. The lifetime prevalence of MDD in the general population ranges from 15% to 20% (Richards, 2011; Wang, 2024), meaning that approximately one in five people will experience at least one episode of major depression during their lifetime.
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
According to the diagnostic criteria in the DSM-5 (Section 21 – Major Depressive Disorder, p. 72), a person is diagnosed with MDD when five or more symptoms are present during the same two-week period, with at least one of the two core symptoms being either: (1) a depressed mood or (2) a marked loss of interest or pleasure.
The table below presents the nine DSM-5 diagnostic criteria and how they may manifest in everyday life:
              </p>
              <div className="mt-6 overflow-x-auto">
                <table className="w-full border-collapse bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm">
                  <thead>
                    <tr className="bg-[#1E2A38] text-white">
                      <th className="px-4 py-3 text-left font-medium">No</th>
                      <th className="px-4 py-3 text-left font-medium">Symptoms According to DSM-5</th>
                      <th className="px-4 py-3 text-left font-medium">Cognitive Symptoms</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700 dark:text-gray-300">
                    <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <td className="px-4 py-3">1</td>
                      <td className="px-4 py-3">Depressed mood most of the time</td>
                      <td className="px-4 py-3">Persistent feelings of emptiness, hopelessness, and sadness. A vacant gaze, sometimes with reddened eyes without a clear reason. </td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <td className="px-4 py-3">2</td>
                      <td className="px-4 py-3">Loss of interest or pleasure (anhedonia)</td>
                      <td className="px-4 py-3">Previously enjoyable activities—such as favorite movies, good food, or meeting friends—become dull. There is no longer any sense of enjoyment, even when one knows they “should” feel interested. </td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <td className="px-4 py-3">3</td>
                      <td className="px-4 py-3">Significant changes in weight or appetite</td>
                      <td className="px-4 py-3">Reduced appetite or overeating, with body weight changing by more than 5% within one month without intention.</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <td className="px-4 py-3">4</td>
                      <td className="px-4 py-3">Insomnia or hypersomnia</td>
                      <td className="px-4 py-3">Difficulty falling asleep or, conversely, sleeping 12–14 hours yet still feeling fatigued.</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <td className="px-4 py-3">5</td>
                      <td className="px-4 py-3">Psychomotor retardation or agitation</td>
                      <td className="px-4 py-3">Noticeably slowed speech, movement, and reactions, or increased restlessness, observable by others.</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <td className="px-4 py-3">6</td>
                      <td className="px-4 py-3">Fatigue or loss of energy</td>
                      <td className="px-4 py-3">Even simple tasks, such as bathing or sending a message, become extremely difficult.</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <td className="px-4 py-3">7</td>
                      <td className="px-4 py-3">Feelings of worthlessness or excessive guilt</td>
                      <td className="px-4 py-3">Persistent self-blame and a sense of being a burden to others.</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <td className="px-4 py-3">8</td>
                      <td className="px-4 py-3">Reduced ability to think, concentrate, or make decisions</td>
                      <td className="px-4 py-3">Reading the same passage multiple times without understanding, or being unable to make even minor decisions.</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <td className="px-4 py-3">9</td>
                      <td className="px-4 py-3">Recurrent thoughts of death or suicide</td>
                      <td className="px-4 py-3">Frequent thoughts of “disappearing” or “not wanting to exist,” sometimes accompanied by specific plans. </td>
                    </tr>
                  
                  </tbody>
                </table>
              </div>
            </section>

            <div className="mt-6 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border-l-4 border-red-500">
              <div className="flex gap-3">
                <AlertCircle className="text-red-600 dark:text-red-400 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-medium text-red-900 dark:text-red-200 mb-1">Important Note</h4>
                  <p className="text-sm text-red-800 dark:text-red-300 leading-relaxed">
The above symptoms must cause significant distress or substantial impairment in social, occupational, or daily functioning, and must not be attributable to the effects of substances or other medical conditions (DSM-5, pp. 72–73). This distinction defines the boundary between Major Depressive Disorder and ordinary sadness in everyday life.                  </p>
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
                  <h3 className="text-red-600 dark:text-red-400">Myth: "Depression is just sadness—think positively and try harder, and it will go away."</h3>
                  <p className="mt-2 text-gray-700 dark:text-gray-300 leading-relaxed">
                    <span className="font-medium text-green-600 dark:text-green-400">Why do many people believe this?</span> 
                  </p>
                  <p>
                    <span className="indent-8 text-gray-600 dark:text-gray-400 text-justify block">
                       Because depression has no visible wounds. When someone appears to be “just staying at home, not going to school or work,” others may quickly assume that the person is lazy, lacks willpower, or simply “needs more discipline.” Phrases like “Stay strong, everything will be fine” often become automatic responses from those around them, even though they provide little real support.</span>
                  </p>

                  <p className="mt-2 text-gray-700 dark:text-gray-300 leading-relaxed ">
                    <span className="font-medium text-green-600 dark:text-green-400 ">
                      What does scientific evidence show?</span> 
                  </p>
                  <p>
                    <span className="indent-8 text-gray-600 dark:text-gray-400 text-justify block">
                        Major Depressive Disorder (MDD) is a mental health condition with a well-established biological basis; it is not a matter of choice or attitude. Neuroimaging studies have shown that individuals with MDD may exhibit reduced volume in the hippocampus—the region responsible for memory and emotional regulation—along with disruptions in cognitive networks and imbalances in neurotransmitters such as serotonin, dopamine, and norepinephrine (Otte and partner 2016; Li and partner 2021). These are measurable biological changes, comparable to insulin imbalance in diabetes.<br></br>
Goldman and partner (1999) demonstrated that the belief that “depression can be overcome by willpower alone” is not only scientifically inaccurate but also creates significant barriers. It can lead individuals to feel ashamed and reluctant to seek professional help. As a result, the condition is often detected later, treatment is delayed, and the risk of recurrence increases.
</span>
                  </p>
                </div>

                <div className="p-5 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <h3 className="text-red-600 dark:text-red-400">
                    Myth: "Depression is entirely caused by external shocks such as job loss, heartbreak, or financial collapse."</h3>
                  <p className="mt-2 text-gray-700 dark:text-gray-300 leading-relaxed">
                    <span className="font-medium text-green-600 dark:text-green-400">
                      Why do many people believe this?:</span>
                  </p>
                  <p>
                    <span className="indent-8 text-gray-600 dark:text-gray-400 text-justify block">
                       We are accustomed to thinking in terms of cause and effect: if someone experiences a major life event and then becomes sad, it seems obvious that the event “caused” the depression. Conversely, when someone develops depression without any apparent external trigger, others may doubt its validity or even assume the person is “pretending.”
</span>
                  </p>
                  <p className="mt-2 text-gray-700 dark:text-gray-300 leading-relaxed">
                    <span className="font-medium text-green-600 dark:text-green-400">What does scientific evidence show?</span> 
                  </p>
                  <p>
                    <span className="indent-8 text-gray-600 dark:text-gray-400 text-justify block"> 
                      Although life stressors (such as job loss, relationship breakdown, or bereavement) can act as important triggers, Major Depressive Disorder (MDD) is not simply a reaction to circumstances. Its development involves a complex interaction of biological, psychological, and social factors—the biopsychosocial model (Khune and partner, 2023).<br />
From a biological and genetic perspective, MDD has an estimated heritability of 30% to 50% (Otte and partner, 2016; Cui and partner, 2024). This means that two individuals exposed to the same level of stress may have very different outcomes, with those having certain genetic predispositions being at significantly higher risk (Wang, 2024).<br />
Recent research also highlights the role of the gut–brain axis, neuroinflammation, and chronic stress-related cortisol dysregulation in the development of MDD (Cui and partner, 2024). Ji (2023) emphasizes that biological predisposition plays a foundational role, gradually affecting neurotransmitter systems over time. This helps explain why many individuals with MDD are unable to identify a clear external cause for their condition.
</span>
                  </p>
                </div>

                <div className="p-5 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <h3 className="text-red-600 dark:text-red-400">Myth: "Antidepressants are addictive, control the mind, and taking medication alone will cure depression immediately"</h3>
                  <p className="mt-2 text-gray-700 dark:text-gray-300 leading-relaxed">
                    <span className="font-medium text-green-600 dark:text-green-400">Why do many people believe this?</span> 
                  </p>
                  <p>
                    <span className="indent-8 text-gray-600 dark:text-gray-400 text-justify block"> 
                      This misconception arises from two opposite perspectives: one driven by excessive fear of medication (“addiction,” “losing oneself”), and the other by unrealistic expectations (“taking the medication will bring instant recovery”). Both lead to the same consequence: individuals either refuse treatment or discontinue medication prematurely before it has taken effect.</span>
                  </p>
                   <p className="mt-2 text-gray-700 dark:text-gray-300 leading-relaxed">
                    <span className="font-medium text-green-600 dark:text-green-400">What does scientific evidence show?</span> 
                  </p>
                  <p>
                    <span className="indent-8 text-gray-600 dark:text-gray-400 text-justify block"> 
                      Common antidepressants, such as Selective Serotonin Reuptake Inhibitors and SNRIs, work by restoring the balance of neurotransmitters in the brain, particularly serotonin. They do not produce euphoria or intoxication and do not have addictive properties in the way that drugs or stimulants do (Fancher & Kravitz, 2010). Goldman and partner (1999) and Ji (2023) confirm that the fear of “medication addiction” is a major barrier preventing individuals from seeking treatment, despite lacking scientific basis.<br></br>
Regarding onset of action, antidepressants are not like painkillers; patients typically need two to four weeks before noticing improvement (Fancher & Kravitz, 2010). This is why adherence and patience are essential. Many individuals stop taking medication after one or two weeks because they “see no effect,” which is a leading cause of relapse.<br></br>
As for whether medication alone is sufficient, it is not a “standalone cure.” The most effective approach is usually a combination of medication, psychotherapy—particularly Cognitive Behavioral Therapy (CBT)—and lifestyle changes, including regular exercise, improved sleep, and proper nutrition (Marx and partner, 2023; Wang, 2024).<br></br>
</span>
                  </p>
                </div>
              </div>
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
              <h2>If you find out MDD symptom in yourself.</h2>
              <p className="mt-3 leading-relaxed text-gray-700 dark:text-gray-300">
                The most important thing to remember is this: you are not at fault for experiencing depression, and you do not have to face it alone. Below are practical steps you can take:
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex gap-2">
                  <span className="text-[#1E2A38] dark:text-blue-400">•</span>
                  <span>Step 1: Seek help from a psychiatrist or a licensed mental health professional for an accurate diagnosis (screening tools such as the PHQ-9 may be used).</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#1E2A38] dark:text-blue-400">•</span>
                  <span>Step 2: Adhere to the prescribed treatment plan, take medication as directed, and do not discontinue it on your own, even if you begin to feel better.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#1E2A38] dark:text-blue-400">•</span>

                  <div>
                    <span className="block text-[#1E2A38] dark:text-blue-400">
                      Step 3: Make evidence-based lifestyle changes:
                    </span>

                    <ul className="list-[circle] mt-2 pl-6 space-y-2 text-gray-700 dark:text-gray-300 text-justify">
                      <li>
                        Engage in aerobic exercise for about 30 minutes per day,
                        3–5 times per week
                      </li>

                      <li>
                        Improve sleep habits (maintain a consistent sleep schedule
                        and limit electronic device use before bedtime)
                      </li>

                      <li>
                        Maintain a balanced diet rich in vegetables and fatty fish
                        (omega-3), while limiting sugar and saturated fats
                      </li>
                    </ul>
                  </div>
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
              <h2>If you want to help your relative people with MDD.</h2>
              <p className="mt-3 leading-relaxed text-gray-700 dark:text-gray-300">
                Your support can make a significant difference, but it must be offered appropriately. Some responses, although well-intentioned, may unintentionally cause additional harm. The following guidelines may be helpful:
              </p>
              <p className="font-semibold mt-4">What to do</p>
              <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex gap-2 items-start">
                  <span className="text-[#1E2A38] dark:text-blue-400 flex-shrink-0 mt-1.5">•</span>
                  <span>Avoid rushing to give advice or solutions. Sometimes, the person simply needs someone to sit with them and truly listen. Even silence can be supportive. A simple statement such as “I’m here with you” can be enough.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#1E2A38] dark:text-blue-400 flex-shrink-0 mt-1.5">•</span>
                  <span>Assist the person in seeking professional help by helping them find a psychiatrist or psychologist, reminding them of appointments, and—if they are comfortable—accompanying them to their first visit. This type of practical support is far more valuable than general encouragement (Fancher & Kravitz, 2010).</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#1E2A38] dark:text-blue-400 flex-shrink-0 mt-1.5">•</span>
                  <span>Speak openly about mental health treatment as something normal—because it is. Stigma remains one of the greatest barriers preventing individuals from seeking help (Goldman and partner, 1999).</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#1E2A38] dark:text-blue-400 flex-shrink-0 mt-1.5">•</span>
                  <span>If your loved one expresses thoughts such as “I don’t want to live anymore,” “I want to disappear,” or shows any signs of self-harm, ask directly and calmly: “Are you thinking about hurting yourself?” Asking this does not increase risk; instead, it opens the door for them to share. Following this, contact a healthcare professional promptly to ensure timely support (Fancher & Kravitz, 2010).</span>
                </li>
              </ul>
              <p className="font-semibold mt-4">What NOT to do</p>
              <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex gap-2 items-start">
                  <span className="text-[#1E2A38] dark:text-blue-400 flex-shrink-0 mt-1.5">•</span>
                  <span>Avoid statements such as “Just try harder,” “Others have it worse than you,” “Why don’t you think more positively?” or “You’re worrying everyone unnecessarily.” Although well-meaning, these can make the person feel worse and more withdrawn (Goldman and partner, 1999).</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#1E2A38] dark:text-blue-400 flex-shrink-0 mt-1.5">•</span>
                  <span>Do not pressure them to “recover quickly” or set deadlines for improvement. Depression does not follow a fixed timeline, and such pressure can increase their burden.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#1E2A38] dark:text-blue-400 flex-shrink-0 mt-1.5">•</span>
                  <span>Do not neglect them, but also avoid excessive monitoring. Maintain a steady and gentle presence—you do not need to “rescue” them constantly, but it is important that they know you are there.</span>
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
              <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex gap-2 items-start">
                  <span className="text-[#1E2A38] dark:text-blue-400 flex-shrink-0 mt-1.5">1.</span>
                  <span>Cui, L., Li, S., Wang, S., Wu, X., Liu, Y., Yu, W., Wang, Y., Tang, Y., Xia, M., & Li, B. (2024). Major depressive disorder: hypothesis, mechanism, prevention and treatment. Signal Transduction and Targeted Therapy, 9(30).</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#1E2A38] dark:text-blue-400 flex-shrink-0 mt-1.5">2.</span>
                  <span>Fancher, T. L., & Kravitz, R. L. (2010). In the clinic: Depression. Annals of Internal Medicine, 152(9), ITC5-1.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#1E2A38] dark:text-blue-400 flex-shrink-0 mt-1.5">3.</span>
                  <span>Goldman, L. S., Nielsen, N. H., & Champion, H. C. (1999). Awareness, diagnosis, and treatment of depression. Journal of General Internal Medicine, 14(9), 569–580.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#1E2A38] dark:text-blue-400 flex-shrink-0 mt-1.5">4.</span>
                  <span>Ji, B. (2023). Depressive Disorder: A General Overview. The International Conference on Interdisciplinary Humanities and Communication Studies. DOI: 10.54254/2753-7048/7/2022908.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#1E2A38] dark:text-blue-400 flex-shrink-0 mt-1.5">5.</span>
                  <span>Khune, A. A., Rathod, H. K., Deshmukh, S. P., & Chede, S. B. (2023). Mental health, depressive disorder and its management: A review. GSC Biological and Pharmaceutical Sciences, 25(2), 001–013.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#1E2A38] dark:text-blue-400 flex-shrink-0 mt-1.5">6.</span>
                  <span>Li, Z., Ruan, M., Chen, J., & Fang, Y. (2021). Major Depressive Disorder: Advances in Neuroscience Research and Translational Applications. Neuroscience Bulletin, 37(6), 863–880.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#1E2A38] dark:text-blue-400 flex-shrink-0 mt-1.5">7.</span>
                  <span>Marx, W., Penninx, B. W. J. H., Solmi, M., Furukawa, T. A., Firth, J., Carvalho, A. F., & Berk, M. (2023). Major depressive disorder. Nature Reviews Disease Primers, 9(44).</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#1E2A38] dark:text-blue-400 flex-shrink-0 mt-1.5">8.</span>
                  <span>Otte, C., Gold, S. M., Penninx, B. W., Pariante, C. M., Etkin, A., Fava, M., Mohr, D. C., & Schatzberg, A. F. (2016). Major depressive disorder. Nature Reviews Disease Primers, 2(16065).</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#1E2A38] dark:text-blue-400 flex-shrink-0 mt-1.5">9.</span>
                  <span>Psychology Translationist Network. (n.d.). Vietnamese DSM-5 Lite [Bản rút gọn tiếng Việt của Diagnostic and Statistical Manual of Mental Disorders, 5th ed.]. American Psychiatric Association.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#1E2A38] dark:text-blue-400 flex-shrink-0 mt-1.5">10.</span>
                  <span>Richards, D. (2011). Prevalence and clinical course of depression: A review. Clinical Psychology Review, 31(7), 1117–1125.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#1E2A38] dark:text-blue-400 flex-shrink-0 mt-1.5">11.</span>
                  <span>Wang, T. (2024). Major Depressive Disorder: a General Overview. SHS Web of Conferences, 186.</span>
                </li>
              </ul>
            </section>
          </>
        );
      case 'what-is-anxiety':
        return (
          <>
            <h1>Understanding Anxiety</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
              Anxiety is more than just feeling sad. It's a serious medical condition that affects how you feel, think, and handle daily activities.
            </p>
            <div className="mt-6 text-sm text-gray-500 dark:text-gray-400">
              Reading time: 5 min · Last updated: April 20, 2026
            </div>

            <section id="definition" className="mt-8">
              <h2>What is Anxiety?</h2>
              <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
              <p className="indent-8">
                    Anxiety is a completely normal part of life. Before an important exam,
                    a job interview, or when receiving troubling news from family, most
                    people experience worry, a faster heartbeat, and restlessness. This is
                    a natural survival mechanism that helps us focus and prepare to deal
                    with challenges.
                  </p>

                  <p className="indent-8">
                    Anxiety disorders, however, are fundamentally different from normal
                    anxiety. When anxiety becomes a disorder, feelings of fear and tension
                    are persistent, excessive relative to the actual situation, and
                    significantly impair daily functioning—including work, academic
                    performance, relationships, and overall quality of life (Naveen and
                    partner, 2024; Szuhany & Simon, 2022). Individuals affected are not
                    simply “overly worried” or “shy”; they are experiencing genuine
                    neurological and physiological responses that are beyond voluntary
                    control.
                  </p>

                  <div className="bg-blue-50 dark:bg-slate-800 border-l-4 border-blue-500 rounded-lg p-5">
                    <p className="text-gray-800 dark:text-gray-200 leading-relaxed text-justify">
                      According to the DSM-5 (Chapter 5: Anxiety Disorders, p. 81), the key
                      distinction between normal anxiety and an anxiety disorder lies in two
                      factors:
                    </p>

                    <ul className="mt-4 space-y-3 pl-6 list-disc text-gray-700 dark:text-gray-300">
                      <li>
                        <span className="font-semibold">Persistence</span> — symptoms
                        typically last six months or more
                      </li>

                      <li>
                        <span className="font-semibold">
                          Functional impairment
                        </span>{" "}
                        — anxiety significantly disrupts daily life
                      </li>
                    </ul>

                    <p className="mt-4 text-justify text-gray-700 dark:text-gray-300">
                      The DSM-5 also notes that anxiety disorders are more prevalent among
                      females, with an approximate ratio of 2:1 compared to males.
                    </p>
                  </div>

                  <p className="indent-8">
                    Anxiety disorders are not a single condition but rather a group of
                    related disorders, each with distinct characteristics. This document
                    focuses on five of the most common types that patients and their
                    families should understand:
                  </p>

                      Generalized Anxiety Disorder (GAD)
                      Social Anxiety Disorder
                      Panic Disorder
                      Specific Phobia
                      Agoraphobia
                  </div>

                  <p className="indent-8">
                    Epidemiological data indicate that anxiety disorders affect between 4%
                    and more than 33.7% of the global population over a lifetime (Bandelow
                    & Michaelis, 2015; Javaid and partner, 2023). The condition often
                    begins early, with an average onset around age 11, and, if left
                    untreated, tends to follow a chronic course into adulthood (Beesdo,
                    Knappe, & Pine, 2009). This highlights the critical importance of early
                    recognition and timely intervention.
                  </p>              
                  

            </section>


            <section id="symptoms" className="mt-8">
              <h2>Common Symptoms</h2>
              <p className="mt-3 leading-relaxed text-gray-700 dark:text-gray-300">
The table below presents the five most common types of anxiety disorders according to the DSM-5 diagnostic criteria, helping patients and their families recognize them.              </p>
              <div className="mt-6 overflow-x-auto">
                <table className="w-full border-collapse bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm">
                  <thead>
                    <tr className="bg-[#1E2A38] text-white">
                      <th className="px-4 py-3 text-left font-medium">Type of Disorder</th>
                      <th className="px-4 py-3 text-left font-medium">Key Diagnostic Criteria (DSM-5)</th>
                      <th className="px-4 py-3 text-left font-medium">Real-Life Manifestations</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700 dark:text-gray-300">
                    <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <td className="px-4 py-3">Generalized Anxiety Disorder  (GAD)</td>
                      <td className="px-4 py-3">Excessive anxiety and worry about multiple events or activities, persisting for at least six months, accompanied by at least three of the following six symptoms: restlessness, fatigue, difficulty concentrating, irritability, muscle tension, and sleep disturbances.</td>
                      <td className="px-4 py-3">Persistent and uncontrollable worry about work, health, family, the future, and other aspects of life. The body remains tense, the mind feels overwhelmed, and sleep is disturbed, even in the absence of a clear or immediate cause.  </td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <td className="px-4 py-3">Social Anxiety Disorder</td>
                      <td className="px-4 py-3">Marked fear of social situations, with a strong concern about being negatively evaluated or embarrassed.</td>
                      <td className="px-4 py-3">A rapid or pounding heartbeat when speaking in public, making phone calls to strangers, or participating in social gatherings. This is often followed by hours of self-criticism over perceived “foolish” remarks. </td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <td className="px-4 py-3">Panic Attacks</td>
                      <td className="px-4 py-3">Recurrent, sudden panic attacks that peak within minutes, accompanied by multiple physical symptoms and a persistent fear of experiencing another episode.</td>
                      <td className="px-4 py-3">A sudden onset of intense physical symptoms—such as a racing heartbeat, chest tightness, and shortness of breath—even while at rest. Although the episode passes quickly, the fear of “the next attack” may persist for weeks.</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <td className="px-4 py-3">Specific Phobia</td>
                      <td className="px-4 py-3">Marked and persistent fear of a specific object or situation (such as spiders, heights, flying, or injections), lasting for at least six months.</td>
                      <td className="px-4 py-3">Recognizing that the spider is not dangerous, yet still experiencing intense panic and being unable to remain in the room. Refusing to fly despite knowing that air travel is safe.</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <td className="px-4 py-3">Agoraphobia </td>
                      <td className="px-4 py-3">Marked fear or anxiety about at least two of the following five situations: using public transportation, being in open spaces, being in enclosed spaces, being in crowds, or being outside the home alone. </td>
                      <td className="px-4 py-3">Avoiding traveling alone on public transportation, such as the subway, due to fear of being unable to escape in the event of a panic attack. Over time, the individual’s range of activities gradually becomes restricted, often limited to staying at home.</td>
                    </tr>
                  
                  </tbody>
                </table>
              </div>
            </section>

            <div className="mt-6 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border-l-4 border-red-500">
              <div className="flex gap-3">
                <AlertCircle className="text-red-600 dark:text-red-400 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-medium text-red-900 dark:text-red-200 mb-1">Important Note</h4>
                  <p className="text-sm text-red-800 dark:text-red-300 leading-relaxed">
The symptoms must cause significant distress or serious impairment in daily functioning and must not be attributable to the effects of substances or other medical conditions.


Anxiety disorders commonly co-occur with depression; therefore, clinicians should conduct a comprehensive assessment to ensure that no condition is overlooked.
</p>
                </div>
              </div>
            </div>
          </>
        );  
        case 'cause':
        return (
          <>
            <h1>The main reason which cause anxiety disorders</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
              The question “Why am I experiencing anxiety like this?” is one that most individuals ask themselves, often accompanied by the unspoken concern: “Is this my fault?” The scientific answer is clear: there is no single cause, and it is certainly not your fault. Anxiety disorders arise from a complex interaction of biological, genetic, and environmental factors (Deckert, 2009).

            </p>

            <section id="cause&solution" className="mt-8">
              <h2>Cause</h2>

              <div className="mt-6 space-y-6">
                <div className="p-5 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <h3 className="text-green-600 dark:text-green-400">Biological and genetic factors</h3>
                  <p className="mt-2 text-gray-700 dark:text-gray-300 leading-relaxed">
                    <span className="indent-8 text-gray-600 dark:text-gray-400 text-justify block">
                      Anxiety disorders have a well-established biological foundation. The heritability of different anxiety disorders is estimated to range from 30% to 67%, indicating that genetics play a significant role in shaping individual vulnerability (Ströhle, Gensichen, & Domschke, 2018). In other words, some individuals are born with a lower “alarm threshold” in their nervous system—they may react more intensely to the same level of stress compared to others.
                    </span>
                    <span className="indent-8 text-gray-600 dark:text-gray-400 text-justify block">
                      Bystritsky and partner (2013) proposed the ABC model to explain the neurobiological mechanisms of anxiety: the amygdala—the brain region responsible for processing primal emotions—triggers excessive and misdirected “alarm” signals (Alarm), leading to distorted beliefs about danger (Beliefs), which in turn result in increasingly avoidant coping behaviors (Coping). In addition, imbalances in neurotransmitters—particularly GABA (the brain’s natural inhibitory regulator of anxiety), serotonin, and norepinephrine—contribute to the persistence of chronic anxiety (Naveen and partner, 2024).
                    </span>
                  </p>
                </div>

                <div className="p-5 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <h3 className="text-green-600 dark:text-green-400">
                    Psychological and environmental factors</h3>
                  <p>
                    <span className="indent-8 text-gray-600 dark:text-gray-400 text-justify block">
                      Alongside biological influences, life experiences play an equally important role. Early-life trauma, physical or emotional abuse, overly protective or overly strict parenting styles, and prolonged exposure to stressful life events are key environmental factors (Craske & Stein, 2016). These experiences not only leave psychological imprints but can also lead to epigenetic changes—that is, alterations in how genes are “turned on” or “off”—gradually reducing the individual’s ability to regulate emotions effectively.
                    </span>
                    <span className="indent-8 text-gray-600 dark:text-gray-400 text-justify block">
                      It is important to understand that biological and environmental factors do not operate independently; rather, they interact through gene–environment interactions (G×E). Two individuals with similar genetic backgrounds may have very different outcomes depending on their environments, and conversely, two individuals exposed to the same life event may respond differently based on their biological predispositions. This is why treatment approaches need to be personalized and comprehensive.
                    </span>
                  </p>
                </div>
                <div className="p-5 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <h3 className="text-green-600 dark:text-green-400">
                    The maintenance cycle: Why doesn’t anxiety simply go away?
                  </h3>
                  <p>
                    <span className="indent-8 text-gray-600 dark:text-gray-400 text-justify block">
                      A key point that many people are unaware of is that anxiety disorders tend to sustain themselves through a cyclical mechanism. When faced with an anxiety-provoking situation, individuals often avoid it. This avoidance brings immediate relief, which in turn reinforces the behavior. The brain then learns that “avoidance equals safety,” leading to increased avoidance in the future. As a result, one’s range of activities gradually narrows, while the fear itself continues to expand.                    </span>
                    <span className="indent-8 text-gray-600 dark:text-gray-400 text-justify block">
                      This explains why “just avoiding the situation” does not solve the problem—in fact, it often worsens the condition over time.
                    </span>
                  </p>
                </div>
              </div>
            </section>  
            <section id="cause&solution" className="mt-8">
              <h2>Solution</h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
                  Good news: Anxiety disorders are among the mental health conditions with the highest treatment response rates. The table below summarizes evidence-based approaches supported by strong scientific research:
                </p>
                <div className="mt-6 overflow-x-auto">
                <table className="w-full border-collapse bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm">
                  <thead>
                    <tr className="bg-[#1E2A38] text-white">
                      <th className="px-4 py-3 text-left font-medium">Treatment Method </th>
                      <th className="px-4 py-3 text-left font-medium">Description and Mechanism of Action</th>
                      <th className="px-4 py-3 text-left font-medium">References</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700 dark:text-gray-300">
                    <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <td className="px-4 py-3">Cognitive Behavioral Therapy (CBT)</td>
                      <td className="px-4 py-3">The gold standard in the treatment of anxiety. It helps individuals identify and modify maladaptive thought patterns and uses controlled exposure techniques to reduce avoidance behaviors</td>
                      <td className="px-4 py-3">Craske & Stein (2016); Ohi and partner2025) </td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <td className="px-4 py-3">Thuốc SSRIs / SNRIs</td>
                      <td className="px-4 py-3">First-line pharmacological treatment. It works by regulating the levels of serotonin and norepinephrine in the brain. It typically takes 2–6 weeks to produce noticeable effects and does not cause addiction in the manner of addictive substances.</td>
                      <td className="px-4 py-3">Szuhany & Simon (2022); Naveen and partner(2024) </td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <td className="px-4 py-3">Mindfulness and Relaxation Techniques</td>
                      <td className="px-4 py-3">Breathing exercises, progressive muscle relaxation (PMR), and mindfulness meditation help reduce amygdala activity and lower the physiological threshold of the anxiety response.</td>
                      <td className="px-4 py-3">Bystritsky and partner(2013); Craske & Stein (2016)</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <td className="px-4 py-3">Do excercises (aerobic)</td>
                      <td className="px-4 py-3">Regular aerobic exercise can be as effective as CBT for mild to moderate anxiety; it stimulates the production of BDNF and reduces chronic cortisol levels.</td>
                      <td className="px-4 py-3">Naveen and partner(2024)</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <td className="px-4 py-3">CBT digital / AI support</td>
                      <td className="px-4 py-3">Online therapeutic applications and AI-based tools are being developed to expand access to treatment, particularly in regions with limited availability of mental health professionals.</td>
                      <td className="px-4 py-3">Bui (2021)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-6 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border-l-4 border-red-500">
              <div className="flex gap-3">
                <AlertCircle className="text-red-600 dark:text-red-400 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-medium text-red-900 dark:text-red-200 mb-1">Important Note</h4>
                  <p className="text-sm text-red-800 dark:text-red-300 leading-relaxed">
                  However, no single method acts as a “standalone cure.” The most effective treatment approach typically involves a combination of psychotherapy—particularly Cognitive Behavioral Therapy (CBT)—pharmacological treatment when necessary, and lifestyle modifications. A psychiatrist or mental health professional is best suited to determine the appropriate treatment plan based on the specific type of disorder, its severity, and the individual circumstances of each patient.  </p>
                </div>
              </div>
            </div>
              
            </section>
          </>
        );
        case 'treatment':
        return (
          <>
            <h1>What You Can Do</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
                Successful treatment depends on your active participation. Below are five essential actions:
            </p>

            <section id="seek-help" className="mt-8">
              <h2>If you find out MDD symptom in yourself.</h2>
              <p className="mt-3 leading-relaxed text-gray-700 dark:text-gray-300">
                The most important thing to remember is this: you are not at fault for experiencing depression, and you do not have to face it alone. Below are practical steps you can take:
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700 dark:text-gray-300">
                                         
                <li className="flex gap-2">
                  <span className="text-[#1E2A38] dark:text-blue-400">•</span>

                  <div>
                    <span className="block text-[#1E2A38] dark:text-blue-400">
                      Action 1: Understand the nature of anxiety and stop “fighting” it
                    </span>
                    <span className="mt-2 pl-6 space-y-2 text-gray-700 dark:text-gray-300 text-justify">
                      Physical symptoms (such as a rapid heartbeat or shortness of breath) are false alarms. Observe them without trying to control them: 
                    </span>
                    <br></br>
                    <span className="mt-2 pl-6 space-y-2 text-gray-700 dark:text-gray-300 text-justify"> 
                      “I am experiencing anxiety. This feeling is uncomfortable but not dangerous. It will pass.”                    
                    </span>

                    
                  </div>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#1E2A38] dark:text-blue-400">•</span>

                  <div>
                    <span className="block text-[#1E2A38] text-bold dark:text-blue-400">
                      Action 2: Face anxiety instead of avoiding it (gradually)
                    </span>
                    <span className="mt-2 pl-6 space-y-2 text-gray-700 dark:text-gray-300 text-justify">
                      Work with a professional to build an exposure hierarchy: start with less intimidating situations and progressively approach more challenging ones in a controlled manner. Over time, the brain “relearns” that these situations are safe, reducing the fear response.                    
                    </span>

                  </div>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#1E2A38] dark:text-blue-400">•</span>

                  <div>
                    <span className="block text-[#1E2A38] dark:text-blue-400">
                      Step 3: Make evidence-based lifestyle changes:
                    </span>

                    <ul className="list-[circle] mt-2 pl-6 space-y-2 text-gray-700 dark:text-gray-300 text-justify">
                      <li>
                        Keep a symptom journal before appointments
                      </li>

                      <li>
                        Take medication as prescribed and remain consistent for 2–6 weeks (do not discontinue on your own)
                      </li>

                      <li>
                        Complete assigned CBT exercises (cognitive and behavioral restructuring)
                      </li>

                      <li>
                        Avoid excessive online searching about symptoms
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#1E2A38] dark:text-blue-400">•</span>

                  <div>
                    <span className="block text-[#1E2A38] dark:text-blue-400">
                      Action 4: Build a strong physical foundation
                    </span>

                    <ul className="list-[circle] mt-2 pl-6 space-y-2 text-gray-700 dark:text-gray-300 text-justify">
                      <li>
                        Engage in regular aerobic exercise
                      </li>

                      <li>
                        Practice deep breathing techniques (e.g., 4–4–6 breathing) and muscle relaxation
                      </li>

                      <li>
                        Maintain a consistent sleep schedule and limit caffeine and screen use before bedtime
                      </li>

                      <li>
                        Reduce alcohol consumption
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#1E2A38] dark:text-blue-400">•</span>

                  <div>
                    <span className="block text-[#1E2A38] dark:text-blue-400">
                      Action 5: Develop a support network and remain patient with the process
                    </span>
                    <span className="mt-2 pl-6 space-y-2 text-gray-700 dark:text-gray-300 text-justify">
                      Share your experience with at least one trusted person. Recovery is not a linear process—setbacks are normal. The goal is not to eliminate anxiety entirely, but to live with it without allowing it to control your life.
                    </span>
                  </div>
                </li>
              </ul>
            </section>

            <section id="support-others" className="mt-8">
              <h2>If you want to help your relative people with MDD.</h2>
              <p className="mt-3 leading-relaxed text-gray-700 dark:text-gray-300">
                You should listen more than you speak and sincerely acknowledge their feelings with statements such as, “I understand that you’re feeling anxious—I’m here with you.” Encourage and support them in seeking professional help from a psychologist or psychiatrist, for example by helping schedule appointments, reminding them of upcoming visits, and accompanying them if they are comfortable.
              </p>
              <p className="mt-3 leading-relaxed text-gray-700 dark:text-gray-300">
                You can also support them in practicing relaxation techniques, deep breathing, and gradually facing anxiety-provoking situations under the guidance of a healthcare professional. When they experience anxiety or panic episodes, remain calm and gently remind them that these symptoms are temporary and not dangerous.
              </p>
              
            </section>
          </>
        );

      case 'anxiety-references':
        return (
          <>
            <h1>References</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
              This content is based on evidence-based resources from trusted mental health organizations.
            </p>

            <section id="sources" className="mt-8">
              <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex gap-2 items-start">
                  <span className="text-[#1E2A38] dark:text-blue-400 flex-shrink-0 mt-1.5">1.</span>
                  <span>Bandelow, B., & Michaelis, S. (2015). Epidemiology of anxiety disorders in the 21st century. Dialogues in Clinical Neuroscience, 17(3), 327–335.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#1E2A38] dark:text-blue-400 flex-shrink-0 mt-1.5">2.</span>
                  <span>Beesdo, K., Knappe, S., & Pine, D. S. (2009). Anxiety and anxiety disorders in children and adolescents: developmental issues and implications for DSM-V. Psychiatric Clinics of North America, 32(3), 483–524.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#1E2A38] dark:text-blue-400 flex-shrink-0 mt-1.5">3.</span>
                  <span>Bui, E. (2021). Anxiety and Stress-Related Disorders: From Current Evidence-Based Practices to Future Artificial Intelligence–Based Innovations. Focus, 19(2), 143–144.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#1E2A38] dark:text-blue-400 flex-shrink-0 mt-1.5">4.</span>
                  <span>Bystritsky, A., Khalsa, S. S., Cameron, M. E., & Schiffman, J. (2013). Current diagnosis and treatment of anxiety disorders. P&T, 38(1), 30–57.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#1E2A38] dark:text-blue-400 flex-shrink-0 mt-1.5">5.</span>
                  <span>Craske, M. G., & Stein, M. B. (2016). Anxiety. The Lancet, 388(10063), 3048–3059.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#1E2A38] dark:text-blue-400 flex-shrink-0 mt-1.5">6.</span>
                  <span>Deckert, J. (2009). Anxiety disorders: causes, diagnosis and treatment. Acta Neuropsychiatrica, 21(S2), 9–10.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#1E2A38] dark:text-blue-400 flex-shrink-0 mt-1.5">7.</span>
                  <span>Goodwin, G. M. (2015). The overlap between anxiety, depression, and obsessive-compulsive disorder. Dialogues in Clinical Neuroscience, 17(3), 249–260.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#1E2A38] dark:text-blue-400 flex-shrink-0 mt-1.5">8.</span>
                  <span>Javaid, S. F., Hashim, I. J., Hashim, M. J., Stip, E., Samad, M. A., & Al Ahbabi, A. (2023). Epidemiology of anxiety disorders: global burden and sociodemographic associations. Middle East Current Psychiatry, 30(1),</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#1E2A38] dark:text-blue-400 flex-shrink-0 mt-1.5">9.</span>
                  <span>Naveen, V., Felic, S., Aswin, A. V., & Arul Pakasam, K. C. (2024). A Review on Current Understanding, Clinical Manifestations, and Therapeutic Approaches of Anxiety Disorders. Journal of Pharma Insights and Research, 2(5), 173–181.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#1E2A38] dark:text-blue-400 flex-shrink-0 mt-1.5">10.</span>
                  <span>Ohi, K., Fujikane, D., Takai, K., Kuramitsu, A., Muto, Y., Sugiyama, S., & Shioiri, T. (2025). Clinical features and genetic mechanisms of anxiety, fear, and avoidance: A comprehensive review of five anxiety disorders. Molecular Psychiatry, 30, 4928–4936.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#1E2A38] dark:text-blue-400 flex-shrink-0 mt-1.5">11.</span>
                  <span>Psychology Translationist Network. (n.d.). Vietnamese DSM-5 Lite [Bản rút gọn tiếng Việt của Diagnostic and Statistical Manual of Mental Disorders, 5th ed.]. American Psychiatric Association.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#1E2A38] dark:text-blue-400 flex-shrink-0 mt-1.5">12.</span>
                  <span>Scarella, T. M., Boland, R. J., & Barsky, A. J. (2019). Illness Anxiety Disorder: Psychopathology, Epidemiology, Clinical Characteristics, and Treatment. Psychosomatics, 60(5), 406–416.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#1E2A38] dark:text-blue-400 flex-shrink-0 mt-1.5">13.</span>
                  <span>Showraki, M., Showraki, T., & Brown, K. (2020). Generalized Anxiety Disorder: Revisited. Psychiatric Quarterly, 91, 1005–1014.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#1E2A38] dark:text-blue-400 flex-shrink-0 mt-1.5">14.</span>
                  <span>Ströhle, A., Gensichen, J., & Domschke, K. (2018). The Diagnosis and Treatment of Anxiety Disorders. Deutsches Ärzteblatt International, 115(37), 611–620.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#1E2A38] dark:text-blue-400 flex-shrink-0 mt-1.5">15.</span>
                  <span>Szuhany, K. L., & Simon, N. M. (2022). Anxiety Disorders: A Review. JAMA, 328(24), 2431–2445.</span>
                </li>
              </ul>
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
